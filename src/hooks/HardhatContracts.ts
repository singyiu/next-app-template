import { useContext } from 'react'

import { HardhatContractsContext } from '@/components/web3/HardhatContractsProvider'

export const useHardhatContracts = () => {
  const contracts = useContext(HardhatContractsContext)
  return contracts
}
