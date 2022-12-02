import format from 'date-fns/format'
import { Fragment, useCallback, useMemo, useState } from 'react'
import { MdDelete, MdOutlineAdd } from 'react-icons/md'
import { Column } from 'react-table'
import { toast } from 'react-toastify'

import { useDeleteMaintainerPaymentMutation } from '@/api/maintainers'
import { Maintainer, Payment } from '@/api/models'
import { ModalConfirmAction } from '@/components/ModalConfirmAction'
import { Table } from '@/components/Table'
import { TableMenu } from '@/components/Table/Menu'
import { maskCurrency } from '@/utils/mask'

import { CreatePaymentModal } from '../CreatePaymentModal'
import * as S from './styles'

export type PaymentsTableProps = {
  maintainer: Maintainer
}

export const PaymentsTable = ({ maintainer }: PaymentsTableProps) => {
  const [confirmDeletePayment, setConfirmDeletePayment] = useState<{
    id?: string
    isOpen: boolean
  }>({ isOpen: false })
  const [isCreatePaymentModalOpen, setIsCreatePaymentModalOpen] =
    useState(false)
  const [deletePayment, { isLoading: isDeleting }] =
    useDeleteMaintainerPaymentMutation()

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
        {
          id: 'actions',
          Header: 'Ações',
          maxWidth: '8ch',
          accessor: (payment: Payment) => (
            <TableMenu
              disabled={isDeleting}
              actions={[
                {
                  title: 'Deletar',
                  icon: <MdDelete size={20} color="red" />,
                  onClick: () =>
                    setConfirmDeletePayment({
                      isOpen: true,
                      id: payment.id,
                    }),
                },
              ]}
            />
          ),
        },
      ] as unknown as Column<Payment>[],
    [isDeleting],
  )

  const handleDeletePayment = useCallback(() => {
    const id = confirmDeletePayment.id
    if (id) {
      deletePayment({ maintainerId: maintainer.id, paymentId: id })
        .unwrap()
        .then(() => toast.success('Pagamento deletado.'))
    }
    setConfirmDeletePayment({ isOpen: false })
  }, [maintainer, confirmDeletePayment])

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
      <ModalConfirmAction
        title="Tem certeza que deseja deletar esse pagamento permanentemente?"
        isOpen={confirmDeletePayment.isOpen}
        onCancel={() => setConfirmDeletePayment({ isOpen: false })}
        onConfirm={handleDeletePayment}
      />
    </Fragment>
  )
}
