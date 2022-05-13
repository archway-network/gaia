package types

import sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

var (
	ErrIBCPacketSend    = sdkerrors.Register(ModuleName, 1, "IBC packet send")
	ErrIBCConnection    = sdkerrors.Register(ModuleName, 2, "IBC connection")
	ErrIBCPacketReceive = sdkerrors.Register(ModuleName, 3, "IBC packet")
	ErrIBCPacketAck     = sdkerrors.Register(ModuleName, 4, "IBC packet ack")
	ErrIBCPacketTimeout = sdkerrors.Register(ModuleName, 5, "IBC packet timeout")
)
