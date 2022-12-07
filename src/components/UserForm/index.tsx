/**
 *
 * User Form
 *
 */

import { useFormContext } from 'react-hook-form'

import { Input } from '../Form/Input'
import * as S from './styles'
import type { FormPropsOutput } from './validator'

export const UserForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormPropsOutput>()

  return (
    <S.Container>
      <S.Row>
        <Input
          required
          name="username"
          label="Nome"
          placeholder="Informe o nome"
          register={register}
          errors={errors}
        />
        <Input
          required
          type="password"
          name="password"
          label="Senha"
          placeholder="Informe uma senha"
          register={register}
          errors={errors}
        />
      </S.Row>
    </S.Container>
  )
}
