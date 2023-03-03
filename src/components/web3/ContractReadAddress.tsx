import React, { FC } from 'react'
import { Col, Row, Card, Space } from 'antd'

import { useHardhatContractRead } from '@/hooks/HardhatContracts'
import { Address } from '@/components/web3/Address'
import { Text } from '@/components/typography/Text'

type Props = {
  title: string
  contractName: string
  contractReadConfig: any
}
export const ContractReadAddress: FC<Props> = ({
  title,
  contractName,
  contractReadConfig,
}) => {
  const dataObj = useHardhatContractRead(contractName, contractReadConfig)

  return (
    <Row gutter={16}>
      <Col span={24}>
        <Card style={{ margin: 16 }}>
          <Space.Compact direction="vertical">
            <Text style={{ color: '#a9a9a9' }}>{title}</Text>
            <Address value={dataObj?.data || ''} />
          </Space.Compact>
        </Card>
      </Col>
    </Row>
  )
}

export default ContractReadAddress
