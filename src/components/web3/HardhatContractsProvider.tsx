import { FC, createContext, useState, useEffect } from 'react'
import { useNetwork } from 'wagmi'

import { getContractsOfChainId } from '@/contracts/hardhatMetadata'

export const HardhatContractsContext = createContext({})

type Props = {
  children?: React.ReactNode
}
const HardhatContractsProvider: FC<Props> = ({ children }) => {
  const { chain } = useNetwork()
  const [contracts, setContracts] = useState(getContractsOfChainId(chain?.id))

  useEffect(() => {
    const contracts_ = getContractsOfChainId(chain?.id)
    setContracts(contracts_)
  }, [chain])

  return (
    <HardhatContractsContext.Provider value={contracts}>
      {children}
    </HardhatContractsContext.Provider>
  )
}

export default HardhatContractsProvider
