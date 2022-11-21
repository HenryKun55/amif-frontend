import { ReactNode, useState } from 'react'

import { Context, ModalOpenProps } from '.'

type ModalProviderProps = {
  children: ReactNode
}

const defaultOpenValues: ModalOpenProps[] = [
  {
    type: 'donate',
  },
  {
    type: 'subscribe',
  },
]

export function ModalProvider({ children }: ModalProviderProps) {
  const [open, setOpen] = useState<ModalOpenProps[]>(defaultOpenValues)

  const handleMode = (type: string, mode: boolean) => {
    setOpen(options =>
      options.map(option => {
        if (option.type === type)
          return {
            type,
            open: mode,
          }
        return option
      }),
    )
  }

  const onOpen = (type: string) => {
    handleMode(type, true)
  }

  const onClose = (type: string) => {
    handleMode(type, false)
  }

  const value = {
    open: (type: string) => !!open?.find(o => o.open && o.type === type),
    onOpen,
    onClose,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}
