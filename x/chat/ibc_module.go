package chat

import (
	"github.com/cosmos/gaia/v7/x/chat/keeper"
	porttypes "github.com/cosmos/ibc-go/v3/modules/core/05-port/types"
)

var _ porttypes.IBCModule = IBCModule{}

type IBCModule struct {
	keeper keeper.Keeper
}

func NewIBCModule(k keeper.Keeper) IBCModule {
	return IBCModule{
		keeper: k,
	}
}
