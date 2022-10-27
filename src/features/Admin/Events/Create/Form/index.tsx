/**
 *
 * Create Event Form
 *
 */

import { AddressForm } from '@/components/AddressForm'
import { Button } from '@/components/Form/Button'
import { Checkbox } from '@/components/Form/Checkbox'
import { Input } from '@/components/Form/Input'
import { FocusEventHandler, useCallback } from 'react'
import { useForm } from 'react-hook-form'

import schema, { FormProps } from './validator'
import * as S from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCreateEventMutation } from '@/api/events'
import { useNavigate } from 'react-router-dom'
import { AdminRoutes } from '@/routes/admin-routes'

export const CreateEventForm = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: zodResolver(schema),
    defaultValues: {
      canSubscribe: true,
    },
  })
  const [createEvent, { isLoading }] = useCreateEventMutation()

  const showPicker: FocusEventHandler<HTMLInputElement> = event => {
    event.target.showPicker()
  }

  const onSubmit = useCallback((data: FormProps) => {
    createEvent(data)
      .unwrap()
      .then(() => navigate(AdminRoutes.Admin_Eventos))
  }, [])

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Row>
        <Input
          required
          name="title"
          label="Título"
          placeholder="Informe o título do evento"
          register={register}
          errors={errors}
        />
        <Input
          required
          name="description"
          label="Descrição"
          placeholder="Informe a descrição do evento"
          register={register}
          errors={errors}
        />
      </S.Row>
      <Input
        name="youtubeUrl"
        label="Vídeo do YouTube (URL)"
        placeholder="Informe a URL do vídeo do youtube"
        register={register}
        errors={errors}
      />
      <S.Row>
        <Input
          required
          name="startDate"
          label="Data do Evento"
          placeholder="Informe a data do evento"
          register={register}
          errors={errors}
          type="date"
          onFocus={showPicker}
        />
        <Input
          required
          name="startHour"
          label="Hora do Evento"
          placeholder="Informe a hora do evento"
          register={register}
          errors={errors}
          type="time"
          onFocus={showPicker}
        />
      </S.Row>
      <Checkbox {...register('canSubscribe')}>
        É possível se inscrever nesse evento?
      </Checkbox>
      <hr />
      <AddressForm register={register} errors={errors} />
      <Button type="submit" disabled={isLoading}>
        Criar Evento
      </Button>
    </S.Form>
  )
}
