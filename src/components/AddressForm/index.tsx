/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form'
import { Input } from '../Form/Input'
import * as S from './styles'

export type AddressForm = {
  register: UseFormRegister<any>
  errors?: DeepMap<FieldValues, FieldError>
  className?: string
}

export const AddressForm = ({ register, errors, className }: AddressForm) => {
  return (
    <S.Container className={className}>
      <S.Row>
        <Input
          required
          name="address.zipCode"
          label="CEP"
          placeholder="CEP"
          register={register}
          errors={errors}
        />
        <Input
          required
          name="address.district"
          label="Bairro"
          placeholder="Bairro"
          register={register}
          errors={errors}
        />
      </S.Row>
      <S.Row>
        <Input
          required
          name="address.street"
          label="Rua"
          placeholder="Rua"
          register={register}
          errors={errors}
        />
        <Input
          required
          name="address.number"
          label="Número"
          placeholder="Número"
          register={register}
          errors={errors}
        />
      </S.Row>
      <S.Row>
        <Input
          required
          name="address.city"
          label="Cidade"
          placeholder="Cidade"
          register={register}
          errors={errors}
        />
        <Input
          required
          name="address.state"
          label="Estado"
          placeholder="Estado"
          register={register}
          errors={errors}
        />
      </S.Row>
    </S.Container>
  )
}
