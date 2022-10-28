import { useModal } from '@/context/Modal'
import ReactModal from 'react-modal'

export const ModalDonate = () => {
  const { open, onClose } = useModal()
  return (
    <ReactModal isOpen={open} onRequestClose={onClose}>
      opa
    </ReactModal>
  )
}
