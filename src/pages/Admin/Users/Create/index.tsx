import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useCreateUserMutation } from '@/api/users'
import { Breadcrumb } from '@/components/Breadcrumb'
import { UserForm } from '@/components/UserForm'
import schema, { FormPropsOutput } from '@/components/UserForm/validator'
import { AdminRoutes } from '@/routes/admin-routes'
import handleFormError from '@/utils/handle-form-error'

import * as S from './styles'

export const AdminUsersCreate = () => {
  const navigate = useNavigate()
  const formMethods = useForm<FormPropsOutput>({
    resolver: zodResolver(schema),
  })
  const [createUser, { isLoading }] = useCreateUserMutation()

  const handleSubmit = (data: FormPropsOutput) => {
    createUser(data)
      .unwrap()
      .then(() => {
        navigate(AdminRoutes.Admin_Usuarios)
        toast.success('Usuário criado.')
      })
      .catch(error => handleFormError(error, formMethods.setError))
  }

  return (
    <S.Container>
      <Breadcrumb path={['Usuários', 'Criar']} />
      <FormProvider {...formMethods}>
        <S.Form onSubmit={formMethods.handleSubmit(handleSubmit)}>
          <UserForm />
          <S.SubmitButton disabled={isLoading}>Criar Usuário</S.SubmitButton>
        </S.Form>
      </FormProvider>
    </S.Container>
  )
}
