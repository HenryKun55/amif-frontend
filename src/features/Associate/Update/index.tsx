import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useUpdateAssociateMutation } from '@/api/associates'
import { Associate } from '@/api/models'

import { AdditionalData } from '../Form/AdditionalData'
import { EcclesiasticalData } from '../Form/EcclesiasticalData'
import { EducationData } from '../Form/EducationData'
import { PersonalData } from '../Form/PersonalData'
import * as S from './styles'
import schema, { FormPropsInput, FormPropsOutput } from './validator'

export type UpdateAssociateProps = {
  associate: Associate
  isLoading: boolean
}

export const UpdateAssociate = ({
  associate,
  isLoading,
}: UpdateAssociateProps) => {
  const navigate = useNavigate()
  const [updateAssociate, { isLoading: isUpdating }] =
    useUpdateAssociateMutation()

  const statusOptions = [
    { value: 'approved', label: 'Aprovado', color: '#36B37E' },
    { value: 'pending', label: 'Pendente', color: '#FF8B00' },
    { value: 'inactive', label: 'Inativo', color: '#FF5630' },
  ]

  const formMethods = useForm<FormPropsInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: associate.name,
      cpf: associate.cpf,
      status: statusOptions.find(s => s.value === associate.status),
      category: associate.category,
      birthDate: associate.birthDate.split('T')[0],
      email: associate.email,
      phone: associate.phone,
      rg: associate.rg,
      indication: associate.indication,
      address: { ...associate.address },
      ecclesiastical: {
        ...associate.ecclesiastical,
        admissionDate: associate.ecclesiastical?.admissionDate?.split('T')[0],
      },
      education: { ...associate.education },
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = formMethods

  const onSubmit = useCallback(
    (values: unknown) => {
      const data = values as FormPropsOutput
      updateAssociate({ ...data, id: associate.id })
        .unwrap()
        .then(() => {
          toast.success('Associado atualizado')
        })
    },
    [associate.id],
  )

  return (
    <FormProvider {...formMethods}>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <PersonalData />
        <EcclesiasticalData isPosition={!!associate.ecclesiastical?.position} />
        <EducationData />
        <AdditionalData
          control={control}
          mode={'admin'}
          associate={associate}
        />

        <S.WrapperButton>
          <S.Button type="submit">Enviar</S.Button>
        </S.WrapperButton>
      </S.Form>
    </FormProvider>
  )
}
