package types

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

var _ sdk.Msg = &MsgSendTextMessage{}

const (
	TypeMsgSendTextMessage = "msg_send_text_message"
)

func NewMsgSendTextMessage(fromAddr sdk.AccAddress, toAddr, ibcChannelID, ibcPortID, text string) *MsgSendTextMessage {
	return &MsgSendTextMessage{
		FromAddress:  fromAddr.String(),
		ToAddress:    toAddr,
		IbcChannelId: ibcChannelID,
		IbcPortId:    ibcPortID,
		Text:         text,
	}
}

func (m MsgSendTextMessage) Route() string {
	return ModuleName
}

func (m MsgSendTextMessage) Type() string {
	return TypeMsgSendTextMessage
}

func (m MsgSendTextMessage) GetSigners() []sdk.AccAddress {
	fromAddr, err := sdk.AccAddressFromBech32(m.FromAddress)
	if err != nil {
		panic(fmt.Errorf("fromAddress: %w", err))
	}

	return []sdk.AccAddress{fromAddr}
}

func (m MsgSendTextMessage) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(&m)

	return sdk.MustSortJSON(bz)
}

func (m MsgSendTextMessage) ValidateBasic() error {
	if m.FromAddress == "" {
		return fmt.Errorf("fromAddress: empty")
	}
	if _, err := sdk.AccAddressFromBech32(m.FromAddress); err != nil {
		return fmt.Errorf("fromAddress: %w", err)
	}

	if m.ToAddress == "" {
		return fmt.Errorf("toAddress: empty")
	}

	if m.IbcChannelId != "" && m.IbcPortId == "" {
		return fmt.Errorf("ibcPortId: empty")
	}

	if m.Text == "" {
		return fmt.Errorf("text: empty")
	}

	return nil
}
