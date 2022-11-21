import { useMemo } from 'react'
import ReactModal from 'react-modal'

import { useModal } from '@/context/Modal'

import * as S from './styles'

export const ModalSubscribe = () => {
  const { open, onClose } = useModal()

  const type = useMemo(() => 'subscribe', [])

  return (
    <ReactModal
      style={S.reactModalStyles}
      isOpen={open(type)}
      onRequestClose={() => onClose(type)}
    >
      opa
    </ReactModal>
  )
}
