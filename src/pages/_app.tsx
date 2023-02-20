import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import 'antd/dist/antd.css'
import '@/styles/index.css'
import { Layout } from 'antd'

import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { mainnet, goerli, foundry } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

//import NavBar from '@/components/NavBar'
import Web3NavBar from '@/components/web3/Web3NavBar'

const { chains, provider } = configureChains(
  [foundry, mainnet, goerli],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY || '' }),
    publicProvider(),
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'next-app',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Layout>
          <Layout.Header>
            <Web3NavBar />
          </Layout.Header>
          <Layout.Content>
            <Component {...pageProps} />
          </Layout.Content>
          <Layout.Footer></Layout.Footer>
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
