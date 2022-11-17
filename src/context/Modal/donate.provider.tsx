import { ReactNode, useState } from 'react'

import { DonateContext } from '.'

type DonateProviderProps = {
  children: ReactNode
}

export function DonateProvider({ children }: DonateProviderProps) {
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
    <DonateContext.Provider value={value}>{children}</DonateContext.Provider>
  )
}
