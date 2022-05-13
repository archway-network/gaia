package types

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (m TextMessagePacketData) ID() string {
	return fmt.Sprintf("TextMessagePacketData ID (%s.%d, %s->%s)", m.SourceChainId, m.Id, m.FromAddress, m.ToAddress)
}

func (m TextMessagePacketData) GetBytes() []byte {
	return sdk.MustSortJSON(ModuleCdc.MustMarshalJSON(&m))
}
