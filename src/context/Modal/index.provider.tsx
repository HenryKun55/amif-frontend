import { ReactNode, useState } from 'react'

import { MainContext } from '.'

type ModalProviderProps = {
  children: ReactNode
}

export function ModalProvider({ children }: ModalProviderProps) {
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

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>
}
