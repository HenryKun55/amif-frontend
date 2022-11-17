import ReactModal from 'react-modal'

import { useModalSubscribe } from '@/context/Modal'

import * as S from './styles'

export const ModalSubscribe = () => {
  const { open, onClose } = useModalSubscribe()

  return (
    <ReactModal
      style={S.reactModalStyles}
      isOpen={open}
      onRequestClose={onClose}
    >
      opa
    </ReactModal>
  )
}
