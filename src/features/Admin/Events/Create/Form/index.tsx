/**
 *
 * Create Event Form
 *
 */

import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { uploadEventImage, useCreateEventMutation } from '@/api/events'
import { AddressForm } from '@/components/AddressForm'
import { Button } from '@/components/Form/Button'
import { Checkbox } from '@/components/Form/Checkbox'
import { FileField, Image } from '@/components/Form/FileField'
import { Input } from '@/components/Form/Input'
import { AdminRoutes } from '@/routes/admin-routes'
import { MAX_SIZE_TWO_MEGABYTES } from '@/utils/constants'

import * as S from './styles'
import schema, { FormProps } from './validator'

export const CreateEventForm = () => {
  const navigate = useNavigate()
  const [images, setImages] = useState<Image[]>([])
  const [isUploadingImages, setIsUploadingImages] = useState(false)
  const [createEvent, { isLoading }] = useCreateEventMutation()

  const formMethods = useForm<FormProps>({
    resolver: zodResolver(schema),
    defaultValues: {
      canSubscribe: true,
    },
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formMethods

  const showPicker = (event: any) => {
    event.target.showPicker()
  }

  const onSubmit = useCallback(
    async (data: FormProps) => {
      setIsUploadingImages(true)
      let isEventCreated = false
      try {
        const { eventId } = await createEvent(data).unwrap()
        isEventCreated = true
        await Promise.all(
          images.map(async image => {
            if (!image.file) return
            return uploadEventImage({ id: eventId, image: image.file })
          }),
        )
      } catch (error) {
        const err = error as { message: string }
        toast.error(err.message)
      } finally {
        if (isEventCreated) {
          navigate(AdminRoutes.Admin_Eventos)
        }
        setIsUploadingImages(false)
      }
    },
    [images],
  )

  return (
    <FormProvider {...formMethods}>
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
            onClick={showPicker}
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
            onClick={showPicker}
          />
        </S.Row>
        <Checkbox {...register('canSubscribe')}>
          É possível se inscrever nesse evento?
        </Checkbox>
        <hr />
        <FileField
          maxSizeInMegabytes={MAX_SIZE_TWO_MEGABYTES}
          allowedTypes={['image/jpeg', 'image/pjpeg', 'image/png']}
          onChange={setImages}
          onError={data => toast.error(data.message)}
        />
        <hr />
        <AddressForm autoFill={false} />
        <Button type="submit" disabled={isLoading || isUploadingImages}>
          Criar Evento
        </Button>
      </S.Form>
    </FormProvider>
  )
}
