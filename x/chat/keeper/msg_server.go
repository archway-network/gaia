package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkErrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/gaia/v7/x/chat/types"
)

var _ types.MsgServer = msgServer{}

type msgServer struct {
	Keeper
}

func NewMsgServerImpl(keeper Keeper) types.MsgServer {
	return &msgServer{Keeper: keeper}
}

func (k msgServer) SendTextMessage(goCtx context.Context, req *types.MsgSendTextMessage) (*types.MsgSendTextMessageResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Input validation
	if req == nil {
		return nil, fmt.Errorf("req: nil")
	}

	// Build and store msg
	ibcSend := false

	msg := types.TextMessage{
		SourceChainId:      ctx.ChainID(),
		DestinationChainId: ctx.ChainID(),
		Id:                 k.GetNextMsgID(ctx),
		FromAddress:        req.FromAddress,
		ToAddress:          req.ToAddress,
		Text:               req.Text,
		IsDelivered:        true,
		SendAt:             ctx.BlockTime(),
	}

	if req.IbcChannelId != "" {
		msg.DestinationChainId = fmt.Sprintf("ibc://%s:%s", req.IbcChannelId, types.IBCPortID)
		msg.IsDelivered = false
		ibcSend = true
	}

	k.StoreTextMessage(ctx, msg)
	k.StoreLastMsgID(ctx, msg.Id)
	if ibcSend {
		if err := k.SendIBCTextMessage(ctx, msg, req.IbcChannelId, req.IbcPortId); err != nil {
			k.Keeper.Logger(ctx).Error("SendTextMessage: sending IBC packet", "SendIBCTextMessage error", err)
			return nil, sdkErrors.Wrapf(types.ErrIBCPacketSend, "sending IBC packet: %v", err)
		}
	}

	return &types.MsgSendTextMessageResponse{}, nil
}
