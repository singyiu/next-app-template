import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import 'antd/dist/antd.css'
import '@/styles/index.css'
import { Layout } from 'antd'

import NavBar from '@/components/NavBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Layout.Header>
        <NavBar />
      </Layout.Header>
      <Layout.Content>
        <Component {...pageProps} />
      </Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  )
}
