import { ReactNode } from 'react'

import { DonateProvider } from '@/context/Modal/donate.provider'

import { SubscribeProvider } from './subscribe.provider'

type ModalProviderProps = {
  children: ReactNode
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  return (
    <SubscribeProvider>
      <DonateProvider>{children}</DonateProvider>
    </SubscribeProvider>
  )
}
