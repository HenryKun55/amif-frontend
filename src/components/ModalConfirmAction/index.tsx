import { ReactNode } from 'react'
import ReactModal from 'react-modal'

import { Button } from '../Form/Button'
import * as S from './styles'

export type ModalConfirmActionProps = {
  title: ReactNode
  isOpen?: boolean
  onCancel?: () => void
  onConfirm?: () => void
}

export const ModalConfirmAction = ({
  title,
  isOpen = false,
  onCancel,
  onConfirm,
}: ModalConfirmActionProps) => {
  return (
    <S.Container>
      <ReactModal
        style={S.reactModalStyles}
        isOpen={isOpen}
        onRequestClose={onCancel}
        appElement={document.getElementById('root') as HTMLElement}
      >
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Actions>
            <Button variant="outlined" size="sm" onClick={onCancel}>
              Cancelar
            </Button>
            <Button size="sm" onClick={onConfirm}>
              Confirmar
            </Button>
          </S.Actions>
        </S.Content>
      </ReactModal>
    </S.Container>
  )
}
