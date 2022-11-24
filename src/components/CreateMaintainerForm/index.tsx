/**
 *
 * Create Maintainer Form
 *
 */

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useCreateMaintainerMutation } from '@/api/maintainers'
import { AdminRoutes } from '@/routes/admin-routes'
import handleFormError from '@/utils/handle-form-error'
import { maskCurrency, maskNumber, removeMaskCurrency } from '@/utils/mask'

import { AddressForm } from '../AddressForm'
import { Button } from '../Form/Button'
import { Input } from '../Form/Input'
import * as S from './styles'
import schema, { FormProps } from './validator'

export const CreateMaintainerForm = () => {
  const navigate = useNavigate()
  const [createMaintainer, { isLoading }] = useCreateMaintainerMutation()

  const formMethods = useForm<FormProps>({ resolver: zodResolver(schema) })
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = formMethods

  const onSubmit = (data: FormProps) => {
    createMaintainer({
      ...data,
      donateDay: parseInt(data.donateDay),
      donateAmount: removeMaskCurrency(data.donateAmount),
    })
      .unwrap()
      .then(() => {
        navigate(AdminRoutes.Admin_Mantenedores)
        toast.success('Mantenedor criado.')
      })
      .catch(error => handleFormError(error, setError))
  }

  return (
    <FormProvider {...formMethods}>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Row>
          <Input
            required
            name="name"
            label="Nome"
            placeholder="Informe o nome"
            register={register}
            errors={errors}
          />
          <Input
            required
            name="phone"
            label="Telefone"
            placeholder="Informe o telefone"
            register={register}
            errors={errors}
          />
        </S.Row>
        <Input
          required
          name="cpf"
          label="CPF"
          placeholder="Informe o CPF"
          register={register}
          errors={errors}
        />
        <S.Row>
          <Input
            required
            name="donateAmount"
            label="Quantidade a doar"
            placeholder="Informe a quantidade que pretende doar"
            register={register}
            errors={errors}
            mask={maskCurrency}
          />
          <Input
            required
            name="donateDay"
            label="Dia do mês que fará a doação"
            placeholder="Informe o dia do mês que fará a doação"
            register={register}
            errors={errors}
            mask={maskNumber}
          />
        </S.Row>
        <hr />
        <AddressForm />
        <Button type="submit" disabled={isLoading}>
          Criar Mantenedor
        </Button>
      </S.Form>
    </FormProvider>
  )
}
