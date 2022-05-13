package keeper

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/gaia/v7/x/chat/types"
)

func (k Keeper) InitGenesis(ctx sdk.Context) {
	k.SetPort(ctx, types.IBCPortID)

	if !k.IsBound(ctx, types.IBCPortID) {
		err := k.BindPort(ctx, types.IBCPortID)
		if err != nil {
			panic(fmt.Errorf("could not claim port capability: %w", err))
		}
	}
}
