import HardhatContracts from './hardhat_contracts'

export const getContractsOfChain = (chainId) => {
  return chainId ? HardhatContracts?.[chainId]?.[0]?.contracts : {}
}
