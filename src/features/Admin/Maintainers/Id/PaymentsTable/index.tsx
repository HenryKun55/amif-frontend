import { Fragment, useState } from 'react'
import { MdOutlineAdd } from 'react-icons/md'

import { CreatePaymentModal } from '../CreatePaymentModal'
import * as S from './styles'

export type PaymentsTableProps = {
  maintainerId: string
}

export const PaymentsTable = ({ maintainerId }: PaymentsTableProps) => {
  const [isCreatePaymentModalOpen, setIsCreatePaymentModalOpen] = useState(true)

  return (
    <Fragment>
      <hr />
      <S.PaymentsTitleContainer>
        <S.PaymentsTitle>Pagamentos</S.PaymentsTitle>
        <S.AddPaymentButton
          size="sm"
          variant="outlined"
          onClick={() => setIsCreatePaymentModalOpen(true)}
        >
          <MdOutlineAdd size={20} /> Novo pagamento
        </S.AddPaymentButton>
      </S.PaymentsTitleContainer>
      <CreatePaymentModal
        maintainerId={maintainerId}
        isOpen={isCreatePaymentModalOpen}
        onClose={() => setIsCreatePaymentModalOpen(false)}
      />
    </Fragment>
  )
}
