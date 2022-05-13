package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/cosmos/gaia/v7/x/chat/types"
	"github.com/spf13/cobra"
)

var (
	FlagDestinationChannelID = "dst-channel-id"
	FlagDestinationPortID    = "dst-port-id"
)

func NewTxCmd() *cobra.Command {
	distTxCmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      "Chat transactions subcommands",
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	distTxCmd.AddCommand(
		NewSendTextMessageCmd(),
	)

	return distTxCmd
}

func NewSendTextMessageCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "send [to-addr] [text]",
		Short: "Send a text message to an other address (send over IBC if --dst-chain-id flag is used)",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			fromAddr := clientCtx.GetFromAddress()

			dstChannelID, _ := cmd.Flags().GetString(FlagDestinationChannelID)
			dstPortID, _ := cmd.Flags().GetString(FlagDestinationPortID)

			msg := types.NewMsgSendTextMessage(fromAddr, args[0], dstChannelID, dstPortID, args[1])
			if err := msg.ValidateBasic(); err != nil {
				return err
			}

			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	cmd.Flags().String(FlagDestinationChannelID, "", "Destination IBC channel ID (local chain if not provided)")
	cmd.Flags().String(FlagDestinationPortID, "", "Destination IBC port ID")
	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
