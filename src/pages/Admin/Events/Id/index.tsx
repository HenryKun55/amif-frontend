import { useCallback, useState } from 'react'
import { MdInfo } from 'react-icons/md'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import {
  useActivateEventMutation,
  useDeactivateEventMutation,
  useDeleteEventMutation,
  useFetchEventQuery,
  useMakeEventMainMutation,
} from '@/api/events'
import { Breadcrumb } from '@/components/Breadcrumb'
import { ModalConfirmAction } from '@/components/ModalConfirmAction'
import { UpdateEventForm } from '@/features/Admin/Events/Update/Form'
import { AdminRoutes } from '@/routes/admin-routes'

import * as S from './styles'
import { SubscriptionsTable } from './SubscriptionsTable'

export const AdminEventsId = () => {
  const params = useParams<{ id: string }>()
  const id = params.id || ''
  const navigate = useNavigate()

  const [confirmMakeMainModalOpen, setConfirmMakeMainModalOpen] =
    useState(false)

  const [confirmDeleteEvent, setConfirmDeleteEvent] = useState<{
    id?: string
    isOpen: boolean
  }>({ isOpen: false })

  const { data: event, isLoading } = useFetchEventQuery({ id })
  const [makeEventMain, { isLoading: isMakingEventMain }] =
    useMakeEventMainMutation()
  const [activateEvent, { isLoading: isActivating }] =
    useActivateEventMutation()
  const [deactivateEvent, { isLoading: isDeactivating }] =
    useDeactivateEventMutation()
  const [deleteEvent] = useDeleteEventMutation()

  const handleMakeMain = useCallback(() => {
    setConfirmMakeMainModalOpen(false)
    if (!event) return
    if (!event.isActive) {
      alert('Não é possível fazer essa ação por que o evento está desativado')
      return
    }
    makeEventMain({ eventId: id })
  }, [id, event])

  const handleToggleActive = useCallback(() => {
    if (!event) return
    if (event.isActive) {
      deactivateEvent({ id })
    } else {
      activateEvent({ id })
    }
  }, [id, event, activateEvent, deactivateEvent])

  const handleDeleteEvent = useCallback(() => {
    const id = confirmDeleteEvent.id
    if (id) {
      deleteEvent({ id })
        .unwrap()
        .then(() => toast.success('Evento deletado.'))
        .catch(error => toast.error(error.message))
        .finally(() => {
          setConfirmDeleteEvent({ isOpen: false })
          return navigate(AdminRoutes.Admin_Eventos)
        })
    }
  }, [confirmDeleteEvent])

  if (!isLoading && !event) {
    return <Navigate to={AdminRoutes.NotFound} replace />
  }

  return (
    <S.Container>
      <Breadcrumb path={['Eventos', event?.title || 'Atualizar']} />
      {isLoading && <div>Carregando...</div>}
      {!!event?.isMain && (
        <S.MainEventWrapper>
          <S.MainEventText>
            <MdInfo size={20} />
            Esse evento foi definido como evento principal
          </S.MainEventText>
        </S.MainEventWrapper>
      )}
      {event && (
        <UpdateEventForm
          event={event}
          isLoading={isActivating || isDeactivating || isMakingEventMain}
          onToggleActive={handleToggleActive}
          onMakeMain={() => setConfirmMakeMainModalOpen(true)}
          onDelete={() => setConfirmDeleteEvent({ id, isOpen: true })}
        />
      )}
      {event && <SubscriptionsTable eventId={event.id} />}
      <ModalConfirmAction
        title={
          <div>
            Você deseja tornar esse evento como principal? <br />
            Só é possível ter um evento definido como principal
          </div>
        }
        isOpen={confirmMakeMainModalOpen}
        onCancel={() => setConfirmMakeMainModalOpen(false)}
        onConfirm={handleMakeMain}
      />
      <ModalConfirmAction
        title="Tem certeza que deseja deletar esse evento?"
        isOpen={confirmDeleteEvent.isOpen}
        onCancel={() => setConfirmDeleteEvent({ isOpen: false })}
        onConfirm={handleDeleteEvent}
      />
    </S.Container>
  )
}
