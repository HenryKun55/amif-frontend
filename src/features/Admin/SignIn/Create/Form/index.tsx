import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'

import { useSignInMutation } from '@/api/auth'
import { Button } from '@/components/Form/Button'
import { Input } from '@/components/Form/Input'
import { AdminRoutes } from '@/routes/admin-routes'
import { hasKey } from '@/utils/guards'

import * as S from './styles'
import schema, { FormProps } from './validator'

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({ resolver: zodResolver(schema) })
  const location = useLocation()
  const navigate = useNavigate()
  const [signIn, { isLoading }] = useSignInMutation()

  const navigateTo = useMemo(() => {
    if (
      !(location.state && typeof location.state === 'object') ||
      !hasKey('from', location.state) ||
      typeof location.state.from !== 'string'
    ) {
      return AdminRoutes.Admin_Home
    }
    return location.state.from
  }, [location.state])

  const onSubmit = useCallback(
    ({ username, password }: FormProps) => {
      signIn({
        username,
        password,
      })
        .unwrap()
        .then(() => navigate(navigateTo, { replace: true }))
        .catch(() => {
          alert('Ocorreu ume erro, tente novamente')
        })
    },
    [navigateTo],
  )

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Title>Bem-vindo</S.Title>
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
