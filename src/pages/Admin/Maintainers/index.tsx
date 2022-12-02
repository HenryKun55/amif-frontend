import { format } from 'date-fns'
import { useCallback, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
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
  useActivateMaintainerMutation,
  useDeactivateMaintainerMutation,
  useDeleteMaintainerMutation,
  useListMaintainersQuery,
} from '@/api/maintainers'
import { MaintainerSortBy } from '@/api/maintainers/types'
import { Maintainer } from '@/api/models'
import { Order } from '@/api/types'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ModalConfirmAction } from '@/components/ModalConfirmAction'
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
  const [confirmDeleteMaintainer, setConfirmDeleteMaintainer] = useState<{
    id?: string
    isOpen: boolean
  }>({ isOpen: false })
  const [hasPayersOfTheDay, setHasPayersOfTheDay] = useState(false)

  const [activateMaintainer, { isLoading: isActivating }] =
    useActivateMaintainerMutation()
  const [deactivateMaintainer, { isLoading: isDeactivating }] =
    useDeactivateMaintainerMutation()
  const [deleteMainteiner, { isLoading: isDeleting }] =
    useDeleteMaintainerMutation()

  const { register, watch } = useForm()
  const searchDebounced = useDebounce(watch('search'), 300)

  const { data, isLoading } = useListMaintainersQuery({
    page,
    orderBy,
    sortBy,
    name: searchDebounced || undefined,
    donateDay: hasPayersOfTheDay ? new Date().getDate().toString() : undefined,
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
          Header: 'Dia de pagamento',
          accessor: 'donateDay',
          responsive: true,
          maxWidth: '15ch',
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
              disabled={isActivating || isDeactivating || isDeleting}
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
                  onClick: () =>
                    maintainer.isActive
                      ? deactivateMaintainer({ id: maintainer.id })
                      : activateMaintainer({ id: maintainer.id }),
                },
                {
                  title: 'Deletar',
                  icon: <MdDelete size={20} color="red" />,
                  onClick: () =>
                    setConfirmDeleteMaintainer({
                      isOpen: true,
                      id: maintainer.id,
                    }),
                },
              ]}
            />
          ),
        },
      ] as unknown as Column<Maintainer>[],
    [],
  )

  const handleDeleteMaintainer = useCallback(() => {
    const id = confirmDeleteMaintainer.id
    if (id) {
      deleteMainteiner({ id })
        .unwrap()
        .then(() => toast.success('Mantenedor deletado.'))
        .catch(error => toast.error(error.message))
    }
    setConfirmDeleteMaintainer({ isOpen: false })
  }, [confirmDeleteMaintainer])

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
        <S.HeaderContent>
          <S.Switch>
            <S.SwitchText>Pagantes do dia</S.SwitchText>
            <S.SwitchComponent
              checked={hasPayersOfTheDay}
              onChange={() => setHasPayersOfTheDay(!hasPayersOfTheDay)}
            />
          </S.Switch>
          <S.Input
            leftIcon={<MdSearch size={18} color="gray" />}
            shape="pill"
            label="Pesquisar por título"
            register={register}
            name="search"
            height="sm"
          />
        </S.HeaderContent>
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
      <ModalConfirmAction
        title="Tem certeza que deseja deletar esse mantenedor permanentemente?"
        isOpen={confirmDeleteMaintainer.isOpen}
        onCancel={() => setConfirmDeleteMaintainer({ isOpen: false })}
        onConfirm={handleDeleteMaintainer}
      />
    </S.Container>
  )
}
