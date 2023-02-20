import _ from 'lodash'

import { useHardhatContracts } from '@/hooks/HardhatContracts'
import Title from '@/components/typography/Title'

export default function Debug() {
  const contracts = useHardhatContracts()
  return (
    <>
      <Title>Contract names: {_.join(_.keys(contracts), ',')}</Title>
    </>
  )
}
