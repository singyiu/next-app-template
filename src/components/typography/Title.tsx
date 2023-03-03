import { FC } from 'react'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  children?: React.ReactNode
}
export const Title: FC<Props> = (props) => {
  return (
    <h2 className={inter.className} {...props}>
      {props?.children}
    </h2>
  )
}

export default Title
