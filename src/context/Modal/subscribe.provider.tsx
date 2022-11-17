import { ReactNode, useState } from 'react'

import { SubscribeContext } from '.'

type SubscribeProviderProps = {
  children: ReactNode
}

export function SubscribeProvider({ children }: SubscribeProviderProps) {
  const [open, setOpen] = useState(false)

  const onOpen = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const value = {
    open,
    onOpen,
    onClose,
  }

  return (
    <SubscribeContext.Provider value={value}>
      {children}
    </SubscribeContext.Provider>
  )
}
