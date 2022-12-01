/**
 *
 * Create Mission Form
 *
 */

import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { uploadMissionImage, useCreateMissionMutation } from '@/api/missions'
import { AddressForm } from '@/components/AddressForm'
import { Button } from '@/components/Form/Button'
import { FileField, Image } from '@/components/Form/FileField'
import { Input } from '@/components/Form/Input'
import { AdminRoutes } from '@/routes/admin-routes'
import { MAX_SIZE_TWO_MEGABYTES } from '@/utils/constants'

import * as S from './styles'
import schema, { FormProps } from './validator'

export const CreateMissionForm = () => {
  const navigate = useNavigate()
  const [images, setImages] = useState<Image[]>([])
  const [isUploadingImages, setIsUploadingImages] = useState(false)
  const [createMission, { isLoading }] = useCreateMissionMutation()

  const formMethods = useForm<FormProps>({
    resolver: zodResolver(schema),
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
      let isMissionCreated = false
      try {
        const { missionId } = await createMission({
          ...data,
          youtubeUrl: data.youtubeUrl || undefined,
        }).unwrap()
        isMissionCreated = true
        await Promise.all(
          images.map(async image => {
            if (!image.file) return
            return uploadMissionImage({ id: missionId, image: image.file })
          }),
        )
      } catch (error) {
        const err = error as { message: string }
        toast.error(err.message)
      } finally {
        if (isMissionCreated) {
          navigate(AdminRoutes.Admin_Missoes)
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
        <FileField
          maxSizeInMegabytes={MAX_SIZE_TWO_MEGABYTES}
          allowedTypes={['image/jpeg', 'image/pjpeg', 'image/png']}
          onChange={setImages}
          onError={data => toast.error(data.message)}
        />
        <hr />
        <AddressForm />
        <Button type="submit" disabled={isLoading || isUploadingImages}>
          Criar Missão
        </Button>
      </S.Form>
    </FormProvider>
  )
}
