package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/gaia/v7/x/chat/types"
)

var _ types.QueryServer = Keeper{}

func (k Keeper) History(goCtx context.Context, req *types.QueryHistoryRequest) (*types.QueryHistoryResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Input validation
	if req == nil {
		return nil, fmt.Errorf("req: nil")
	}

	// Query
	var msgs []types.TextMessage
	k.IterateTextMessages(ctx, req.Participant1Address, req.Participant2Address, func(msg types.TextMessage) (stop bool) {
		msgs = append(msgs, msg)
		return false
	})

	return &types.QueryHistoryResponse{
		TestMessages: msgs,
	}, nil
}
