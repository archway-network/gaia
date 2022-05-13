package keeper

import (
	"encoding/binary"
	"fmt"
	"time"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/gaia/v7/x/chat/types"
)

func (k Keeper) StoreTextMessage(ctx sdk.Context, msg types.TextMessage) {
	store := ctx.KVStore(k.storeKey)
	key := types.GetTextMessageKey(msg.FromAddress, msg.ToAddress, msg.SourceChainId, msg.Id)

	msgBz := k.cdc.MustMarshal(&msg)
	store.Set(key, msgBz)
}

func (k Keeper) IterateTextMessages(ctx sdk.Context, participant1Addr, participant2Addr string, handler func(msg types.TextMessage) (stop bool)) {
	store := ctx.KVStore(k.storeKey)
	iter := sdk.KVStorePrefixIterator(store, types.GetTextMessageKeyPrefix(participant1Addr, participant2Addr))
	defer iter.Close()

	for ; iter.Valid(); iter.Next() {
		var msg types.TextMessage
		k.cdc.MustUnmarshal(iter.Value(), &msg)

		if handler(msg) {
			break
		}
	}
}

func (k Keeper) StoreReceivedTextMessagePacket(ctx sdk.Context, packet types.TextMessagePacketData) {
	msg := types.TextMessage{
		SourceChainId:      packet.SourceChainId,
		DestinationChainId: ctx.ChainID(),
		Id:                 packet.Id,
		FromAddress:        packet.FromAddress,
		ToAddress:          packet.ToAddress,
		Text:               packet.Text,
		IsDelivered:        true,
		SendAt:             time.Unix(0, int64(packet.SendAt)),
	}

	k.StoreTextMessage(ctx, msg)
}

func (k Keeper) AckSendTextMessagePacket(ctx sdk.Context, packet types.TextMessagePacketData) error {
	store := ctx.KVStore(k.storeKey)
	key := types.GetTextMessageKey(packet.FromAddress, packet.ToAddress, packet.SourceChainId, packet.Id)

	msgBz := store.Get(key)
	if msgBz == nil {
		return fmt.Errorf("send message (%s): not found", packet.ID())
	}

	var msg types.TextMessage
	k.cdc.MustUnmarshal(msgBz, &msg)
	msg.IsDelivered = true

	k.StoreTextMessage(ctx, msg)

	return nil
}

func (k Keeper) GetNextMsgID(ctx sdk.Context) uint64 {
	store := ctx.KVStore(k.storeKey)
	key := types.LastMessageIDKey

	lastIDBz := store.Get(key)
	if lastIDBz == nil {
		return 1
	}

	if len(lastIDBz) != 8 {
		panic(fmt.Sprintf("lastMsgID len mismatch: %d / 8", len(lastIDBz)))
	}
	lastID := binary.BigEndian.Uint64(lastIDBz)

	return lastID + 1
}

func (k Keeper) StoreLastMsgID(ctx sdk.Context, id uint64) {
	store := ctx.KVStore(k.storeKey)
	key := types.LastMessageIDKey

	idBz := make([]byte, 8)
	binary.BigEndian.PutUint64(idBz, id)

	store.Set(key, idBz)
}
