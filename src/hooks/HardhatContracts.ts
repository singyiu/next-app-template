import { useContext } from 'react'
import { useContractRead } from 'wagmi'

import { HardhatContractsContext } from '@/components/web3/HardhatContractsProvider'

export const useHardhatContracts = () => {
  return useContext(HardhatContractsContext)
}

export const useHardhatContractAbiOfName = (contractName: string) => {
  const contracts = useHardhatContracts()
  const contract = contracts[contractName as keyof typeof contracts] as any
  return contract?.abi
}

export const useHardhatContractInfoOfName = (contractName: string) => {
  const contracts = useHardhatContracts()
  const contract = contracts[contractName as keyof typeof contracts] as any
  return { address: contract?.address, abi: contract?.abi }
}

export const useHardhatContractRead = (contractName: string, config: any) => {
  const info = useHardhatContractInfoOfName(contractName)
  return useContractRead({ ...info, ...config })
}
