package cli

import (
	"fmt"
	"sort"
	"strings"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/gaia/v7/x/chat/types"
	"github.com/spf13/cobra"
)

func GetQueryCmd() *cobra.Command {
	distQueryCmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      "Querying commands for the chat module",
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	distQueryCmd.AddCommand(
		GetCmdQueryParams(),
	)

	return distQueryCmd
}

func GetCmdQueryParams() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "history [participant1-addr] [participant2-addr]",
		Args:  cobra.ExactArgs(2),
		Short: "Query chat history",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			queryClient := types.NewQueryClient(clientCtx)

			req := types.QueryHistoryRequest{
				Participant1Address: args[0],
				Participant2Address: args[1],
			}

			res, err := queryClient.History(cmd.Context(), &req)
			if err != nil {
				return err
			}

			return clientCtx.PrintString(TextMessageHistoryString(args[0], res.TestMessages) + "\n")
		},
	}

	flags.AddQueryFlagsToCmd(cmd)
	return cmd
}

func TextMessageHistoryString(rootAddr string, msgs []types.TextMessage) string {
	sort.Slice(msgs, func(i, j int) bool {
		if msgs[i].SendAt.Before(msgs[j].SendAt) {
			return true
		}
		if msgs[i].Id < msgs[j].Id {
			return true
		}

		return false
	})

	strs := make([]string, 0, len(msgs)+1)

	var otherAddr string
	var rootChainID, otherChainID string
	if len(msgs) > 0 {
		otherAddr = msgs[0].ToAddress
		rootChainID, otherChainID = msgs[0].SourceChainId, msgs[0].DestinationChainId
		if msgs[0].FromAddress != rootAddr {
			otherAddr = msgs[0].FromAddress
			rootChainID, otherChainID = msgs[0].DestinationChainId, msgs[0].SourceChainId
		}
	}

	strs = append(
		strs,
		fmt.Sprintf("%s (%s) <-> %s (%s):", rootAddr, rootChainID, otherAddr, otherChainID),
	)

	for _, msg := range msgs {
		dir := "->"
		if msg.ToAddress == rootAddr {
			dir = "<-"
		}

		ack := "✅"
		if !msg.IsDelivered {
			ack = "❌"
		}

		strs = append(
			strs,
			fmt.Sprintf("%s %s %s: %s",
				dir,
				msg.SendAt.Format("2006-01-02 15:04:05"),
				ack,
				msg.Text,
			),
		)
	}

	return strings.Join(strs, "\n")
}
