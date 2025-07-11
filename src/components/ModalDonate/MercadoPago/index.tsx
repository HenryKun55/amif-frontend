import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { useCreateDonationLinkMutation } from '@/api/donation'
import { Button } from '@/components/Form/Button'
import { Input } from '@/components/Form/Input'
import { maskCurrency, removeMaskCurrency } from '@/utils/mask'

import * as S from './styles'
import schema, { FormProps } from './validator'

const defaultOptions = ['30', '50', '80', '100']

export const MercadoPago = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: zodResolver(schema),
  })

  const [createDonationLink, { isLoading }] = useCreateDonationLinkMutation()

  const handleOption = (value: string) => {
    setValue('value', maskCurrency(value + '00'))
  }

  const onSubmit = (data: FormProps) => {
    createDonationLink({
      name: data.name,
      value: removeMaskCurrency(data.value),
    })
      .unwrap()
      .then(({ url }) => window.open(url, '_blank'))
  }

  return (
    <S.Container onSubmit={handleSubmit(onSubmit)}>
      <S.Title>Escolha o valor que deseja Doar</S.Title>
      <S.OptionsContainer>
        {defaultOptions.map(value => (
          <S.Button
            key={value}
            variant="outlined"
            size="sm"
            onClick={() => handleOption(value)}
          >
            R$ {value}
          </S.Button>
        ))}
      </S.OptionsContainer>

      <S.OtherValueContainer>
        <Input
          required
          name="value"
          register={register}
          label="Valor a ser doado"
          placeholder="Informe outro valor"
          mask={maskCurrency}
          errors={errors}
        />
      </S.OtherValueContainer>
      <S.OtherValueContainer>
        <Input
          required
          name="name"
          register={register}
          label="Nome"
          placeholder="Informe seu nome"
          errors={errors}
        />
      </S.OtherValueContainer>

      <Button type="submit" disabled={isLoading}>
        Doar
      </Button>
    </S.Container>
  )
}
