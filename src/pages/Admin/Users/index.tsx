import { format } from 'date-fns'
import { useCallback, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { MdDelete, MdOutlineRemoveRedEye, MdSearch } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Column } from 'react-table'
import { toast } from 'react-toastify'

import { UserTable } from '@/api/models'
import { Order } from '@/api/types'
import { useDeleteUserMutation, useListUsersQuery } from '@/api/users'
import { UserSortBy } from '@/api/users/types'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ModalConfirmAction } from '@/components/ModalConfirmAction'
import { FetchDataProps, Table } from '@/components/Table'
import { TableMenu } from '@/components/Table/Menu'
import { useDebounce } from '@/hooks/useDebounce'
import { AdminRoutes } from '@/routes/admin-routes'

import * as S from './styles'

export const AdminUsers = () => {
  const navigate = useNavigate()
  const [page, setPage] = useState(1)
  const [sortBy, setSortBy] = useState<keyof UserSortBy | undefined>(
    'createdAt',
  )
  const [orderBy, setOrderBy] = useState<Order>('desc')
  const [confirmDeleteUser, setConfirmDeleteUser] = useState<{
    id?: string
    isOpen: boolean
  }>({ isOpen: false })

  const { register, watch } = useForm()
  const searchDebounced = useDebounce(watch('search'), 300)

  const { data, isLoading } = useListUsersQuery({
    page,
    orderBy,
    sortBy,
    username: searchDebounced,
  })

  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation()

  const columns = useMemo(
    () =>
      [
        {
          Header: 'Título',
          accessor: 'username',
          defaultCanSort: true,
          responsive: true,
        },
        {
          id: 'createdAt',
          Header: 'Data de Criação',
          maxWidth: '15ch',
          defaultCanSort: true,
          accessor: (user: UserTable) =>
            user.createdAt
              ? format(new Date(user.createdAt), 'dd/MM/yyyy HH:mm')
              : '',
        },
        {
          id: 'actions',
          Header: 'Ações',
          maxWidth: '8ch',
          accessor: (user: UserTable) => (
            <TableMenu
              disabled={isDeleting}
              actions={[
                {
                  title: 'Ver',
                  icon: <MdOutlineRemoveRedEye size={20} />,
                  onClick: () =>
                    navigate(
                      AdminRoutes.Admin_Usuarios_Id.replace(':id', user.id),
                    ),
                },
                {
                  title: 'Deletar',
                  icon: <MdDelete size={20} color="red" />,
                  onClick: () =>
                    setConfirmDeleteUser({
                      isOpen: true,
                      id: user.id,
                    }),
                },
              ]}
            />
          ),
        },
      ] as unknown as Column<UserTable>[],
    [],
  )

  const handleDeleteUser = useCallback(() => {
    const id = confirmDeleteUser.id
    if (id) {
      deleteUser({ id })
        .unwrap()
        .then(() => toast.success('Usuário deletado.'))
        .catch(error => toast.error(error.message))
    }
    setConfirmDeleteUser({ isOpen: false })
  }, [confirmDeleteUser])

  const handleFetchData = useCallback((args: FetchDataProps<UserTable>) => {
    setPage(args.pageIndex + 1)
    setOrderBy(args.orderBy || 'desc')
    setSortBy((args.sortBy || 'createdAt') as keyof UserSortBy)
  }, [])

  return (
    <S.Container>
      <Breadcrumb
        path={['Usuários']}
        showButton
        buttonAsLink
        href={AdminRoutes.Admin_Usuarios_Criar}
      />
      <S.Content>
        <S.Input
          leftIcon={<MdSearch size={18} color="gray" />}
          shape="pill"
          label="Pesquisar por nome"
          register={register}
          name="search"
          height="sm"
        />
        <Table<UserTable>
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
        title="Tem certeza que deseja deletar esse usuário permanentemente?"
        isOpen={confirmDeleteUser.isOpen}
        onCancel={() => setConfirmDeleteUser({ isOpen: false })}
        onConfirm={handleDeleteUser}
      />
    </S.Container>
  )
}
