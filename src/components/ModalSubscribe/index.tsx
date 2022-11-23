import ReactModal from 'react-modal'

import { useModal } from '@/context/Modal'
import { SubscribeToEventForm } from '@/features/Events/SubscribeToEvent/Form'

import * as S from './styles'

export const ModalSubscribe = () => {
  const { open, onClose } = useModal()

  const type = 'subscribe'

  return (
    <ReactModal
      style={S.reactModalStyles}
      isOpen={open(type)}
      onRequestClose={() => onClose(type)}
    >
      <SubscribeToEventForm />
    </ReactModal>
  )
}
