import { FC } from 'react'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  children?: React.ReactNode
}
const Text: FC<Props> = ({ children }) => {
  return <h2 className={inter.className}>{children}</h2>
}

export default Text
