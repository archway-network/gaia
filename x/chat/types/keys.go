package types

import (
	"bytes"
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/types/address"
)

const (
	ModuleName = "chat"

	StoreKey     = ModuleName
	RouterKey    = ModuleName
	QuerierRoute = ModuleName

	IBCVersion = "chat-1"
	IBCPortID  = "chat"
)

var (
	TextMessageKey   = []byte{0x00}
	LastMessageIDKey = []byte{0x01}
	PortKey          = []byte{0x02}
)

func GetTextMessageKey(participant1Addr, participant2Addr string, srcChainID string, msgID uint64) []byte {
	chainIDBz := address.MustLengthPrefix([]byte(srcChainID))

	msgIDBz := make([]byte, 8)
	binary.BigEndian.PutUint64(msgIDBz, msgID)

	idBz := append(chainIDBz, msgIDBz...)

	return append(GetTextMessageKeyPrefix(participant1Addr, participant2Addr), idBz...)
}

func GetTextMessageKeyPrefix(participant1Addr, participant2Addr string) []byte {
	addr1Bz := address.MustLengthPrefix([]byte(participant1Addr))
	addr2Bz := address.MustLengthPrefix([]byte(participant2Addr))

	var addrsBz []byte
	if bytes.Compare(addr1Bz, addr2Bz) <= 0 {
		addrsBz = append(addr1Bz, addr2Bz...)
	} else {
		addrsBz = append(addr2Bz, addr1Bz...)
	}

	return append(TextMessageKey, addrsBz...)
}
