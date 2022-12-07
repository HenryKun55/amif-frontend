import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Navigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import {
  useFetchMaintainerQuery,
  useUpdateMaintainerMutation,
} from '@/api/maintainers'
import { Breadcrumb } from '@/components/Breadcrumb'
import { MaintainerForm } from '@/components/MaintainerForm'
import schema, {
  FormPropsInput,
  FormPropsOutput,
} from '@/components/MaintainerForm/validator'
import { PaymentsTable } from '@/features/Admin/Maintainers/Id/PaymentsTable'
import { AdminRoutes } from '@/routes/admin-routes'
import handleFormError from '@/utils/handle-form-error'
import { maskCurrency } from '@/utils/mask'

import * as S from './styles'

export const AdminMaintainersId = () => {
  const params = useParams<{ id: string }>()
  const id = params.id || ''
  const { data: maintainer, isLoading } = useFetchMaintainerQuery({ id })
  const [updateMaintainer, { isLoading: isUpdating }] =
    useUpdateMaintainerMutation()

  const formMethods = useForm<FormPropsInput>({
    resolver: zodResolver(schema),
  })

  const handleSubmit = (values: unknown) => {
    const data = values as FormPropsOutput
    updateMaintainer({ id, ...data })
      .unwrap()
      .then(() => toast.success('Mantenedor atualizado.'))
      .catch(error => handleFormError(error, formMethods.setError))
  }

  useEffect(() => {
    formMethods.reset({
      ...maintainer,
      donateAmount: maskCurrency(maintainer?.donateAmount),
      donateDay: maintainer?.donateDay.toString(),
    })
  }, [maintainer])

  if (!isLoading && !maintainer) {
    return <Navigate to={AdminRoutes.NotFound} replace />
  }

  return (
    <S.Container>
      <Breadcrumb path={['Mantenedores', maintainer?.name || 'Atualizar']} />
      {isLoading && <div>Carregando...</div>}
      {!isLoading && (
        <FormProvider {...formMethods}>
          <S.Form onSubmit={formMethods.handleSubmit(handleSubmit)}>
            <MaintainerForm />
            <S.SubmitButton size="sm" disabled={isLoading || isUpdating}>
              Salvar
            </S.SubmitButton>
          </S.Form>
        </FormProvider>
      )}
      {maintainer && <PaymentsTable maintainer={maintainer} />}
    </S.Container>
  )
}
