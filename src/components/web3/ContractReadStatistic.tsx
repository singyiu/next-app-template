import React, { FC, useState, useEffect } from 'react'
import { Col, Row, Statistic, Card } from 'antd'
import CountUp from 'react-countup'

import { useHardhatContractRead } from '@/hooks/HardhatContracts'

const countUpFormatter = (value: any) => (
  <CountUp end={value} separator="," decimals={4} />
)

type Props = {
  title: string
  contractName: string
  contractReadConfig: any
  formatter?: (value: any) => any
}
export const ContractReadStatistic: FC<Props> = ({
  title,
  contractName,
  contractReadConfig,
  formatter = countUpFormatter,
}) => {
  const dataObj = useHardhatContractRead(contractName, contractReadConfig)

  return (
    <Row gutter={16}>
      <Col span={24}>
        <Card style={{ margin: 16 }}>
          <Statistic
            title={title}
            value={dataObj?.data || 0}
            formatter={formatter}
          />
        </Card>
      </Col>
    </Row>
  )
}

export default ContractReadStatistic
