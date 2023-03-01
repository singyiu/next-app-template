import _ from 'lodash'
import { ethers } from 'ethers'

import { useHardhatContracts } from '@/hooks/HardhatContracts'
import { Title } from '@/components/typography/Title'
import { ContractReadStatistic } from '@/components/web3/ContractReadStatistic'
import { ContractReadAddress } from '@/components/web3/ContractReadAddress'

export default function Debug() {
  const contracts = useHardhatContracts()
  return (
    <>
      <Title>Contract names: {_.join(_.keys(contracts), ',')}</Title>
      <ContractReadStatistic
        title="beneficiary"
        contractName="NpNFT"
        contractReadConfig={{
          functionName: 'beneficiary',
          //select: (data) => ethers.utils.getAddress(data),
        }}
        formatterEnabled={false}
      />
      <ContractReadAddress
        title="beneficiary"
        contractName="NpNFT"
        contractReadConfig={{
          functionName: 'beneficiary',
        }}
      />
    </>
  )
}
