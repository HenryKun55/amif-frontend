/**
 *
 * Create Event Form
 *
 */

import { AddressForm } from '@/components/AddressForm'
import { Button } from '@/components/Form/Button'
import { Checkbox } from '@/components/Form/Checkbox'
import { Input } from '@/components/Form/Input'
import { FocusEventHandler, useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import schema, { FormProps } from './validator'
import * as S from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { uploadEventImage, useCreateEventMutation } from '@/api/events'
import { useNavigate } from 'react-router-dom'
import { AdminRoutes } from '@/routes/admin-routes'
import { FileField, Image } from '@/components/Form/FileField'

export const CreateEventForm = () => {
  const navigate = useNavigate()
  const [images, setImages] = useState<Image[]>([])
  const [isUploadingImages, setIsUploadingImages] = useState(false)
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

  const onSubmit = useCallback(
    async (data: FormProps) => {
      setIsUploadingImages(true)
      let isImageCreated = false
      try {
        const { eventId } = await createEvent(data).unwrap()
        isImageCreated = true
        await Promise.all(
          images.map(async image => {
            if (!image.file) return
            return uploadEventImage({ id: eventId, image: image.file })
          }),
        )
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        alert((error as any).message)
      } finally {
        if (isImageCreated) {
          navigate(AdminRoutes.Admin_Eventos)
        }
        setIsUploadingImages(false)
      }
    },
    [images],
  )

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
      <FileField onChange={setImages} />
      <hr />
      <AddressForm register={register} errors={errors} />
      <Button type="submit" disabled={isLoading || isUploadingImages}>
        Criar Evento
      </Button>
    </S.Form>
  )
}
