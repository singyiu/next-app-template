import { FC } from 'react'
import { Space, Button, Typography } from 'antd'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useRouter } from 'next/router'

import { Title } from '@/components/typography/Title'

const Web3NavBar: FC = (props) => {
  return (
    <>
      <Space wrap>
        <Button type="text">
          <Title>NavBarButton</Title>
        </Button>
        <Button type="text">
          <Title style={{ fontSize: 16 }}>NavBarButton</Title>
        </Button>
      </Space>
      <Space style={{ float: 'right', textAlign: 'right', padding: 8 }}>
        <ConnectButton />
      </Space>
    </>
  )
}

export default Web3NavBar
