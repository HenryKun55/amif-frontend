import { format } from 'date-fns'
import { useCallback, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  MdCheckCircleOutline,
  MdOutlineCancel,
  MdOutlineRemoveRedEye,
  MdSearch,
} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Column } from 'react-table'

import { useListMaintainersQuery } from '@/api/maintainers'
import { MaintainerSortBy } from '@/api/maintainers/types'
import { Maintainer } from '@/api/models'
import { Order } from '@/api/types'
import { Breadcrumb } from '@/components/Breadcrumb'
import { FetchDataProps, Table } from '@/components/Table'
import { TableMenu } from '@/components/Table/Menu'
import { useDebounce } from '@/hooks/useDebounce'
import { AdminRoutes } from '@/routes/admin-routes'

import * as S from './styles'

export const AdminMaintainers = () => {
  const navigate = useNavigate()
  const [page, setPage] = useState(1)
  const [sortBy, setSortBy] = useState<keyof MaintainerSortBy | undefined>(
    'createdAt',
  )
  const [orderBy, setOrderBy] = useState<Order>('desc')

  const { register, watch } = useForm()
  const searchDebounced = useDebounce(watch('search'), 300)

  const { data, isLoading } = useListMaintainersQuery({
    page,
    orderBy,
    sortBy,
    name: searchDebounced,
  })

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
          accessor: 'phone',
          maxWidth: '15ch',
        },
        {
          Header: 'CPF',
          accessor: 'cpf',
          maxWidth: '15ch',
          defaultCanSort: true,
        },
        {
          id: 'isActive',
          Header: 'Ativo',
          maxWidth: '8ch',
          accessor: (maintainer: Maintainer) =>
            maintainer.isActive ? (
              <MdCheckCircleOutline size={20} color="green" />
            ) : (
              <MdOutlineCancel size={20} color="red" />
            ),
        },
        {
          id: 'createdAt',
          Header: 'Data de Criação',
          maxWidth: '15ch',
          defaultCanSort: true,
          accessor: (maintainer: Maintainer) =>
            maintainer.createdAt
              ? format(new Date(maintainer.createdAt), 'dd/MM/yyyy HH:mm')
              : '',
        },
        {
          id: 'actions',
          Header: 'Ações',
          maxWidth: '8ch',
          accessor: (maintainer: Maintainer) => (
            <TableMenu
              actions={[
                {
                  title: 'Ver',
                  icon: <MdOutlineRemoveRedEye size={20} />,
                  onClick: () =>
                    navigate(
                      AdminRoutes.Admin_Mantenedores_Id.replace(
                        ':id',
                        maintainer.id,
                      ),
                    ),
                },
                {
                  title: maintainer.isActive ? 'Desativar' : 'Ativar',
                  icon: maintainer.isActive ? (
                    <MdOutlineCancel size={20} color="red" />
                  ) : (
                    <MdCheckCircleOutline size={20} color="green" />
                  ),
                  onClick: () => console.log(maintainer),
                },
              ]}
            />
          ),
        },
      ] as unknown as Column<Maintainer>[],
    [],
  )

  const handleFetchData = useCallback((args: FetchDataProps<Maintainer>) => {
    setPage(args.pageIndex + 1)
    setOrderBy(args.orderBy || 'desc')
    setSortBy((args.sortBy || 'createdAt') as keyof MaintainerSortBy)
  }, [])

  return (
    <S.Container>
      <Breadcrumb
        path={['Mantenedores']}
        showButton
        buttonAsLink
        href={AdminRoutes.Admin_Mantenedores_Criar}
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
        <Table<Maintainer>
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
