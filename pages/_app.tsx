import '../styles/globals.css'
import type { AppProps } from 'next/app'

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { DivergentAVClientProvider, getDivergentAVClient } from "@huddle01/divergent-av";


const { chains, provider } = configureChains(
  [chain.mainnet, chain.goerli, chain.polygon, chain.optimism, chain.arbitrum, chain.hardhat],
  [
    // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider
})

const divergentAVClient = getDivergentAVClient("https://dg-devnet.huddle01.com");


export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider theme={darkTheme()} chains={chains}>
      <DivergentAVClientProvider value={divergentAVClient}>
          <Component {...pageProps} />
          </DivergentAVClientProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
