import { FC } from 'react'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  children?: React.ReactNode
}
export const Text: FC<Props> = ({ children }) => {
  return <p className={inter.className}>{children}</p>
}

export default Text
