/**
 *
 * Update Mission Form
 *
 */

import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import {
  uploadMissionImage,
  useDeleteMissionImageMutation,
  useUpdateMissionMutation,
} from '@/api/missions'
import { Mission } from '@/api/models'
import { AddressForm } from '@/components/AddressForm'
import { Button } from '@/components/Form/Button'
import { FileField, Image } from '@/components/Form/FileField'
import { Input } from '@/components/Form/Input'
import { getDiffImages } from '@/utils/image'

import * as S from './styles'
import schema, { FormProps } from './validator'

export type UpdateMissionFormProps = {
  mission: Mission
}

export const UpdateMissionForm = ({ mission }: UpdateMissionFormProps) => {
  const [images, setImages] = useState<Image[]>([])
  const [isUploadingImages, setIsUploadingImages] = useState(false)

  const [deleteMissionImage, { isLoading: isDeletingImage }] =
    useDeleteMissionImageMutation()
  const [updateMission, { isLoading }] = useUpdateMissionMutation()

  const formMethods = useForm<FormProps>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: mission.title,
      description: mission.description,
      youtubeUrl: mission.youtubeUrl,
      startDate: mission.startDate.split('T')[0],
      startHour: mission.startHour,
      address: { ...mission.address },
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

  const uploadImages = useCallback(async (images: Image[]) => {
    try {
      await Promise.all(
        images.map(async image => {
          if (!image.file) return
          return uploadMissionImage({ id: mission.id, image: image.file })
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
          return deleteMissionImage({
            missionId: mission.id,
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
        await updateMission({ id: mission.id, ...data }).unwrap()
        const { toDelete, toUpload } = getDiffImages(images, mission.images)
        await uploadImages(toUpload)
        await deleteImages(toDelete)
      } catch (error) {
        const err = error as { message: string }
        alert(err.message)
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
            placeholder="Informe o título da missão"
            register={register}
            errors={errors}
          />
          <Input
            required
            name="description"
            label="Descrição"
            placeholder="Informe a descrição da missão"
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
            label="Data da Missão"
            placeholder="Informe a data da missão"
            register={register}
            errors={errors}
            type="date"
            onFocus={showPicker}
            onClick={showPicker}
          />
          <Input
            required
            name="startHour"
            label="Hora da Missão"
            placeholder="Informe a hora da missão"
            register={register}
            errors={errors}
            type="time"
            onFocus={showPicker}
            onClick={showPicker}
          />
        </S.Row>
        <hr />
        <FileField initialState={mission.images} onChange={setImages} />
        <hr />
        <AddressForm />
        <Button
          type="submit"
          disabled={isLoading || isUploadingImages || isDeletingImage}
        >
          Salvar
        </Button>
      </S.Form>
    </FormProvider>
  )
}
