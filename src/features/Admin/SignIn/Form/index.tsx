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
    register,
    handleSubmit,
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
      .then(() => navigate(AdminRoutes.Admin_Home))
      .catch(() => {
        alert('Ocorreu ume erro, tente novamente')
      })
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Title>Bem-vindo de volta</S.Title>
      <Input
        name="username"
        errors={errors}
        label="Usuário"
        register={register}
      />
      <Input
        type="password"
        name="password"
        errors={errors}
        label="Senha"
        register={register}
      />
      <Button type="submit" disabled={isLoading} fullWidth>
        Entrar
      </Button>
    </S.Form>
  )
}
