package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	capabilityTypes "github.com/cosmos/cosmos-sdk/x/capability/types"
	connectionTypes "github.com/cosmos/ibc-go/v3/modules/core/03-connection/types"
	channelTypes "github.com/cosmos/ibc-go/v3/modules/core/04-channel/types"
	ibcExported "github.com/cosmos/ibc-go/v3/modules/core/exported"
)

type ICS4Wrapper interface {
	SendPacket(ctx sdk.Context, channelCap *capabilityTypes.Capability, packet ibcExported.PacketI) error
}

type ChannelKeeper interface {
	GetChannel(ctx sdk.Context, srcPort, srcChan string) (channel channelTypes.Channel, found bool)
	GetNextSequenceSend(ctx sdk.Context, portID, channelID string) (uint64, bool)
	SendPacket(ctx sdk.Context, channelCap *capabilityTypes.Capability, packet ibcExported.PacketI) error
}

type ClientKeeper interface {
	GetClientConsensusState(ctx sdk.Context, clientID string) (connection ibcExported.ConsensusState, found bool)
}

type ConnectionKeeper interface {
	GetConnection(ctx sdk.Context, connectionID string) (connection connectionTypes.ConnectionEnd, found bool)
}

type PortKeeper interface {
	BindPort(ctx sdk.Context, portID string) *capabilityTypes.Capability
}
