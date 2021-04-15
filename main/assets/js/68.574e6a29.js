(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{646:function(e,t,a){"use strict";a.r(t);var o=a(0),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"join-the-cosmos-hub-mainnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#join-the-cosmos-hub-mainnet"}},[e._v("#")]),e._v(" Join the Cosmos Hub Mainnet")]),e._v(" "),a("h2",{attrs:{id:"quickstart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quickstart"}},[e._v("#")]),e._v(" Quickstart")]),e._v(" "),a("p",[a("strong",[e._v("Get Ready")]),e._v("\nNote: You'll need Go v1.16 or higher.")]),e._v(" "),a("p",[e._v("This will:")]),e._v(" "),a("ul",[a("li",[e._v("Compile gaia")]),e._v(" "),a("li",[e._v("give your node a moniker and configure it")]),e._v(" "),a("li",[e._v("download compressed genesis state")]),e._v(" "),a("li",[e._v("put genesis.json in the correct location")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2l0IGNsb25lIC1iIHY0LjIuMSBodHRwczovL2dpdGh1Yi5jb20vY29zbW9zL2dhaWEKY2QgZ2FpYQptYWtlIGluc3RhbGwKZ2FpYWQgaW5pdCBjaG9vc2VhbmljZWhhbmRsZQp3Z2V0IGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3MvbWFpbm5ldC9yYXcvbWFzdGVyL2dlbmVzaXMuY29zbW9zaHViLTQuanNvbi5negpnemlwIC1kIGdlbmVzaXMuY29zbW9zaHViLTQuanNvbi5negptdiBnZW5lc2lzLmNvc21vc2h1Yi00Lmpzb24gfi8uZ2FpYS9jb25maWcvZ2VuZXNpcy5qc29uCg=="}}),e._v(" "),a("p",[a("strong",[e._v("Go")]),e._v("\nStarts Gaia")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhcnQgLS1wMnAuc2VlZHMgYmY4MzI4YjY2ZGNlYjQ5ODdlNWNkOTQ0MzBhZjY2MDQ1ZTU5ODk5ZkBwdWJsaWMtc2VlZC5jb3Ntb3Mudml0d2l0LmNvbToyNjY1NixjZmQ3ODVhNDIyNGM3OTQwZTlhMTBmNmMxYWIyNGMzNDNlOTIzYmVjQDE2NC42OC4xMDcuMTg4OjI2NjU2LGQ3MmIzMDExZWQ0NmQ3ODNlMzY5ZmRmOGFlMjA1NWI5OWExZTUwNzRAMTczLjI0OS41MC4yNToyNjY1NixiYTNiYWNjNzE0ODE3MjE4NTYyZjc0MzE3ODIyOGYyMzY3OGIyODczQHB1YmxpYy1zZWVkLW5vZGUuY29zbW9zaHViLmNlcnR1cy5vbmU6MjY2NTYsM2M3Y2FkNDE1NDk2N2EyOTRiM2JhMWNjNzUyZTQwZTg3Nzk2NDBhZEA4NC4yMDEuMTI4LjExNToyNjY1NiwzNjZhYzg1MjI1NWMzYWM4ZGUxN2UxMWFlOWVjODE0YjhjNjhiZGRiQDUxLjE1Ljk0LjE5NjoyNjY1NiAtLXgtY3Jpc2lzLXNraXAtYXNzZXJ0LWludmFyaWFudHMK"}}),e._v(" "),a("p",[e._v("Note:  If your node is unable to connect to any of the seeds listed here, you can find seeds and peers in "),a("a",{attrs:{href:"https://hackmd.io/@KFEZk8oMTz6vBlwADz0M4A/BkKEUOsZu#",target:"_blank",rel:"noopener noreferrer"}},[e._v("this document"),a("OutboundLink")],1),e._v(" maintained by community members, and at "),a("a",{attrs:{href:"https://atlas.cosmos.network/nodes",target:"_blank",rel:"noopener noreferrer"}},[e._v("Atlas"),a("OutboundLink")],1),e._v(", which is automatically generated by crawling the network.")]),e._v(" "),a("p",[e._v("If you'd like to save those seeds to your settings put them in ~/.gaia/config/config.toml in the p2p section under seeds in the same comma-separated list format.")]),e._v(" "),a("h2",{attrs:{id:"setting-up-a-new-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-a-new-node"}},[e._v("#")]),e._v(" Setting Up a New Node")]),e._v(" "),a("p",[a("strong",[e._v("You need to "),a("RouterLink",{attrs:{to:"/gaia-tutorials/installation.html"}},[e._v("install gaia")]),e._v(" before you go further")],1)]),e._v(" "),a("p",[e._v("These instructions are for setting up a brand new full node from scratch.")]),e._v(" "),a("p",[e._v("First, initialize the node and create the necessary config files:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgaW5pdCAmbHQ7eW91cl9jdXN0b21fbW9uaWtlciZndDsK"}}),e._v(" "),a("p",[a("strong",[e._v("Note")]),e._v("\nMonikers can contain only ASCII characters. Using Unicode characters will render your node unreachable.")]),e._v(" "),a("p",[e._v("You can edit this "),a("code",[e._v("moniker")]),e._v(" later, in the "),a("code",[e._v("~/.gaia/config/config.toml")]),e._v(" file:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"IyBBIGN1c3RvbSBodW1hbiByZWFkYWJsZSBuYW1lIGZvciB0aGlzIG5vZGUKbW9uaWtlciA9ICZxdW90OyZsdDt5b3VyX2N1c3RvbV9tb25pa2VyJmd0OyZxdW90Owo="}}),e._v(" "),a("p",[e._v("You can edit the "),a("code",[e._v("~/.gaia/config/app.toml")]),e._v(" file in order to enable the anti spam mechanism and reject incoming transactions with less than the minimum gas prices:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"IyBUaGlzIGlzIGEgVE9NTCBjb25maWcgZmlsZS4KIyBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90b21sLWxhbmcvdG9tbAoKIyMjIyMgbWFpbiBiYXNlIGNvbmZpZyBvcHRpb25zICMjIyMjCgojIFRoZSBtaW5pbXVtIGdhcyBwcmljZXMgYSB2YWxpZGF0b3IgaXMgd2lsbGluZyB0byBhY2NlcHQgZm9yIHByb2Nlc3NpbmcgYQojIHRyYW5zYWN0aW9uLiBBIHRyYW5zYWN0aW9uJ3MgZmVlcyBtdXN0IG1lZXQgdGhlIG1pbmltdW0gb2YgYW55IGRlbm9taW5hdGlvbgojIHNwZWNpZmllZCBpbiB0aGlzIGNvbmZpZyAoZS5nLiAxMHVhdG9tKS4KCm1pbmltdW0tZ2FzLXByaWNlcyA9ICZxdW90OyZxdW90Owo="}}),e._v(" "),a("p",[e._v("Your full node has been initialized!")]),e._v(" "),a("h2",{attrs:{id:"genesis-seeds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#genesis-seeds"}},[e._v("#")]),e._v(" Genesis & Seeds")]),e._v(" "),a("h3",{attrs:{id:"copy-the-genesis-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copy-the-genesis-file"}},[e._v("#")]),e._v(" Copy the Genesis File")]),e._v(" "),a("p",[e._v("Fetch the mainnet's "),a("code",[e._v("genesis.json")]),e._v(" file into "),a("code",[e._v("gaiad")]),e._v("'s config directory.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWtkaXIgLXAgJEhPTUUvLmdhaWEvY29uZmlnCndnZXQgaHR0cHM6Ly9naXRodWIuY29tL2Nvc21vcy9tYWlubmV0L3Jhdy9tYXN0ZXIvZ2VuZXNpcy5jb3Ntb3NodWItNC5qc29uLmd6Cmd6aXAgLWQgZ2VuZXNpcy5jb3Ntb3NodWItNC5qc29uLmd6Cm12IGdlbmVzaXMuY29zbW9zaHViLTQuanNvbiAkSE9NRS8uZ2FpYS9jb25maWcK"}}),e._v(" "),a("p",[e._v("If you want to connect to the public testnet instead, click "),a("RouterLink",{attrs:{to:"/gaia-tutorials/join-testnet.html"}},[e._v("here")])],1),e._v(" "),a("p",[e._v("To verify the correctness of the configuration run:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhcnQK"}}),e._v(" "),a("h3",{attrs:{id:"add-seed-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-seed-nodes"}},[e._v("#")]),e._v(" Add Seed Nodes")]),e._v(" "),a("p",[e._v("Your node needs to know how to find peers. You'll need to add healthy seed nodes to "),a("code",[e._v("$HOME/.gaia/config/config.toml")]),e._v(". The "),a("a",{attrs:{href:"https://github.com/cosmos/launch",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("launch")]),a("OutboundLink")],1),e._v(" repo contains links to some seed nodes.")]),e._v(" "),a("p",[e._v("If those seeds aren't working, you can find more seeds and persistent peers on a Cosmos Hub explorer (a list can be found on the "),a("a",{attrs:{href:"https://cosmos.network/launch",target:"_blank",rel:"noopener noreferrer"}},[e._v("launch page"),a("OutboundLink")],1),e._v(").")]),e._v(" "),a("h2",{attrs:{id:"a-note-on-gas-and-fees"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-note-on-gas-and-fees"}},[e._v("#")]),e._v(" A Note on Gas and Fees")]),e._v(" "),a("p",[e._v("On Cosmos Hub mainnet, the accepted denom is "),a("code",[e._v("uatom")]),e._v(", where "),a("code",[e._v("1atom = 1.000.000uatom")])]),e._v(" "),a("p",[e._v("Transactions on the Cosmos Hub network need to include a transaction fee in order to be processed. This fee pays for the gas required to run the transaction. The formula is the following:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ZmVlcyA9IGNlaWwoZ2FzICogZ2FzUHJpY2VzKQo="}}),e._v(" "),a("p",[e._v("The "),a("code",[e._v("gas")]),e._v(" is dependent on the transaction. Different transaction require different amount of "),a("code",[e._v("gas")]),e._v(". The "),a("code",[e._v("gas")]),e._v(" amount for a transaction is calculated as it is being processed, but there is a way to estimate it beforehand by using the "),a("code",[e._v("auto")]),e._v(" value for the "),a("code",[e._v("gas")]),e._v(" flag. Of course, this only gives an estimate. You can adjust this estimate with the flag "),a("code",[e._v("--gas-adjustment")]),e._v(" (default "),a("code",[e._v("1.0")]),e._v(") if you want to be sure you provide enough "),a("code",[e._v("gas")]),e._v(" for the transaction.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("gasPrice")]),e._v(" is the price of each unit of "),a("code",[e._v("gas")]),e._v(". Each validator sets a "),a("code",[e._v("min-gas-price")]),e._v(" value, and will only include transactions that have a "),a("code",[e._v("gasPrice")]),e._v(" greater than their "),a("code",[e._v("min-gas-price")]),e._v(".")]),e._v(" "),a("p",[e._v("The transaction "),a("code",[e._v("fees")]),e._v(" are the product of "),a("code",[e._v("gas")]),e._v(" and "),a("code",[e._v("gasPrice")]),e._v(". As a user, you have to input 2 out of 3. The higher the "),a("code",[e._v("gasPrice")]),e._v("/"),a("code",[e._v("fees")]),e._v(", the higher the chance that your transaction will get included in a block.")]),e._v(" "),a("p",[e._v("For mainnet, the recommended "),a("code",[e._v("gas-prices")]),e._v(" is "),a("code",[e._v("0.025uatom")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"set-minimum-gas-prices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-minimum-gas-prices"}},[e._v("#")]),e._v(" Set "),a("code",[e._v("minimum-gas-prices")])]),e._v(" "),a("p",[e._v("Your full-node keeps unconfirmed transactions in its mempool. In order to protect it from spam, it is better to set a "),a("code",[e._v("minimum-gas-prices")]),e._v(" that the transaction must meet in order to be accepted in your node's mempool. This parameter can be set in the following file "),a("code",[e._v("~/.gaia/config/app.toml")]),e._v(".")]),e._v(" "),a("p",[e._v("The initial recommended "),a("code",[e._v("min-gas-prices")]),e._v(" is "),a("code",[e._v("0.025uatom")]),e._v(", but you might want to change it later.")]),e._v(" "),a("h2",{attrs:{id:"pruning-of-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pruning-of-state"}},[e._v("#")]),e._v(" Pruning of State")]),e._v(" "),a("p",[e._v("There are three strategies for pruning state, please be aware that this is only for state and not for block storage:")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("PruneEverything")]),e._v(": This means that all saved states will be pruned other than the current.")]),e._v(" "),a("li",[a("code",[e._v("PruneNothing")]),e._v(": This means that all state will be saved and nothing will be deleted.")]),e._v(" "),a("li",[a("code",[e._v("PruneSyncable")]),e._v(": This means that only the state of the last 100 and every 10,000th blocks will be saved.")])]),e._v(" "),a("p",[e._v("By default every node is in "),a("code",[e._v("PruneSyncable")]),e._v(" mode. If you would like to change your nodes pruning strategy then you must do so when the node is initialized. For example, if you would like to change your node to the "),a("code",[e._v("PruneEverything")]),e._v(" mode then you can pass the "),a("code",[e._v("---pruning everything")]),e._v(" flag when you call "),a("code",[e._v("gaiad start")]),e._v(".")]),e._v(" "),a("blockquote",[a("p",[e._v("Note: When you are pruning state you will not be able to query the heights that are not in your store.")])]),e._v(" "),a("h2",{attrs:{id:"run-a-full-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-a-full-node"}},[e._v("#")]),e._v(" Run a Full Node")]),e._v(" "),a("p",[e._v("Start the full node with this command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhcnQK"}}),e._v(" "),a("p",[e._v("Check that everything is running smoothly:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhdHVzCg=="}}),e._v(" "),a("p",[e._v("View the status of the network with the "),a("a",{attrs:{href:"https://cosmos.network/launch",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos Explorer"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"export-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#export-state"}},[e._v("#")]),e._v(" Export State")]),e._v(" "),a("p",[e._v("Gaia can dump the entire application state to a JSON file, which could be useful for manual analysis and can also be used as the genesis file of a new network.")]),e._v(" "),a("p",[e._v("Export state with:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgZXhwb3J0ICZndDsgW2ZpbGVuYW1lXS5qc29uCg=="}}),e._v(" "),a("p",[e._v("You can also export state from a particular height (at the end of processing the block of that height):")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgZXhwb3J0IC0taGVpZ2h0IFtoZWlnaHRdICZndDsgW2ZpbGVuYW1lXS5qc29uCg=="}}),e._v(" "),a("p",[e._v("If you plan to start a new network from the exported state, export with the "),a("code",[e._v("--for-zero-height")]),e._v(" flag:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgZXhwb3J0IC0taGVpZ2h0IFtoZWlnaHRdIC0tZm9yLXplcm8taGVpZ2h0ICZndDsgW2ZpbGVuYW1lXS5qc29uCg=="}}),e._v(" "),a("h2",{attrs:{id:"verify-mainnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verify-mainnet"}},[e._v("#")]),e._v(" Verify Mainnet")]),e._v(" "),a("p",[e._v("Help to prevent a catastrophe by running invariants on each block on your full\nnode. In essence, by running invariants you ensure that the state of mainnet is\nthe correct expected state. One vital invariant check is that no atoms are\nbeing created or destroyed outside of expected protocol, however there are many\nother invariant checks each unique to their respective module. Because invariant checks\nare computationally expensive, they are not enabled by default. To run a node with\nthese checks start your node with the assert-invariants-blockly flag:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhcnQgLS1hc3NlcnQtaW52YXJpYW50cy1ibG9ja2x5Cg=="}}),e._v(" "),a("p",[e._v("If an invariant is broken on your node, your node will panic and prompt you to send\na transaction which will halt mainnet. For example the provided message may look like:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aW52YXJpYW50IGJyb2tlbjoKICAgIGxvb3NlIHRva2VuIGludmFyaWFuY2U6CiAgICAgICAgcG9vbC5Ob3RCb25kZWRUb2tlbnM6IDEwMAogICAgICAgIHN1bSBvZiBhY2NvdW50IHRva2VuczogMTAxCiAgICBDUklUSUNBTCBwbGVhc2Ugc3VibWl0IHRoZSBmb2xsb3dpbmcgdHJhbnNhY3Rpb246CiAgICAgICAgZ2FpYWQgdHggY3Jpc2lzIGludmFyaWFudC1icm9rZW4gc3Rha2luZyBzdXBwbHkKCg=="}}),e._v(" "),a("p",[e._v("When submitting a invariant-broken transaction, transaction fee tokens are not\ndeducted as the blockchain will halt (aka. this is a free transaction).")]),e._v(" "),a("h2",{attrs:{id:"upgrade-to-validator-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-to-validator-node"}},[e._v("#")]),e._v(" Upgrade to Validator Node")]),e._v(" "),a("p",[e._v("You now have an active full node. What's the next step? You can upgrade your full node to become a Cosmos Validator. The top 125 validators have the ability to propose new blocks to the Cosmos Hub. Continue onto "),a("RouterLink",{attrs:{to:"/validators/validator-setup.html"}},[e._v("the Validator Setup")]),e._v(".")],1)],1)}),[],!1,null,null,null);t.default=n.exports}}]);