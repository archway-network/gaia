package keeper

import (
	"fmt"
	"time"

	sdk "github.com/cosmos/cosmos-sdk/types"
	capabilityTypes "github.com/cosmos/cosmos-sdk/x/capability/types"
	"github.com/cosmos/gaia/v7/x/chat/types"
	clientTypes "github.com/cosmos/ibc-go/v3/modules/core/02-client/types"
	channelTypes "github.com/cosmos/ibc-go/v3/modules/core/04-channel/types"
	host "github.com/cosmos/ibc-go/v3/modules/core/24-host"
)

func (k Keeper) ClaimCapability(ctx sdk.Context, cap *capabilityTypes.Capability, name string) error {
	return k.scopedKeeper.ClaimCapability(ctx, cap, name)
}

func (k Keeper) AuthenticateCapability(ctx sdk.Context, cap *capabilityTypes.Capability, name string) bool {
	return k.scopedKeeper.AuthenticateCapability(ctx, cap, name)
}

func (k Keeper) IsBound(ctx sdk.Context, portID string) bool {
	_, ok := k.scopedKeeper.GetCapability(ctx, host.PortPath(portID))

	return ok
}

func (k Keeper) BindPort(ctx sdk.Context, portID string) error {
	cap := k.portKeeper.BindPort(ctx, portID)

	return k.ClaimCapability(ctx, cap, host.PortPath(portID))
}

func (k Keeper) SendIBCTextMessage(ctx sdk.Context, msg types.TextMessage, sourceChannel, sourcePort string) error {
	sourceChannelEnd, found := k.channelKeeper.GetChannel(ctx, sourcePort, sourceChannel)
	if !found {
		return fmt.Errorf("channel with portID (%s), channelID (%s): not found", sourcePort, sourceChannel)
	}

	destinationPort := sourceChannelEnd.GetCounterparty().GetPortID()
	destinationChannel := sourceChannelEnd.GetCounterparty().GetChannelID()

	k.Logger(ctx).Info(
		"Sending IBC TextMessage",
		"SrcChannelID", sourceChannel,
		"SrcPortID", sourcePort,
		"DstChannelID", destinationChannel,
		"DstPortID", destinationPort,
	)

	sequence, found := k.channelKeeper.GetNextSequenceSend(ctx, sourcePort, sourceChannel)
	if !found {
		return fmt.Errorf("next send sequence for portID (%s), channelID (%s): not found", types.IBCPortID, sourceChannel)
	}

	channelCap, ok := k.scopedKeeper.GetCapability(ctx, host.ChannelCapabilityPath(sourcePort, sourceChannel))
	if !ok {
		return fmt.Errorf("channel capability for portID (%s), channelID (%s): not found", types.IBCPortID, sourceChannel)
	}

	packetData := types.TextMessagePacketData{
		SourceChainId: msg.SourceChainId,
		Id:            msg.Id,
		FromAddress:   msg.FromAddress,
		ToAddress:     msg.ToAddress,
		Text:          msg.Text,
		SendAt:        uint64(msg.SendAt.UnixNano()),
	}
	k.Logger(ctx).Info("SendIBCTextMessage", "Packet data", string(packetData.GetBytes()))

	packetTimeout := ctx.BlockTime().Add(30 * time.Second).UnixNano()

	packet := channelTypes.NewPacket(
		packetData.GetBytes(),
		sequence,
		sourcePort,
		sourceChannel,
		destinationPort,
		destinationChannel,
		clientTypes.ZeroHeight(),
		uint64(packetTimeout),
	)

	if err := k.channelKeeper.SendPacket(ctx, channelCap, packet); err != nil {
		return err
	}

	return nil
}
