import { format } from 'date-fns'
import { useCallback, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaUserClock } from 'react-icons/fa'
import {
  MdCheckCircleOutline,
  MdOutlineCancel,
  MdOutlineRemoveRedEye,
  MdSearch,
} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Column } from 'react-table'

import {
  useActivateAssociateMutation,
  useDeactivateAssociateMutation,
  useListAssociatesQuery,
} from '@/api/associates'
import { AssociateSortBy } from '@/api/associates/types'
import { Associate } from '@/api/models'
import { Order } from '@/api/types'
import { Breadcrumb } from '@/components/Breadcrumb'
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

  const { register, watch } = useForm()
  const searchDebounced = useDebounce(watch('search'), 300)

  const { data, isLoading } = useListAssociatesQuery({
    page,
    orderBy,
    sortBy,
    name: searchDebounced,
  })

  const [activateAssociate, { isLoading: isActivating }] =
    useActivateAssociateMutation()
  const [deactivateAssociate, { isLoading: isDeactivating }] =
    useDeactivateAssociateMutation()

  const handleActivaDeactiveAssociate = useCallback((associate: Associate) => {
    if (associate.isActive) {
      deactivateAssociate({ id: associate.id })
    } else {
      activateAssociate({ id: associate.id })
    }
  }, [])

  const StatusFind = (associate: Associate) => {
    switch (associate.status) {
      case 'Pendente':
        return (
          <S.Text color="orange">
            <FaUserClock size={20} /> Pendente
          </S.Text>
        )
      case 'Aprovado':
        return (
          <S.Text color="green">
            <MdCheckCircleOutline size={20} /> Ativo
          </S.Text>
        )
      case 'Inativo':
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
              ? format(new Date(associate.createdAt), 'dd/MM/yyyy HH:mm')
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
              disabled={isActivating || isDeactivating}
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
                  title: associate.isActive ? 'Desativar' : 'Ativar',
                  icon: associate.isActive ? (
                    <MdOutlineCancel size={20} color="red" />
                  ) : (
                    <MdCheckCircleOutline size={20} color="green" />
                  ),
                  onClick: () => handleActivaDeactiveAssociate(associate),
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

  return (
    <S.Container>
      <Breadcrumb
        path={['Associateos']}
        showButton
        buttonAsLink
        href={AdminRoutes.Admin_Associateos_Criar}
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
    </S.Container>
  )
}
