import { FC, createContext, useState, useEffect } from 'react'
import { useNetwork } from 'wagmi'

import { getContractsOfChain } from '@/contracts/hardhatMetadata'

export const MyContractsContext = createContext({})

type Props = {
  children?: React.ReactNode
}
const MyContractsProvider: FC<Props> = ({ children }) => {
  const { chain } = useNetwork()
  const [contracts, setContracts] = useState(getContractsOfChain(chain))

  useEffect(() => {
    const contracts_ = getContractsOfChain(chain?.id)
    setContracts(contracts_)
  }, [chain])

  return (
    <MyContractsContext.Provider value={contracts}>
      {children}
    </MyContractsContext.Provider>
  )
}

export default MyContractsProvider
