import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useCreateMaintainerMutation } from '@/api/maintainers'
import { Breadcrumb } from '@/components/Breadcrumb'
import { MaintainerForm } from '@/components/MaintainerForm'
import schema, { FormPropsOutput } from '@/components/MaintainerForm/validator'
import { AdminRoutes } from '@/routes/admin-routes'
import handleFormError from '@/utils/handle-form-error'

import * as S from './styles'

export const AdminMaintainersCreate = () => {
  const navigate = useNavigate()
  const formMethods = useForm<FormPropsOutput>({
    resolver: zodResolver(schema),
  })
  const [createMaintainer, { isLoading }] = useCreateMaintainerMutation()

  const handleSubmit = (data: FormPropsOutput) => {
    createMaintainer(data)
      .unwrap()
      .then(() => {
        navigate(AdminRoutes.Admin_Mantenedores)
        toast.success('Mantenedor criado.')
      })
      .catch(error => handleFormError(error, formMethods.setError))
  }

  return (
    <S.Container>
      <Breadcrumb path={['Mantenedores', 'Criar']} />
      <FormProvider {...formMethods}>
        <S.Form onSubmit={formMethods.handleSubmit(handleSubmit)}>
          <MaintainerForm />
          <S.SubmitButton disabled={isLoading}>Criar Mantenedor</S.SubmitButton>
        </S.Form>
      </FormProvider>
    </S.Container>
  )
}
