import { useModal } from '@/context/Modal'
import ReactModal from 'react-modal'

export const ModalDonate = () => {
  const { open, onClose } = useModal()
  return (
    <ReactModal
      style={{ overlay: { zIndex: 50 } }}
      isOpen={open}
      onRequestClose={onClose}
    >
      opa
    </ReactModal>
  )
}
