package chat

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkErrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/gaia/v7/x/chat/types"
	channelTypes "github.com/cosmos/ibc-go/v3/modules/core/04-channel/types"
	ibcExported "github.com/cosmos/ibc-go/v3/modules/core/exported"
)

func (im IBCModule) OnRecvPacket(ctx sdk.Context, packet channelTypes.Packet, relayer sdk.AccAddress) ibcExported.Acknowledgement {
	im.keeper.Logger(ctx).Info(
		"IBC packet received",
		"SrcChannelID", packet.SourceChannel,
		"SrcPortID", packet.SourcePort,
		"DstChannelID", packet.DestinationChannel,
		"DstPortID", packet.DestinationPort,
	)

	var data types.TextMessagePacketData
	if err := types.ModuleCdc.UnmarshalJSON(packet.GetData(), &data); err != nil {
		im.keeper.Logger(ctx).Error("OnRecvPacket", "TextMessagePacketData unmarshal error", err)
		return channelTypes.NewErrorAcknowledgement(fmt.Sprintf("cannot unmarshal TextMessagePacket: %s", err.Error()))
	}

	im.keeper.StoreReceivedTextMessagePacket(ctx, data)

	return channelTypes.NewResultAcknowledgement([]byte{byte(1)})
}

func (im IBCModule) OnAcknowledgementPacket(ctx sdk.Context, packet channelTypes.Packet, acknowledgement []byte, relayer sdk.AccAddress) error {
	im.keeper.Logger(ctx).Info(
		"IBC ack received",
		"SrcChannelID", packet.SourceChannel,
		"SrcPortID", packet.SourcePort,
		"DstChannelID", packet.DestinationChannel,
		"DstPortID", packet.DestinationPort,
	)

	//var ack channelTypes.Acknowledgement
	//if err := types.ModuleCdc.UnmarshalJSON(acknowledgement, &ack); err != nil {
	//	return sdkErrors.Wrapf(types.ErrIBCPacketAck, "cannot unmarshal TextMessagePacket acknowledgement: %v", err)
	//}

	var data types.TextMessagePacketData
	if err := types.ModuleCdc.UnmarshalJSON(packet.GetData(), &data); err != nil {
		im.keeper.Logger(ctx).Error("OnAcknowledgementPacket", "TextMessagePacketData unmarshal error", err)
		return sdkErrors.Wrapf(types.ErrIBCPacketAck, "cannot unmarshal TextMessagePacket acknowledgement data: %v", err)
	}

	if err := im.keeper.AckSendTextMessagePacket(ctx, data); err != nil {
		im.keeper.Logger(ctx).Error("OnAcknowledgementPacket", "AckSendTextMessagePacket error", err)
		return sdkErrors.Wrapf(types.ErrIBCPacketAck, err.Error())
	}

	return nil
}

func (im IBCModule) OnTimeoutPacket(ctx sdk.Context, packet channelTypes.Packet, relayer sdk.AccAddress) error {
	im.keeper.Logger(ctx).Info(
		"IBC timeout received",
		"SrcChannelID", packet.SourceChannel,
		"SrcPortID", packet.SourcePort,
		"DstChannelID", packet.DestinationChannel,
		"DstPortID", packet.DestinationPort,
	)

	var data types.TextMessagePacketData
	if err := types.ModuleCdc.UnmarshalJSON(packet.GetData(), &data); err != nil {
		im.keeper.Logger(ctx).Error("OnTimeoutPacket", "TextMessagePacketData unmarshal error", err)
		return sdkErrors.Wrapf(types.ErrIBCPacketTimeout, "cannot unmarshal TextMessagePacket: %v", err)
	}

	im.keeper.Logger(ctx).Error("IBC packet: timeout", "ID", data.ID())

	return nil
}
