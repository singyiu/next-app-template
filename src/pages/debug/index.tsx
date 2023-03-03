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
      <ContractReadAddress
        title="Beneficiary"
        contractName="NpNFT"
        contractReadConfig={{
          functionName: 'beneficiary',
        }}
      />
      <ContractReadStatistic
        title="Mint Fee"
        contractName="NpNFT"
        contractReadConfig={{
          functionName: 'mintFee',
          select: (data) => ethers.utils.formatUnits(data, 18),
        }}
        formatterEnabled={true}
      />
      <ContractReadStatistic
        title="nextTokenId"
        contractName="NpNFT"
        contractReadConfig={{
          functionName: 'nextTokenId',
          select: (data) => ethers.utils.formatUnits(data, 0),
        }}
        formatterEnabled={false}
      />
    </>
  )
}
