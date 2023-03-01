import React, { FC } from 'react'
import { Col, Row, Card } from 'antd'

import { useHardhatContractRead } from '@/hooks/HardhatContracts'
import { Address } from '@/components/web3/Address'

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
        <Card style={{ marginTop: 16 }}>
          <Address value={dataObj?.data || ''} />
        </Card>
      </Col>
    </Row>
  )
}

export default ContractReadAddress
