import { FC } from 'react'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  children?: React.ReactNode
}
export const Text: FC<Props> = (props) => {
  return (
    <p className={inter.className} {...props}>
      {props?.children}
    </p>
  )
}

export default Text
