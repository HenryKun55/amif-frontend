/**
 *
 * Update Event Form
 *
 */

import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useMemo, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import {
  uploadEventImage,
  useDeleteEventImageMutation,
  useUpdateEventMutation,
} from '@/api/events'
import { Event } from '@/api/models'
import { AddressForm } from '@/components/AddressForm'
import { Button } from '@/components/Form/Button'
import { Checkbox } from '@/components/Form/Checkbox'
import { FileField, Image } from '@/components/Form/FileField'
import { Input } from '@/components/Form/Input'
import { getDiffImages } from '@/utils/image'

import * as S from './styles'
import schema, { FormProps } from './validator'

export type UpdateEventFormProps = {
  event: Event
  isLoading: boolean
  onMakeMain: () => void
  onToggleActive: () => void
  onDelete: () => void
}

export const UpdateEventForm = ({
  event,
  isLoading,
  onMakeMain,
  onToggleActive,
  onDelete,
}: UpdateEventFormProps) => {
  const [images, setImages] = useState<Image[]>([])
  const [isUploadingImages, setIsUploadingImages] = useState(false)

  const [deleteEventImage, { isLoading: isDeletingImage }] =
    useDeleteEventImageMutation()
  const [updateEvent, { isLoading: isUpdating }] = useUpdateEventMutation()

  const formMethods = useForm<FormProps>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: event.title,
      description: event.description,
      canSubscribe: event.canSubscribe,
      youtubeUrl: event.youtubeUrl,
      startDate: event.startDate.split('T')[0],
      startHour: event.startHour,
      address: { ...event.address },
    },
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formMethods

  const isActionsDisabled = useMemo(
    () => isLoading || isUpdating || isUploadingImages || isDeletingImage,
    [isUpdating, isUploadingImages, isDeletingImage, isLoading],
  )

  const showPicker = (event: any) => {
    event.target.showPicker()
  }

  const uploadImages = useCallback(async (images: Image[]) => {
    try {
      await Promise.all(
        images.map(async image => {
          if (!image.file) return
          return uploadEventImage({ id: event.id, image: image.file })
        }),
      )
    } catch (error) {
      toast.error('Ocorreu um erro ao tentar fazer o upload de algumas imagens')
    }
  }, [])

  const deleteImages = useCallback(async (images: Image[]) => {
    try {
      await Promise.all(
        images.map(async image => {
          return deleteEventImage({
            eventId: event.id,
            imageId: image.id,
          }).unwrap()
        }),
      )
    } catch (error) {
      toast.error('Ocorreu um erro ao tentar deletar algumas imagens')
    }
  }, [])

  const onSubmit = useCallback(
    async (data: FormProps) => {
      setIsUploadingImages(true)
      try {
        await updateEvent({ id: event.id, ...data }).unwrap()
        const { toDelete, toUpload } = getDiffImages(images, event.images)
        await uploadImages(toUpload)
        await deleteImages(toDelete)
      } catch (error) {
        const err = error as { message: string }
        toast.error(err.message)
      } finally {
        setIsUploadingImages(false)
      }
    },
    [images, uploadImages, deleteImages],
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
        <FileField initialState={event.images} onChange={setImages} />
        <hr />
        <AddressForm />
        <S.Actions>
          <S.LeftActions>
            <S.ButtonDelete
              variant="outlined"
              disabled={isActionsDisabled || event.isMain}
              onClick={onDelete}
              size="sm"
            >
              Deletar
            </S.ButtonDelete>
            <Button
              disabled={isActionsDisabled}
              onClick={onToggleActive}
              size="sm"
            >
              {event.isActive ? 'Desativar' : 'Ativar'}
            </Button>
            {!event.isMain && (
              <Button
                disabled={isActionsDisabled}
                variant="outlined"
                size="sm"
                onClick={onMakeMain}
              >
                Torne esse o evento principal
              </Button>
            )}
          </S.LeftActions>
          <Button type="submit" disabled={isActionsDisabled} size="sm">
            Salvar
          </Button>
        </S.Actions>
      </S.Form>
    </FormProvider>
  )
}
