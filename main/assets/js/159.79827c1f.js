(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{509:function(e,a,t){"use strict";t.r(a);var r=t(1),o=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"cosmos-hub-4-v9-lambda-upgrade-instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cosmos-hub-4-v9-lambda-upgrade-instructions"}},[e._v("#")]),e._v(" Cosmos Hub 4, v9-Lambda Upgrade, Instructions")]),e._v(" "),t("p",[e._v("This document describes the steps for validator and full node operators for the successful execution of the "),t("a",{attrs:{href:"https://github.com/cosmos/gaia/blob/main/docs/roadmap/cosmos-hub-roadmap-2.0.md#v9-lambda-upgrade-expected-q1-2023",target:"_blank",rel:"noopener noreferrer"}},[e._v("v9-Lambda Upgrade"),t("OutboundLink")],1),e._v(", which contains the following main new features/improvement:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/cosmos/interchain-security",target:"_blank",rel:"noopener noreferrer"}},[e._v("Interchain-Security"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/cosmos/interchain-security/releases/tag/v1.0.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("v1.0.0"),t("OutboundLink")],1),e._v(" provider module. See the "),t("a",{attrs:{href:"https://github.com/cosmos/ibc/blob/main/spec/app/ics-028-cross-chain-validation/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS Spec"),t("OutboundLink")],1),e._v(" for more details.")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("cosmos-sdk"),t("OutboundLink")],1),e._v(" to "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/releases/tag/v0.45.13-ics",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.45.13-ics"),t("OutboundLink")],1),e._v(". See "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/releases/tag/v0.45.13-ics",target:"_blank",rel:"noopener noreferrer"}},[e._v("CHANGELOG.md"),t("OutboundLink")],1),e._v(" for details.")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/cosmos/ibc-go",target:"_blank",rel:"noopener noreferrer"}},[e._v("ibc-go"),t("OutboundLink")],1),e._v(" to "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/release/v4.2.x/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("v4.2.0"),t("OutboundLink")],1),e._v(". See "),t("a",{attrs:{href:"https://github.com/cosmos/ibc-go/releases/tag/v4.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("v4.2 Release Notes"),t("OutboundLink")],1),e._v(" for details.")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/informalsystems/tendermint",target:"_blank",rel:"noopener noreferrer"}},[e._v("tendermint"),t("OutboundLink")],1),e._v(" to "),t("a",{attrs:{href:"https://github.com/informalsystems/tendermint/tree/v0.34.26",target:"_blank",rel:"noopener noreferrer"}},[e._v("0.34.26"),t("OutboundLink")],1),e._v(". See "),t("a",{attrs:{href:"https://github.com/informalsystems/tendermint/blob/v0.34.26/CHANGELOG.md#v03426",target:"_blank",rel:"noopener noreferrer"}},[e._v("CHANGELOG.md"),t("OutboundLink")],1),e._v(" for details.")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/strangelove-ventures/packet-forward-middleware",target:"_blank",rel:"noopener noreferrer"}},[e._v("packet-forward-middleware"),t("OutboundLink")],1),e._v(" to "),t("a",{attrs:{href:"https://github.com/strangelove-ventures/packet-forward-middleware/releases/tag/v4.0.4",target:"_blank",rel:"noopener noreferrer"}},[e._v("v4.0.4"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/cosmos/gaia/blob/main/tests/e2e/e2e_gov_test.go#L138",target:"_blank",rel:"noopener noreferrer"}},[e._v("E2E ccv tests"),t("OutboundLink")],1),e._v(". Tests covering new functionality introduced by the provider module to add and remove a consumer chain via governance proposal.")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/cosmos/gaia/blob/main/tests/ics/interchain_security_test.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("integration ccv tests"),t("OutboundLink")],1),e._v(". Imports Interchain-Security's "),t("code",[e._v("TestCCVTestSuite")]),e._v(" and implements Gaia as the provider chain.")])]),e._v(" "),t("p",[e._v("TOC:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#cosmos-hub-4-v9-lambda-upgrade-instructions"}},[e._v("Cosmos Hub 4, v9-Lambda Upgrade, Instructions")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#on-chain-governance-proposal-attains-consensus"}},[e._v("On-chain governance proposal attains consensus")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#upgrade-will-take-place-march-15-2023"}},[e._v("Upgrade will take place March 15, 203")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#chain-id-will-remain-the-same"}},[e._v("Chain-id will remain the same")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#preparing-for-the-upgrade"}},[e._v("Preparing for the upgrade")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#system-requirement"}},[e._v("System requirement")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#backups"}},[e._v("Backups")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#testing"}},[e._v("Testing")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#current-runtime-cosmoshub-4-pre-v9-lambda-upgrade-is-running-gaia-v801"}},[e._v("Current runtime, cosmoshub-4 (pre-v9-Lambda upgrade) is running Gaia v8.0.1")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#target-runtime-cosmoshub-4-post-v9-lambda-upgrade-will-run-gaia-v900"}},[e._v("Target runtime, cosmoshub-4 (post-v9-Lambda upgrade) will run Gaia v9.0.0")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#v9-Lambda-upgrade-steps"}},[e._v("v9-Lambda upgrade steps")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#method-i-manual-upgrade"}},[e._v("Method I: Manual Upgrade")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#method-ii-upgrade-using-cosmovisor"}},[e._v("Method II: Upgrade using Cosmovisor")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#manually-preparing-the-gaia-v900-binary"}},[e._v("Manually preparing the binary")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#preparation"}},[e._v("Preparation")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#expected-upgrade-result"}},[e._v("Expected upgrade result")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#auto-downloading-the-gaia-v900-binary-not-recommended"}},[e._v("Auto-Downloading the Gaia v9.0.0 binary (not recommended!)")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#preparation-1"}},[e._v("Preparation")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#expected-result"}},[e._v("Expected result")])])])])])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#upgrade-duration"}},[e._v("Upgrade duration")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#rollback-plan"}},[e._v("Rollback plan")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#communications"}},[e._v("Communications")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#risks"}},[e._v("Risks")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#reference"}},[e._v("Reference")])])])])]),e._v(" "),t("h2",{attrs:{id:"on-chain-governance-proposal-attains-consensus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#on-chain-governance-proposal-attains-consensus"}},[e._v("#")]),e._v(" On-chain governance proposal attains consensus")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.mintscan.io/cosmos/proposals/187",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proposal #187"),t("OutboundLink")],1),e._v(" is the reference on-chain governance proposal for this upgrade, which is still in its voting period. Neither core developers nor core funding entities control the governance, and this governance proposal has passed in a "),t("em",[e._v("fully decentralized")]),e._v(" way.")]),e._v(" "),t("h2",{attrs:{id:"upgrade-will-take-place-march-14-16-2023"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-will-take-place-march-14-16-2023"}},[e._v("#")]),e._v(" Upgrade will take place March 14-16, 2023")]),e._v(" "),t("p",[e._v("The upgrade will take place at a block height of "),t("code",[e._v("14470501")]),e._v(". The date/time of the upgrade is subject to change as blocks are not generated at a constant interval. You can stay up-to-date using this "),t("a",{attrs:{href:"https://www.mintscan.io/cosmos/blocks/14470501",target:"_blank",rel:"noopener noreferrer"}},[e._v("live countdown"),t("OutboundLink")],1),e._v(" page.")]),e._v(" "),t("h2",{attrs:{id:"chain-id-will-remain-the-same"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chain-id-will-remain-the-same"}},[e._v("#")]),e._v(" Chain-id will remain the same")]),e._v(" "),t("p",[e._v("The chain-id of the network will remain the same, "),t("code",[e._v("cosmoshub-4")]),e._v(". This is because an in-place migration of state will take place, i.e., this upgrade does not export any state.")]),e._v(" "),t("h2",{attrs:{id:"preparing-for-the-upgrade"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparing-for-the-upgrade"}},[e._v("#")]),e._v(" Preparing for the upgrade")]),e._v(" "),t("h3",{attrs:{id:"system-requirement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-requirement"}},[e._v("#")]),e._v(" System requirement")]),e._v(" "),t("p",[e._v("32GB RAM is recommended to ensure a smooth upgrade.")]),e._v(" "),t("p",[e._v("If you have less than 32GB RAM, you might try creating a swapfile to swap an idle program onto the hard disk to free up memory. This can\nallow your machine to run the binary than it could run in RAM alone.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"c3VkbyBmYWxsb2NhdGUgLWwgMTZHIC9zd2FwZmlsZQpzdWRvIGNobW9kIDYwMCAvc3dhcGZpbGUKc3VkbyBta3N3YXAgL3N3YXBmaWxlCnN1ZG8gc3dhcG9uIC9zd2FwZmlsZQo="}}),e._v(" "),t("h3",{attrs:{id:"backups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backups"}},[e._v("#")]),e._v(" Backups")]),e._v(" "),t("p",[e._v("Prior to the upgrade, validators are encouraged to take a full data snapshot. Snapshotting depends heavily on infrastructure, but generally this can be done by backing up the "),t("code",[e._v(".gaia")]),e._v(" directory.\nIf you use Cosmovisor to upgrade, by default, Cosmovisor will backup your data upon upgrade. See below "),t("a",{attrs:{href:"#method-ii-upgrade-using-cosmovisor-by-manually-preparing-the-gaia-v700-binary"}},[e._v("upgrade by cosmovisor")]),e._v(" section.")]),e._v(" "),t("p",[e._v("It is critically important for validator operators to back-up the "),t("code",[e._v(".gaia/data/priv_validator_state.json")]),e._v(" file after stopping the gaiad process. This file is updated every block as your validator participates in consensus rounds. It is a critical file needed to prevent double-signing, in case the upgrade fails and the previous chain needs to be restarted.")]),e._v(" "),t("h3",{attrs:{id:"testing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[e._v("#")]),e._v(" Testing")]),e._v(" "),t("p",[e._v("For those validator and full node operators that are interested in ensuring preparedness for the impending upgrade, you can run a "),t("a",{attrs:{href:"https://github.com/cosmos/testnets/tree/master/local",target:"_blank",rel:"noopener noreferrer"}},[e._v("v8-Rho local testnet"),t("OutboundLink")],1),e._v(" or join in our "),t("a",{attrs:{href:"https://github.com/cosmos/testnets/tree/master/public",target:"_blank",rel:"noopener noreferrer"}},[e._v("v9-Lambda public-testnet"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"current-runtime-cosmoshub-4-pre-v9-lambda-upgrade-is-running-gaia-v8-0-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#current-runtime-cosmoshub-4-pre-v9-lambda-upgrade-is-running-gaia-v8-0-1"}},[e._v("#")]),e._v(" Current runtime, cosmoshub-4 (pre-v9-Lambda upgrade) is running Gaia v8.0.1")]),e._v(" "),t("p",[e._v("The Cosmos Hub mainnet network, "),t("code",[e._v("cosmoshub-4")]),e._v(", is currently running "),t("a",{attrs:{href:"https://github.com/cosmos/gaia/releases/v8.0.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gaia v8.0.1"),t("OutboundLink")],1),e._v(". We anticipate that operators who are running on v8.0.1, will be able to upgrade successfully. Validators are expected to ensure that their systems are up to date and capable of performing the upgrade. This includes running the correct binary, or if building from source, building with go "),t("code",[e._v("1.18")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"target-runtime-cosmoshub-4-post-v9-lambda-upgrade-will-run-gaia-v9-0-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#target-runtime-cosmoshub-4-post-v9-lambda-upgrade-will-run-gaia-v9-0-0"}},[e._v("#")]),e._v(" Target runtime, cosmoshub-4 (post-v9-Lambda upgrade) will run Gaia v9.0.0")]),e._v(" "),t("p",[e._v("The Cosmos Hub mainnet network, "),t("code",[e._v("cosmoshub-4")]),e._v(", will run "),t("a",{attrs:{href:"https://github.com/cosmos/gaia/releases/tag/v9.0.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gaia v9.0.0"),t("OutboundLink")],1),e._v(". Operators "),t("em",[e._v("MUST")]),e._v(" use this version post-upgrade to remain connected to the network.")]),e._v(" "),t("h2",{attrs:{id:"v9-lambda-upgrade-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v9-lambda-upgrade-steps"}},[e._v("#")]),e._v(" v9-Lambda upgrade steps")]),e._v(" "),t("p",[e._v("There are 2 major ways to upgrade a node:")]),e._v(" "),t("ul",[t("li",[e._v("Manual upgrade")]),e._v(" "),t("li",[e._v("Upgrade using "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/cosmovisor",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmovisor"),t("OutboundLink")],1),e._v(" "),t("ul",[t("li",[e._v("Either by manually preparing the new binary")]),e._v(" "),t("li",[e._v("Or by using the auto-download functionality (this is not yet recommended)")])])])]),e._v(" "),t("p",[e._v("If you prefer to use Cosmovisor to upgrade, some preparation work is needed before upgrade.")]),e._v(" "),t("h3",{attrs:{id:"method-i-manual-upgrade"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#method-i-manual-upgrade"}},[e._v("#")]),e._v(" Method I: Manual Upgrade")]),e._v(" "),t("p",[e._v("Make sure Gaia v9.0.0 is installed by either downloading a "),t("a",{attrs:{href:"https://github.com/cosmos/gaia/releases/tag/v9.0.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("compatable binary"),t("OutboundLink")],1),e._v(", or building from source. Building from source requires go 1.18.")]),e._v(" "),t("p",[e._v("Run Gaia v8.0.1 till upgrade height, the node will panic:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"RVJSIFVQR1JBREUgJnF1b3Q7djktTGFtYmRhJnF1b3Q7IE5FRURFRCBhdCBoZWlnaHQ6IDE0NDcwNTAxOiB1cGdyYWRlIHRvIHY5LUxhbWJkYSBhbmQgYXBwbHlpbmcgdXBncmFkZSAmcXVvdDt2OS1MYW1iZGEmcXVvdDsgYXQgaGVpZ2h0OjE0NDcwNTAxCg=="}}),e._v(" "),t("p",[e._v("Stop the node, and switch the binary to Gaia v9.0.0 and re-start by "),t("code",[e._v("gaiad start")]),e._v(".")]),e._v(" "),t("p",[e._v("It may take several minutes to a few hours until validators with a total sum voting power > 2/3 to complete their node upgrades. After that, the chain can continue to produce blocks.")]),e._v(" "),t("h3",{attrs:{id:"method-ii-upgrade-using-cosmovisor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#method-ii-upgrade-using-cosmovisor"}},[e._v("#")]),e._v(" Method II: Upgrade using Cosmovisor")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",[t("span",{staticStyle:{color:"red"}},[t("strong",[e._v("Please Read Before Proceeding")])]),t("br"),e._v("\nUsing Cosmovisor 1.2.0 and higher requires a lowercase naming convention for upgrade version directory. For Cosmovisor 1.1.0 and earlier, the upgrade version is not lowercased.")])]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("For Example:")]),e._v(" "),t("br"),e._v(" "),t("strong",[e._v("Cosmovisor =< "),t("code",[e._v("1.1.0")]),e._v(": "),t("code",[e._v("/upgrades/v9-Lambda/bin/gaiad")])]),t("br"),e._v(" "),t("strong",[e._v("Cosmovisor >= "),t("code",[e._v("1.2.0")]),e._v(": "),t("code",[e._v("/upgrades/v9-lambda/bin/gaiad")])]),t("br")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Cosmovisor Version")]),e._v(" "),t("th",[e._v("Binary Name in Path")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("1.3")]),e._v(" "),t("td",[e._v("v9-lambda")])]),e._v(" "),t("tr",[t("td",[e._v("1.2")]),e._v(" "),t("td",[e._v("v9-lambda")])]),e._v(" "),t("tr",[t("td",[e._v("1.1")]),e._v(" "),t("td",[e._v("v9-Lambda")])]),e._v(" "),t("tr",[t("td",[e._v("1.0")]),e._v(" "),t("td",[e._v("v9-Lambda")])])])]),e._v(" "),t("h3",{attrs:{id:"manually-preparing-the-gaia-v9-0-0-binary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manually-preparing-the-gaia-v9-0-0-binary"}},[e._v("#")]),e._v(" "),t("em",[e._v("Manually preparing the Gaia v9.0.0 binary")])]),e._v(" "),t("h5",{attrs:{id:"preparation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[e._v("#")]),e._v(" Preparation")]),e._v(" "),t("p",[e._v("Install the latest version of Cosmovisor ("),t("code",[e._v("1.3.0")]),e._v("):")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Z28gaW5zdGFsbCBnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2Nvc21vdmlzb3IvY21kL2Nvc21vdmlzb3JAbGF0ZXN0Cg=="}}),e._v(" "),t("p",[t("strong",[e._v("Verify Cosmovisor Version")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Y29zbW92aXNvciB2ZXJzaW9uCmNvc21vdmlzb3IgdmVyc2lvbjogdjEuMy4wCg=="}}),e._v(" "),t("p",[e._v("Create a cosmovisor folder:")]),e._v(" "),t("p",[e._v("create a Cosmovisor folder inside "),t("code",[e._v("$GAIA_HOME")]),e._v(" and move Gaia v8.0.1 into "),t("code",[e._v("$GAIA_HOME/cosmovisor/genesis/bin")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"bWtkaXIgLXAgJEdBSUFfSE9NRS9jb3Ntb3Zpc29yL2dlbmVzaXMvYmluCmNwICQod2hpY2ggZ2FpYWQpICRHQUlBX0hPTUUvY29zbW92aXNvci9nZW5lc2lzL2Jpbgo="}}),e._v(" "),t("p",[e._v("build Gaia v9.0.0, and move gaiad v9.0.0 to "),t("code",[e._v("$GAIA_HOME/cosmovisor/upgrades/v9-lambda/bin")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"bWtkaXIgLXAgICRHQUlBX0hPTUUvY29zbW92aXNvci91cGdyYWRlcy92OS1sYW1iZGEvYmluCmNwICQod2hpY2ggZ2FpYWQpICRHQUlBX0hPTUUvY29zbW92aXNvci91cGdyYWRlcy92OS1sYW1iZGEvYmluCg=="}}),e._v(" "),t("p",[e._v("Then you should get the following structure:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"LgrilJzilIDilIAgY3VycmVudCAtJmd0OyBnZW5lc2lzIG9yIHVwZ3JhZGVzLyZsdDtuYW1lJmd0OwrilJzilIDilIAgZ2VuZXNpcwrilIIgICDilJTilIDilIAgYmluCuKUgiAgICAgICDilJTilIDilIAgZ2FpYWQgICN2OC4wLjEK4pSU4pSA4pSAIHVwZ3JhZGVzCiAgICDilJTilIDilIAgdjktbGFtYmRhCiAgICAgICAg4pSU4pSA4pSAIGJpbgogICAgICAgICAgICDilJTilIDilIAgZ2FpYWQgICN2OS4wLjAK"}}),e._v(" "),t("p",[e._v("Export the environmental variables:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"ZXhwb3J0IERBRU1PTl9OQU1FPWdhaWFkCiMgcGxlYXNlIGNoYW5nZSB0byB5b3VyIG93biBnYWlhIGhvbWUgZGlyCiMgcGxlYXNlIG5vdGUgYERBRU1PTl9IT01FYCBoYXMgdG8gYmUgYWJzb2x1dGUgcGF0aApleHBvcnQgREFFTU9OX0hPTUU9JEdBSUFfSE9NRQpleHBvcnQgREFFTU9OX1JFU1RBUlRfQUZURVJfVVBHUkFERT10cnVlCg=="}}),e._v(" "),t("p",[e._v("Start the node:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Y29zbW92aXNvciBydW4gIHN0YXJ0IC0teC1jcmlzaXMtc2tpcC1hc3NlcnQtaW52YXJpYW50cyAtLWhvbWUgJERBRU1PTl9IT01FCg=="}}),e._v(" "),t("p",[e._v("Skipping the invariant checks is strongly encouraged since it decreases the upgrade time significantly and since there are some other improvements coming to the crisis module in the next release of the Cosmos SDK.")]),e._v(" "),t("h4",{attrs:{id:"expected-upgrade-result"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expected-upgrade-result"}},[e._v("#")]),e._v(" Expected upgrade result")]),e._v(" "),t("p",[e._v("When the upgrade block height is reached, Gaia will panic and stop:")]),e._v(" "),t("p",[e._v("This may take 7 minutes to a few hours.\nAfter upgrade, the chain will continue to produce blocks when validators with a total sum voting power > 2/3 complete their node upgrades.")]),e._v(" "),t("h3",{attrs:{id:"auto-downloading-the-gaia-v9-0-0-binary-not-recommended"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#auto-downloading-the-gaia-v9-0-0-binary-not-recommended"}},[e._v("#")]),e._v(" "),t("em",[e._v("Auto-Downloading the Gaia v9.0.0 binary (not recommended!)")])]),e._v(" "),t("h4",{attrs:{id:"preparation-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparation-2"}},[e._v("#")]),e._v(" Preparation")]),e._v(" "),t("p",[e._v("Install the latest version of Cosmovisor ("),t("code",[e._v("1.3.0")]),e._v("):")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Z28gaW5zdGFsbCBnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2Nvc21vdmlzb3IvY21kL2Nvc21vdmlzb3JAbGF0ZXN0Cg=="}}),e._v(" "),t("p",[e._v("Create a cosmovisor folder:")]),e._v(" "),t("p",[e._v("create a cosmovisor folder inside gaia home and move gaiad v8.0.1 into "),t("code",[e._v("$GAIA_HOME/cosmovisor/genesis/bin")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"bWtkaXIgLXAgJEdBSUFfSE9NRS9jb3Ntb3Zpc29yL2dlbmVzaXMvYmluCmNwICQod2hpY2ggZ2FpYWQpICRHQUlBX0hPTUUvY29zbW92aXNvci9nZW5lc2lzL2Jpbgo="}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"LgrilJzilIDilIAgY3VycmVudCAtJmd0OyBnZW5lc2lzIG9yIHVwZ3JhZGVzLyZsdDtuYW1lJmd0OwrilJTilIDilIAgZ2VuZXNpcwogICAgIOKUlOKUgOKUgCBiaW4KICAgICAgICDilJTilIDilIAgZ2FpYWQgICN2OC4wLjEK"}}),e._v(" "),t("p",[e._v("Export the environmental variables:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"ZXhwb3J0IERBRU1PTl9OQU1FPWdhaWFkCiMgcGxlYXNlIGNoYW5nZSB0byB5b3VyIG93biBnYWlhIGhvbWUgZGlyCmV4cG9ydCBEQUVNT05fSE9NRT0kR0FJQV9IT01FCmV4cG9ydCBEQUVNT05fUkVTVEFSVF9BRlRFUl9VUEdSQURFPXRydWUKZXhwb3J0IERBRU1PTl9BTExPV19ET1dOTE9BRF9CSU5BUklFUz10cnVlCg=="}}),e._v(" "),t("p",[e._v("Start the node:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Y29zbW92aXNvciBydW4gc3RhcnQgLS14LWNyaXNpcy1za2lwLWFzc2VydC1pbnZhcmlhbnRzIC0taG9tZSAkREFFTU9OX0hPTUUK"}}),e._v(" "),t("p",[e._v("Skipping the invariant checks can help decrease the upgrade time significantly.")]),e._v(" "),t("h4",{attrs:{id:"expected-result"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expected-result"}},[e._v("#")]),e._v(" Expected result")]),e._v(" "),t("p",[e._v("When the upgrade block height is reached, you can find the following information in the log:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"RVJSIFVQR1JBREUgJnF1b3Q7djktTGFtYmRhJnF1b3Q7IE5FRURFRCBhdCBoZWlnaHQ6IDE0NDcwNTAxOiB1cGdyYWRlIHRvIHY5LUxhbWJkYSBhbmQgYXBwbHlpbmcgdXBncmFkZSAmcXVvdDt2OS1MYW1iZGEmcXVvdDsgYXQgaGVpZ2h0OjE0NDcwNTAxCg=="}}),e._v(" "),t("p",[e._v("Then the Cosmovisor will create "),t("code",[e._v("$GAIA_HOME/cosmovisor/upgrades/v9-lambda/bin")]),e._v(" and download the Gaia v9.0.0 binary to this folder according to links in the "),t("code",[e._v("--info")]),e._v(" field of the upgrade proposal 97.\nThis may take 7 minutes to a few hours, afterwards, the chain will continue to produce blocks once validators with a total sum voting power > 2/3 complete their nodes upgrades.")]),e._v(" "),t("p",[t("em",[e._v("Please Note:")])]),e._v(" "),t("ul",[t("li",[e._v("In general, auto-download comes with the risk that the verification of correct download is done automatically. If users want to have the highest guarantee users should confirm the check-sum manually. We hope more node operators will use the auto-download for this release but please be aware this is a risk and users should take at your own discretion.")]),e._v(" "),t("li",[e._v("Users should use run node on v8.0.1 if they use the cosmovisor v1.3.0 with auto-download enabled for upgrade process.")])]),e._v(" "),t("h2",{attrs:{id:"upgrade-duration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-duration"}},[e._v("#")]),e._v(" Upgrade duration")]),e._v(" "),t("p",[e._v("The upgrade may take a few minutes to several hours to complete because cosmoshub-4 participants operate globally with differing operating hours and it may take some time for operators to upgrade their binaries and connect to the network.")]),e._v(" "),t("h2",{attrs:{id:"rollback-plan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rollback-plan"}},[e._v("#")]),e._v(" Rollback plan")]),e._v(" "),t("p",[e._v("During the network upgrade, core Cosmos teams will be keeping an ever vigilant eye and communicating with operators on the status of their upgrades. During this time, the core teams will listen to operator needs to determine if the upgrade is experiencing unintended challenges. In the event of unexpected challenges, the core teams, after conferring with operators and attaining social consensus, may choose to declare that the upgrade will be skipped.")]),e._v(" "),t("p",[e._v("Steps to skip this upgrade proposal are simply to resume the cosmoshub-4 network with the (downgraded) v8.0.1 binary using the following command:")]),e._v(" "),t("blockquote",[t("p",[e._v("gaiad start --unsafe-skip-upgrade 14470501")])]),e._v(" "),t("p",[e._v("Note: There is no particular need to restore a state snapshot prior to the upgrade height, unless specifically directed by core Cosmos teams.")]),e._v(" "),t("p",[e._v("Important: A social consensus decision to skip the upgrade will be based solely on technical merits, thereby respecting and maintaining the decentralized governance process of the upgrade proposal's successful YES vote.")]),e._v(" "),t("h2",{attrs:{id:"communications"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#communications"}},[e._v("#")]),e._v(" Communications")]),e._v(" "),t("p",[e._v("Operators are encouraged to join the "),t("code",[e._v("#cosmos-hub-validators-verified")]),e._v(" channel of the Cosmos Hub Community Discord. This channel is the primary communication tool for operators to ask questions, report upgrade status, report technical issues, and to build social consensus should the need arise. This channel is restricted to known operators and requires verification beforehand. Requests to join the "),t("code",[e._v("#cosmos-hub-validators-verified")]),e._v(" channel can be sent to the "),t("code",[e._v("#general-support")]),e._v(" channel.")]),e._v(" "),t("h2",{attrs:{id:"risks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#risks"}},[e._v("#")]),e._v(" Risks")]),e._v(" "),t("p",[e._v("As a validator performing the upgrade procedure on your consensus nodes carries a heightened risk of double-signing and being slashed. The most important piece of this procedure is verifying your software version and genesis file hash before starting your validator and signing.")]),e._v(" "),t("p",[e._v("The riskiest thing a validator can do is discover that they made a mistake and repeat the upgrade procedure again during the network startup. If you discover a mistake in the process, the best thing to do is wait for the network to start before correcting it.")]),e._v(" "),t("h2",{attrs:{id:"reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/cosmos/mainnet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Join Cosmos Hub Mainnet"),t("OutboundLink")],1)])],1)}),[],!1,null,null,null);a.default=o.exports}}]);