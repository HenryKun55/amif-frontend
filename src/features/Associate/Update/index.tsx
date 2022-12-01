import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useUpdateAssociateMutation } from '@/api/associates'
import { Associate } from '@/api/models'
import { Checkbox } from '@/components/Form/Checkbox'
import { Input } from '@/components/Form/Input'
import { Select } from '@/components/Form/Select'
import { AdminRoutes } from '@/routes/admin-routes'

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
  const [isIndication, setIsIndication] = useState(false)
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
      ecclesiastical: { ...associate.ecclesiastical },
      education: { ...associate.education },
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = formMethods

  console.log(watch('status'), errors)

  const onSubmit = useCallback((values: unknown) => {
    const data = values as FormPropsOutput
    updateAssociate({ ...data, id: associate.id })
      .unwrap()
      .then(() => {
        toast.success('Salvo!')
        navigate(AdminRoutes.Admin_Associados)
      })
  }, [])

  return (
    <FormProvider {...formMethods}>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <PersonalData />
        <EcclesiasticalData />
        <EducationData />
        <S.Row>
          <Checkbox onChange={() => setIsIndication(!isIndication)}>
            Teve indicação de outro sócio da AMIF ?
          </Checkbox>
          {isIndication && (
            <Input
              name="indication"
              label="Quem?"
              placeholder="Informe o nome"
              register={register}
              errors={errors}
            />
          )}
        </S.Row>
        <S.Row>
          <S.Row>
            <span>Categoria de associado:</span>
            <input
              id="founded_partners"
              {...register('category')}
              type="radio"
              value="founded_partners"
            />
            <label htmlFor="founded_partners">Sócio fundador</label>
            <input
              id="contributing_partner"
              {...register('category')}
              type="radio"
              value="contributing_partner"
            />
            <label htmlFor="contributing_partner">Sócio contribuinte</label>
          </S.Row>
        </S.Row>
        <S.Row>
          <Select options={statusOptions} control={control} name="status" />
        </S.Row>

        <S.WrapperButton>
          <S.Button type="submit">Enviar</S.Button>
        </S.WrapperButton>
      </S.Form>
    </FormProvider>
  )
}
