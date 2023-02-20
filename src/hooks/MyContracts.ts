import { useContext } from 'react'

import { MyContractsContext } from '@/components/web3/MyContractsProvider'

export const useMyContracts = () => {
  const contracts = useContext(MyContractsContext)
  return contracts
}
