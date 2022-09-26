import { config } from '@onflow/fcl';

config({
  "accessNode.api": process.env.NEXT_PUBLIC_ACCESS_NODE_URL, // Mainnet: "https://rest-mainnet.onflow.org"
  "discovery.wallet": process.env.NEXT_PUBLIC_DISCOVERY_WALLET, // Mainnet: "https://fcl-discovery.onflow.org/authn"
  "0xProfile": process.env.NEXT_PUBLIC_PROFILE // The account address where the Profile smart contract lives on Testnet
})
