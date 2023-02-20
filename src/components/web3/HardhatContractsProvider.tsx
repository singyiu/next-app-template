import { FC, createContext, useState, useEffect } from 'react'
import { useNetwork } from 'wagmi'

import { getContractsOfChain } from '@/contracts/hardhatMetadata'

export const HardhatContractsContext = createContext({})

type Props = {
  children?: React.ReactNode
}
const HardhatContractsProvider: FC<Props> = ({ children }) => {
  const { chain } = useNetwork()
  const [contracts, setContracts] = useState(getContractsOfChain(chain))

  useEffect(() => {
    const contracts_ = getContractsOfChain(chain?.id)
    setContracts(contracts_)
  }, [chain])

  return (
    <HardhatContractsContext.Provider value={contracts}>
      {children}
    </HardhatContractsContext.Provider>
  )
}

export default HardhatContractsProvider
