package chat

import (
	"context"
	"encoding/json"
	"math/rand"

	sdkClient "github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/codec"
	cdcTypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simTypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/gaia/v7/x/chat/client/cli"
	"github.com/cosmos/gaia/v7/x/chat/keeper"
	"github.com/cosmos/gaia/v7/x/chat/types"
	"github.com/gorilla/mux"
	"github.com/grpc-ecosystem/grpc-gateway/runtime"
	"github.com/spf13/cobra"
	abci "github.com/tendermint/tendermint/abci/types"
)

var (
	_ module.AppModule           = AppModule{}
	_ module.AppModuleBasic      = AppModuleBasic{}
	_ module.AppModuleSimulation = AppModule{}
)

type AppModuleBasic struct {
	cdc codec.Codec
}

func (AppModuleBasic) Name() string {
	return types.ModuleName
}

func (AppModuleBasic) RegisterLegacyAminoCodec(cdc *codec.LegacyAmino) {
	types.RegisterLegacyAminoCodec(cdc)
}

func (AppModuleBasic) DefaultGenesis(cdc codec.JSONCodec) json.RawMessage {
	return []byte("{}")
}

func (AppModuleBasic) ValidateGenesis(cdc codec.JSONCodec, config sdkClient.TxEncodingConfig, bz json.RawMessage) error {
	return nil
}

func (AppModuleBasic) RegisterRESTRoutes(clientCtx sdkClient.Context, rtr *mux.Router) {}

func (AppModuleBasic) RegisterGRPCGatewayRoutes(clientCtx sdkClient.Context, mux *runtime.ServeMux) {
	types.RegisterQueryHandlerClient(context.Background(), mux, types.NewQueryClient(clientCtx))
}

func (AppModuleBasic) GetTxCmd() *cobra.Command {
	return cli.NewTxCmd()
}

func (AppModuleBasic) GetQueryCmd() *cobra.Command {
	return cli.GetQueryCmd()
}

func (b AppModuleBasic) RegisterInterfaces(registry cdcTypes.InterfaceRegistry) {
	types.RegisterInterfaces(registry)
}

type AppModule struct {
	AppModuleBasic

	keeper keeper.Keeper
}

func NewAppModule(cdc codec.Codec, keeper keeper.Keeper) AppModule {
	return AppModule{
		AppModuleBasic: AppModuleBasic{cdc: cdc},
		keeper:         keeper,
	}
}

func (AppModule) Name() string {
	return types.ModuleName
}

func (am AppModule) RegisterInvariants(ir sdk.InvariantRegistry) {}

func (am AppModule) Route() sdk.Route {
	return sdk.NewRoute(types.RouterKey, NewHandler(am.keeper))
}

func (AppModule) QuerierRoute() string {
	return types.QuerierRoute
}

func (am AppModule) LegacyQuerierHandler(legacyQuerierCdc *codec.LegacyAmino) sdk.Querier {
	return nil
}

func (am AppModule) RegisterServices(cfg module.Configurator) {
	types.RegisterMsgServer(cfg.MsgServer(), keeper.NewMsgServerImpl(am.keeper))
	types.RegisterQueryServer(cfg.QueryServer(), am.keeper)
}

func (am AppModule) InitGenesis(ctx sdk.Context, cdc codec.JSONCodec, data json.RawMessage) []abci.ValidatorUpdate {
	am.keeper.InitGenesis(ctx)

	return []abci.ValidatorUpdate{}
}

func (am AppModule) ExportGenesis(ctx sdk.Context, cdc codec.JSONCodec) json.RawMessage {
	return nil
}

func (AppModule) ConsensusVersion() uint64 {
	return 2
}

func (am AppModule) BeginBlock(ctx sdk.Context, req abci.RequestBeginBlock) {}

func (AppModule) EndBlock(_ sdk.Context, _ abci.RequestEndBlock) []abci.ValidatorUpdate {
	return []abci.ValidatorUpdate{}
}

func (AppModule) GenerateGenesisState(simState *module.SimulationState) {}

func (am AppModule) ProposalContents(simState module.SimulationState) []simTypes.WeightedProposalContent {
	return []simTypes.WeightedProposalContent{}
}

func (AppModule) RandomizedParams(r *rand.Rand) []simTypes.ParamChange {
	return []simTypes.ParamChange{}
}

func (am AppModule) RegisterStoreDecoder(sdr sdk.StoreDecoderRegistry) {}

func (am AppModule) WeightedOperations(simState module.SimulationState) []simTypes.WeightedOperation {
	return []simTypes.WeightedOperation{}
}
