import { format } from 'date-fns'
import { useCallback, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaUserClock } from 'react-icons/fa'
import {
  MdCheckCircleOutline,
  MdDelete,
  MdOutlineCancel,
  MdOutlineRemoveRedEye,
  MdSearch,
} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Column } from 'react-table'
import { toast } from 'react-toastify'

import {
  useDeleteAssociateMutation,
  useListAssociatesQuery,
} from '@/api/associates'
import { AssociateSortBy } from '@/api/associates/types'
import { Associate } from '@/api/models'
import { Order } from '@/api/types'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ModalConfirmAction } from '@/components/ModalConfirmAction'
import { FetchDataProps, Table } from '@/components/Table'
import { TableMenu } from '@/components/Table/Menu'
import { useDebounce } from '@/hooks/useDebounce'
import { AdminRoutes } from '@/routes/admin-routes'
import { maskPhone } from '@/utils/mask'

import * as S from './styles'

export const AdminAssociates = () => {
  const navigate = useNavigate()
  const [page, setPage] = useState(1)
  const [sortBy, setSortBy] = useState<keyof AssociateSortBy | undefined>(
    'createdAt',
  )
  const [orderBy, setOrderBy] = useState<Order>('desc')
  const [confirmDeleteAssociate, setConfirmDeleteAssociate] = useState<{
    id?: string
    isOpen: boolean
  }>({ isOpen: false })

  const { register, watch } = useForm()
  const searchDebounced = useDebounce(watch('search'), 300)

  const { data, isLoading } = useListAssociatesQuery({
    page,
    orderBy,
    sortBy,
    name: searchDebounced,
  })

  const [deleteAssociate, { isLoading: isDeleting }] =
    useDeleteAssociateMutation()

  const StatusFind = (associate: Associate) => {
    switch (associate.status) {
      case 'pending':
        return (
          <S.Text color="orange">
            <FaUserClock size={20} /> Pendente
          </S.Text>
        )
      case 'approved':
        return (
          <S.Text color="green">
            <MdCheckCircleOutline size={20} /> Aprovado
          </S.Text>
        )
      case 'inactive':
        return (
          <S.Text color="red">
            <MdOutlineCancel size={20} /> Inativo
          </S.Text>
        )
    }
  }

  const columns = useMemo(
    () =>
      [
        {
          Header: 'Nome',
          accessor: 'name',
          defaultCanSort: true,
          responsive: true,
        },
        {
          Header: 'Telefone',
          accessor: (associate: Associate) => maskPhone(associate.phone),
          responsive: true,
        },
        {
          id: 'createdAt',
          Header: 'Data de Cadastro',
          maxWidth: '15ch',
          defaultCanSort: true,
          accessor: (associate: Associate) =>
            associate.createdAt
              ? format(new Date(associate.createdAt), 'dd/MM/yyyy')
              : '',
        },

        {
          id: 'status',
          Header: 'Status',
          defaultCanSort: true,
          accessor: (associate: Associate) => StatusFind(associate),
        },
        {
          Header: 'Usuário',
          accessor: 'user.username',
          responsive: true,
        },
        {
          id: 'actions',
          Header: 'Ações',
          maxWidth: '8ch',
          accessor: (associate: Associate) => (
            <TableMenu
              actions={[
                {
                  title: 'Ver',
                  icon: <MdOutlineRemoveRedEye size={20} />,
                  onClick: () =>
                    navigate(
                      AdminRoutes.Admin_Associados_Id.replace(
                        ':id',
                        associate.id,
                      ),
                    ),
                },
                {
                  title: 'Deletar',
                  icon: <MdDelete size={20} color="red" />,
                  onClick: () =>
                    setConfirmDeleteAssociate({
                      isOpen: true,
                      id: associate.id,
                    }),
                },
              ]}
            />
          ),
        },
      ] as unknown as Column<Associate>[],
    [],
  )

  const handleFetchData = useCallback((args: FetchDataProps<Associate>) => {
    setPage(args.pageIndex + 1)
    setOrderBy(args.orderBy || 'desc')
    setSortBy((args.sortBy || 'startDate') as keyof AssociateSortBy)
  }, [])

  const handleDeleteAssociate = useCallback(() => {
    const id = confirmDeleteAssociate.id
    if (id) {
      deleteAssociate({ id })
        .unwrap()
        .then(() => toast.success('Associado deletado.'))
        .catch(error => toast.error(error.message))
    }
    setConfirmDeleteAssociate({ isOpen: false })
  }, [confirmDeleteAssociate])

  return (
    <S.Container>
      <Breadcrumb
        path={['Associateos']}
        showButton
        buttonAsLink
        href={AdminRoutes.Admin_Associados_Criar}
      />
      <S.Content>
        <S.Input
          leftIcon={<MdSearch size={18} color="gray" />}
          shape="pill"
          label="Pesquisar por título"
          register={register}
          name="search"
          height="sm"
        />
        <Table<Associate>
          data={data?.data || []}
          columns={columns}
          pageSize={data?.perPage || 0}
          totalPages={data?.totalPages || 0}
          totalCount={data?.total || 0}
          onFetchData={handleFetchData}
          isLoading={isLoading}
        />
      </S.Content>
      <ModalConfirmAction
        title="Tem certeza que deseja deletar esse associado permanentemente?"
        isOpen={confirmDeleteAssociate.isOpen}
        onCancel={() => setConfirmDeleteAssociate({ isOpen: false })}
        onConfirm={handleDeleteAssociate}
      />
    </S.Container>
  )
}
