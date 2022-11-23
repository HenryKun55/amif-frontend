import ReactModal from 'react-modal'
import { useSelector } from 'react-redux'

import { SubscribeToEventForm } from '@/features/Events/SubscribeToEvent/Form'
import { useAppDispatch } from '@/store'
import { selectEventSubscribeModal } from '@/store/event/selector'
import { closeSubscribeEventModal } from '@/store/event/slice'

import * as S from './styles'

export const ModalSubscribeToEvent = () => {
  const dispatch = useAppDispatch()
  const { isOpen } = useSelector(selectEventSubscribeModal)

  return (
    <ReactModal
      style={S.reactModalStyles}
      isOpen={isOpen}
      onRequestClose={() => dispatch(closeSubscribeEventModal())}
    >
      <SubscribeToEventForm />
    </ReactModal>
  )
}
