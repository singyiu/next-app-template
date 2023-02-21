import HardhatContracts from './hardhat_contracts.json'

export const getContractsOfChainId = (chainId: any) => {
  return chainId
    ? HardhatContracts?.[chainId as keyof typeof HardhatContracts]?.[0]
        ?.contracts
    : {}
}
