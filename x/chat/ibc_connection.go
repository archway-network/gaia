package chat

import (
	"fmt"
	"math"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkErrors "github.com/cosmos/cosmos-sdk/types/errors"
	capabilityTypes "github.com/cosmos/cosmos-sdk/x/capability/types"
	"github.com/cosmos/gaia/v7/x/chat/keeper"
	"github.com/cosmos/gaia/v7/x/chat/types"
	channelTypes "github.com/cosmos/ibc-go/v3/modules/core/04-channel/types"
	host "github.com/cosmos/ibc-go/v3/modules/core/24-host"
)

func (im IBCModule) OnChanOpenInit(ctx sdk.Context, order channelTypes.Order, connectionHops []string, portID string, channelID string, chanCap *capabilityTypes.Capability, counterparty channelTypes.Counterparty, version string) error {
	if err := validateTransferChannelParams(ctx, im.keeper, order, portID, channelID); err != nil {
		im.keeper.Logger(ctx).Error("OnChanOpenInit", "validateTransferChannelParams error", err)
		return sdkErrors.Wrapf(types.ErrIBCConnection, "validating channel params: %v", err)
	}

	if version != types.IBCVersion {
		im.keeper.Logger(ctx).Error("OnChanOpenInit", "version mismatch")
		return sdkErrors.Wrapf(types.ErrIBCConnection, "version (%s): (%s) is expected", version, types.IBCVersion)
	}

	capabilityPath := host.ChannelCapabilityPath(portID, channelID)
	if err := im.keeper.ClaimCapability(ctx, chanCap, capabilityPath); err != nil {
		im.keeper.Logger(ctx).Error("OnChanOpenInit", "ClaimCapability error", err)
		return sdkErrors.Wrapf(types.ErrIBCConnection, "claiming capability: %v", err)
	}

	return nil
}

func (im IBCModule) OnChanOpenTry(ctx sdk.Context, order channelTypes.Order, connectionHops []string, portID, channelID string, chanCap *capabilityTypes.Capability, counterparty channelTypes.Counterparty, counterpartyVersion string) (string, error) {
	if err := validateTransferChannelParams(ctx, im.keeper, order, portID, channelID); err != nil {
		im.keeper.Logger(ctx).Error("OnChanOpenTry", "validateTransferChannelParams error", err)
		return "", sdkErrors.Wrapf(types.ErrIBCConnection, "validating channel params: %v", err)
	}

	if counterpartyVersion != types.IBCVersion {
		im.keeper.Logger(ctx).Error("OnChanOpenTry", "version mismatch")
		return "", sdkErrors.Wrapf(types.ErrIBCConnection, "version (%s): (%s) is expected", counterpartyVersion, types.IBCVersion)
	}

	capabilityPath := host.ChannelCapabilityPath(portID, channelID)
	if !im.keeper.AuthenticateCapability(ctx, chanCap, capabilityPath) {
		if err := im.keeper.ClaimCapability(ctx, chanCap, capabilityPath); err != nil {
			im.keeper.Logger(ctx).Error("OnChanOpenTry", "ClaimCapability error", err)
			return "", sdkErrors.Wrapf(types.ErrIBCConnection, "claiming capability: %v", err)
		}
	}

	return types.IBCVersion, nil
}

func (im IBCModule) OnChanOpenAck(ctx sdk.Context, portID, channelID string, counterpartyChannelID string, counterpartyVersion string) error {
	if counterpartyVersion != types.IBCVersion {
		im.keeper.Logger(ctx).Error("OnChanOpenAck", "version mismatch")
		return sdkErrors.Wrapf(types.ErrIBCConnection, "version (%s): (%s) is expected", counterpartyVersion, types.IBCVersion)
	}

	return nil
}

func (im IBCModule) OnChanOpenConfirm(ctx sdk.Context, portID, channelID string) error {
	return nil
}

func (im IBCModule) OnChanCloseInit(ctx sdk.Context, portID, channelID string) error {
	im.keeper.Logger(ctx).Error("OnChanCloseInit", "Unimplemented")
	return sdkErrors.Wrapf(types.ErrIBCConnection, "user cannot close channel")
}

func (im IBCModule) OnChanCloseConfirm(ctx sdk.Context, portID, channelID string) error {
	return nil
}

func validateTransferChannelParams(ctx sdk.Context, keeper keeper.Keeper, order channelTypes.Order, portID string, channelID string) error {
	channelSequence, err := channelTypes.ParseChannelSequence(channelID)
	if err != nil {
		return fmt.Errorf("channel sequence: parsing  (%s): %w", channelID, err)
	}

	if channelSequence > uint64(math.MaxUint32) {
		return fmt.Errorf("channel sequence (%d): GT max allowed (%d)", channelSequence, math.MaxUint32)
	}

	if order != channelTypes.UNORDERED {
		return fmt.Errorf("channel type (%s): (%s) is expected", order, channelTypes.UNORDERED)
	}

	boundPort := keeper.GetPort(ctx)
	if boundPort != portID {
		return fmt.Errorf("port (%s): (%s) is expected", portID, boundPort)
	}

	return nil
}
