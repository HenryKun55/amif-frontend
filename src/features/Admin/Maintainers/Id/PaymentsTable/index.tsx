import format from 'date-fns/format'
import { Fragment, useMemo, useState } from 'react'
import { MdOutlineAdd } from 'react-icons/md'
import { Column } from 'react-table'

import { Maintainer, Payment } from '@/api/models'
import { Table } from '@/components/Table'
import { maskCurrency } from '@/utils/mask'

import { CreatePaymentModal } from '../CreatePaymentModal'
import * as S from './styles'

export type PaymentsTableProps = {
  maintainer: Maintainer
}

export const PaymentsTable = ({ maintainer }: PaymentsTableProps) => {
  const [isCreatePaymentModalOpen, setIsCreatePaymentModalOpen] =
    useState(false)

  const columns = useMemo(
    () =>
      [
        {
          id: 'amount',
          Header: 'Valor',
          accessor: (payment: Payment) => maskCurrency(payment.amount),
        },
        {
          id: 'paymentDate',
          Header: 'Data do pagamento',
          accessor: (payment: Payment) => {
            try {
              const [date] = payment.paymentDate.split('T')
              return format(new Date(`${date}`), 'dd/MM/yyyy')
            } catch (error) {
              return 'Sem data'
            }
          },
        },
        {
          id: 'createdAt',
          Header: 'Data de criação',
          accessor: (payment: Payment) => {
            if (!payment.createdAt) return 'Sem data'
            try {
              const [date] = payment.createdAt.split('T')
              return format(new Date(`${date}`), 'dd/MM/yyyy')
            } catch (error) {
              return 'Sem data'
            }
          },
        },
      ] as unknown as Column<Payment>[],
    [],
  )
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
      <S.TableWrapper>
        <Table<Payment>
          data={maintainer.payments}
          columns={columns}
          pageSize={maintainer.payments.length}
          totalPages={1}
          totalCount={1}
          emptyMessage="Nenhum pagamento foi criado ainda."
          onFetchData={() => {
            /** do nothing */
          }}
        />
      </S.TableWrapper>
      <CreatePaymentModal
        maintainerId={maintainer.id}
        isOpen={isCreatePaymentModalOpen}
        onClose={() => setIsCreatePaymentModalOpen(false)}
      />
    </Fragment>
  )
}
