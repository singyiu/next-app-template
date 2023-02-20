import _ from 'lodash'

import { useMyContracts } from '@/hooks/MyContracts'
import Title from '@/components/typography/Title'

export default function Debug() {
  const contracts = useMyContracts()
  return (
    <>
      <Title>Contract names: {_.join(_.keys(contracts), ',')}</Title>
    </>
  )
}
