import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { useFetchCepQuery } from '@/api/viacep'

import { Input } from '../Form/Input'
import * as S from './styles'

export type AddressForm = {
  className?: string
}

export const AddressForm = ({ className }: AddressForm) => {
  const {
    watch,
    reset,
    register,
    setError,
    formState: { errors },
  } = useFormContext()
  const zipCode = watch('address.zipCode')
  const { data } = useFetchCepQuery(
    { cep: zipCode },
    { skip: !zipCode || zipCode.length < 8 },
  )

  useEffect(() => {
    if (!data) return
    if (data.erro) {
      setError('address.zipCode', { type: 'value', message: 'CEP inválido' })
      return
    }
    reset({
      ...watch(),
      address: {
        ...watch('address'),
        zipCode: data.cep.split('-').join(''),
        district: data.bairro,
        street: data.logradouro,
        city: data.localidade,
        state: data.uf,
      },
    })
  }, [data])

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
