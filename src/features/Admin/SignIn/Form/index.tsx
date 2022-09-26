import { useSignInMutation } from '@/api/auth'
import { Button } from '@/components/Form/Button'
import { Input } from '@/components/Form/Input'
import { AdminRoutes } from '@/routes/admin-routes'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import schema, { FormProps } from './validator'

export const Form = () => {
  const {
    reset,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormProps>({ resolver: zodResolver(schema) })

  const navigate = useNavigate()

  const [signIn, { isLoading }] = useSignInMutation()

  async function onSubmit({ username, password }: FormProps) {
    await signIn({
      username,
      password,
    })
      .unwrap()
      .then(() => navigate(AdminRoutes.Home))
      .catch(() => {
        alert('Ocorreu ume erro, tente novamente')
      })
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        control={control}
        name="username"
        defaultValue=""
        error={errors.username?.message}
        label="Usuário"
      />
      <Input
        type="password"
        control={control}
        name="password"
        defaultValue=""
        error={errors.username?.message}
        label="Usuário"
      />
      <Button type="submit">Entrar</Button>
    </S.Form>
  )
}
