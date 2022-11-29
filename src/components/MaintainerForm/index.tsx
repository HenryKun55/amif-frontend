/**
 *
 * Maintainer Form
 *
 */

import { useFormContext } from 'react-hook-form'

import { maskCurrency, maskNumber } from '@/utils/mask'

import { AddressForm } from '../AddressForm'
import { Input } from '../Form/Input'
import * as S from './styles'
import type { FormPropsOutput } from './validator'

export const MaintainerForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormPropsOutput>()

  return (
    <S.Container>
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
    </S.Container>
  )
}
