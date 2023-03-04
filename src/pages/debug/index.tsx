import { useState, useEffect } from 'react'
import _ from 'lodash'
import { ethers } from 'ethers'

import { useHardhatContracts } from '@/hooks/HardhatContracts'
import { Title } from '@/components/typography/Title'
import { ContractReadStatistic } from '@/components/web3/ContractReadStatistic'
import { ContractReadAddress } from '@/components/web3/ContractReadAddress'

export default function Debug() {
  const contracts = useHardhatContracts()
  const [contractNames, setContractNames] = useState<string>('')

  useEffect(() => {
    setContractNames(_.join(_.keys(contracts), ','))
  }, [contracts])

  return (
    <>
      <Title>Contract names: {contractNames}</Title>
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
      />
      <ContractReadStatistic
        title="nextTokenId"
        contractName="NpNFT"
        contractReadConfig={{
          functionName: 'nextTokenId',
          select: (data) => ethers.utils.formatUnits(data, 0),
        }}
      />
    </>
  )
}
