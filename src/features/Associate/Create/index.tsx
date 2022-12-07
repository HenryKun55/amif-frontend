import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useCreateAssociateMutation } from '@/api/associates'
import { AdminRoutes } from '@/routes/admin-routes'
import { Routes } from '@/routes/routes'

import { AdditionalData } from '../Form/AdditionalData'
import { EcclesiasticalData } from '../Form/EcclesiasticalData'
import { EducationData } from '../Form/EducationData'
import { PersonalData } from '../Form/PersonalData'
import * as S from './styles'
import schema, { FormPropsInput, FormPropsOutput } from './validator'

export type CreateAssociateFormProps = {
  mode: 'client' | 'admin'
}

export const CreateAssociateForm = ({ mode }: CreateAssociateFormProps) => {
  const navigate = useNavigate()
  const [createAssociate, { isLoading }] = useCreateAssociateMutation()

  const formMethods = useForm<FormPropsInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      mode: mode,
      status: { value: 'pending', label: 'Pendente', color: '#FF8B00' },
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = formMethods

  const onSuccess = () => {
    if (mode === 'admin') {
      toast.success('Cadastrado com sucesso!')
      navigate(AdminRoutes.Admin_Associados)
      return
    }
    toast.success('Sua solicitação foi enviada com sucesso!')
    navigate(Routes.Home)
  }

  const onSubmit = useCallback((values: unknown) => {
    const data = values as FormPropsOutput
    createAssociate(data)
      .unwrap()
      .then(() => {
        onSuccess()
      })
  }, [])

  return (
    <FormProvider {...formMethods}>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <PersonalData />
        <EcclesiasticalData />
        <EducationData />
        <AdditionalData control={control} mode={mode} />
        <S.WrapperButton>
          <S.Button type="submit">Enviar</S.Button>
        </S.WrapperButton>
      </S.Form>
    </FormProvider>
  )
}
