import { format } from 'date-fns'
import { useCallback, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { MdDelete, MdOutlineRemoveRedEye, MdSearch } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Column } from 'react-table'
import { toast } from 'react-toastify'

import { useDeleteMissionMutation, useListMissionsQuery } from '@/api/missions'
import { MissionSortBy } from '@/api/missions/types'
import { Mission } from '@/api/models'
import { Order } from '@/api/types'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ModalConfirmAction } from '@/components/ModalConfirmAction'
import { FetchDataProps, Table } from '@/components/Table'
import { TableMenu } from '@/components/Table/Menu'
import { useDebounce } from '@/hooks/useDebounce'
import { AdminRoutes } from '@/routes/admin-routes'

import * as S from './styles'

export const AdminMissions = () => {
  const [page, setPage] = useState(1)
  const [sortBy, setSortBy] = useState<keyof MissionSortBy | undefined>(
    'startDate',
  )
  const [orderBy, setOrderBy] = useState<Order>('desc')
  const [confirmDeleteMission, setConfirmDeleteMission] = useState<{
    id?: string
    isOpen: boolean
  }>({ isOpen: false })

  const navigate = useNavigate()
  const { register, watch } = useForm()
  const searchDebounced = useDebounce(watch('search'), 300)

  const [deleteMission] = useDeleteMissionMutation()
  const { data, isLoading } = useListMissionsQuery({
    page,
    orderBy,
    sortBy,
    title: searchDebounced,
  })

  const columns = useMemo(
    () =>
      [
        {
          Header: 'Título',
          accessor: 'title',
          defaultCanSort: true,
          responsive: true,
        },
        {
          Header: 'Descrição',
          accessor: 'description',
          responsive: true,
        },
        {
          id: 'startsAt',
          Header: 'Data',
          defaultCanSort: true,
          maxWidth: '15ch',
          accessor: (mission: Mission) => {
            try {
              const [date] = mission.startDate.split('T')
              return format(
                new Date(`${date}T${mission.startHour}:00`),
                'dd/MM/yyyy HH:mm',
              )
            } catch (error) {
              return 'Sem data'
            }
          },
        },
        {
          id: 'createdAt',
          Header: 'Data de Criação',
          maxWidth: '15ch',
          defaultCanSort: true,
          accessor: (mission: Mission) =>
            mission.createdAt
              ? format(new Date(mission.createdAt), 'dd/MM/yyyy HH:mm')
              : '',
        },
        {
          id: 'actions',
          Header: 'Ações',
          maxWidth: '8ch',
          accessor: (mission: Mission) => (
            <TableMenu
              actions={[
                {
                  title: 'Ver',
                  icon: <MdOutlineRemoveRedEye size={20} />,
                  onClick: () =>
                    navigate(
                      AdminRoutes.Admin_Missoes_Id.replace(':id', mission.id),
                    ),
                },
                {
                  title: 'Deletar',
                  icon: <MdDelete size={20} />,
                  onClick: () =>
                    setConfirmDeleteMission({ id: mission.id, isOpen: true }),
                },
              ]}
            />
          ),
        },
      ] as unknown as Column<Mission>[],
    [],
  )

  const handleFetchData = useCallback((args: FetchDataProps<Mission>) => {
    setPage(args.pageIndex + 1)
    setOrderBy(args.orderBy || 'desc')
    setSortBy((args.sortBy || 'startsAt') as keyof MissionSortBy)
  }, [])

  const handleDeleteMission = useCallback(() => {
    const id = confirmDeleteMission.id
    if (id) {
      deleteMission({ id })
        .unwrap()
        .then(() => toast.success('Missão deletada'))
        .catch(error => toast.error(error.message))
        .finally(() => setConfirmDeleteMission({ isOpen: false }))
    }
  }, [confirmDeleteMission])

  return (
    <S.Container>
      <Breadcrumb
        path={['Missões']}
        showButton
        buttonAsLink
        href={AdminRoutes.Admin_Missoes_Criar}
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
        <Table<Mission>
          data={data?.data || []}
          columns={columns}
          pageSize={data?.perPage || 0}
          totalPages={data?.totalPages || 0}
          totalCount={data?.total || 0}
          onFetchData={handleFetchData}
          isLoading={isLoading}
        />
        <ModalConfirmAction
          title="Tem certeza que deseja deletar essa missão?"
          isOpen={confirmDeleteMission.isOpen}
          onCancel={() => setConfirmDeleteMission({ isOpen: false })}
          onConfirm={handleDeleteMission}
        />
      </S.Content>
    </S.Container>
  )
}
