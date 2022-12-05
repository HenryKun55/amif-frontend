import { format } from 'date-fns'
import { useCallback, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { MdSearch } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Column } from 'react-table'

import { UserTable } from '@/api/models'
import { Order } from '@/api/types'
import { useListUsersQuery } from '@/api/users'
import { UserSortBy } from '@/api/users/types'
import { Breadcrumb } from '@/components/Breadcrumb'
import { FetchDataProps, Table } from '@/components/Table'
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

  const { register, watch } = useForm()
  const searchDebounced = useDebounce(watch('search'), 300)

  const { data, isLoading } = useListUsersQuery({
    page,
    orderBy,
    sortBy,
    username: searchDebounced,
  })

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
      ] as unknown as Column<UserTable>[],
    [],
  )

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
    </S.Container>
  )
}
