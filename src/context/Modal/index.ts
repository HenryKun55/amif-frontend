/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext } from 'react'

export type ModalOpenProps = {
  type: string
  open?: boolean
}

type ModalContext = {
  open: (type: string) => boolean
  onOpen: (type: string) => void
  onClose: (type: string) => void
}

export const modalContextDefaultValues: ModalContext = {
  open: () => false,
  onOpen: () => {},
  onClose: () => {},
}

const makeContext = createContext<ModalContext>(modalContextDefaultValues)

export const Context = makeContext

export function useModal() {
  return useContext(makeContext)
}
