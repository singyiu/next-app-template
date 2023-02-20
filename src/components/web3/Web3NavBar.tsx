import { FC } from 'react'
import { Space, Button, Typography } from 'antd'
const { Title } = Typography
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useRouter } from 'next/router'

const Web3NavBar: FC = (props) => {
  return (
    <>
      <Space wrap>
        <Button type="text">NavBarButton</Button>
      </Space>
      <Space style={{ float: 'right', textAlign: 'right', padding: '8x' }}>
        <ConnectButton />
      </Space>
    </>
  )
}

export default Web3NavBar
