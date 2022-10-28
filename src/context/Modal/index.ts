/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext } from 'react'

type ModalContext = {
  open: boolean
  onOpen: () => void
  onClose: () => void
}

export const modalContextDefaultValues: ModalContext = {
  open: false,
  onOpen: () => {},
  onClose: () => {},
}

export const MainContext = createContext<ModalContext>(
  modalContextDefaultValues,
)

export function useModal() {
  return useContext(MainContext)
}
