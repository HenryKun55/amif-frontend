/**
 *
 * Update User Form
 *
 */

import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { User } from '@/api/models'
import { useUpdateUserMutation } from '@/api/users'
import { Input } from '@/components/Form/Input'

import * as S from './styles'
import schema, { FormProps } from './validator'

export type UpdateUserFormProps = {
  user: User
}

export const UpdateUserForm = ({ user }: UpdateUserFormProps) => {
  const [updateUser, { isLoading }] = useUpdateUserMutation()

  const formMethods = useForm<FormProps>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: user.username,
    },
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formMethods

  const onSubmit = useCallback(
    async (data: FormProps) => {
      try {
        await updateUser({
          ...data,
          id: user.id,
        }).unwrap()
        toast.success('Usuário atualizado.')
      } catch (error) {
        const err = error as { message: string }
        toast.error(err.message)
      }
    },
    [user],
  )

  return (
    <FormProvider {...formMethods}>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Row>
          <Input
            required
            name="username"
            label="Nome"
            placeholder="Informe o nome do usuário"
            register={register}
            errors={errors}
          />
          <Input
            required
            type="password"
            name="password"
            label="Senha"
            placeholder="Informe a senha do usuário"
            register={register}
            errors={errors}
          />
        </S.Row>
        <S.SubmitButton type="submit" disabled={isLoading}>
          Atualizar
        </S.SubmitButton>
      </S.Form>
    </FormProvider>
  )
}
