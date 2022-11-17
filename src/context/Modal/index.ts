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

const makeContext = createContext<ModalContext>(modalContextDefaultValues)

export const DonateContext = makeContext

export const SubscribeContext = makeContext

export function useModalDonate() {
  return useContext(DonateContext)
}

export function useModalSubscribe() {
  return useContext(SubscribeContext)
}
