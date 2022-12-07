import { useFormContext } from 'react-hook-form'

import { AddressForm } from '@/components/AddressForm'
import { Input } from '@/components/Form/Input'
import { maskPhone } from '@/utils/mask'

import * as S from '../styles'

export const PersonalData = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const showPicker = (event: any) => {
    event.target.showPicker()
  }
  return (
    <S.Wrapper>
      <S.Title>Dados Pessoais</S.Title>
      <S.Row>
        <Input
          required
          name="name"
          label="Nome"
          placeholder="Informe seu nome completo"
          register={register}
          errors={errors}
        />
        <Input
          required
          name="birthDate"
          label="Data de Nascimento"
          placeholder="Informe a data do evento"
          register={register}
          errors={errors}
          type="date"
          onFocus={showPicker}
          onClick={showPicker}
        />
      </S.Row>
      <S.Row>
        <Input
          required
          name="rg"
          label="R.G"
          placeholder="Informe o número do documento"
          register={register}
          errors={errors}
        />
        <Input
          required
          name="cpf"
          label="CPF"
          placeholder="Informe o número do CPF"
          register={register}
          errors={errors}
        />
        <Input
          required
          name="phone"
          label="Telefone"
          placeholder="Informe o número de contato"
          register={register}
          mask={maskPhone}
          errors={errors}
        />
        <Input
          required
          name="email"
          label="Email"
          placeholder="Informe o email de contato"
          register={register}
          errors={errors}
        />
      </S.Row>
      <AddressForm />
    </S.Wrapper>
  )
}
