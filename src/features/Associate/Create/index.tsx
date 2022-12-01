import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useCreateAssociateMutation } from '@/api/associates'
import { Checkbox } from '@/components/Form/Checkbox'
import { Input } from '@/components/Form/Input'
import { Routes } from '@/routes/routes'

import { EcclesiasticalData } from '../Form/EcclesiasticalData'
import { EducationData } from '../Form/EducationData'
import { PersonalData } from '../Form/PersonalData'
import * as S from './styles'
import schema, { FormProps } from './validator'

export const FormAssociate = () => {
  const navigate = useNavigate()
  const [createAssociate, { isLoading }] = useCreateAssociateMutation()
  const [isIndication, setIsIndication] = useState(false)

  const formMethods = useForm<FormProps>({
    resolver: zodResolver(schema),
    defaultValues: {
      status: 'pending',
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formMethods

  const onSubmit = useCallback((data: FormProps) => {
    createAssociate(data)
      .unwrap()
      .then(() => {
        toast.success('Solicitação enviada.')
        navigate(Routes.Home)
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
        <S.WrapperButton>
          <S.Button type="submit">Enviar</S.Button>
        </S.WrapperButton>
      </S.Form>
    </FormProvider>
  )
}
