import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import ReactModal from 'react-modal'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { useCreateMaintainerMutation } from '@/api/maintainers'
import { useAppDispatch } from '@/store'
import { selectMaintainerModal } from '@/store/maintainer/selector'
import { closeMaintainerModal } from '@/store/maintainer/slice'
import handleFormError from '@/utils/handle-form-error'

import { MaintainerForm } from '../MaintainerForm'
import schema, { FormPropsOutput } from '../MaintainerForm/validator'
import * as S from './styles'

export const ModalMaintainer = () => {
  const dispatch = useAppDispatch()
  const { isOpen } = useSelector(selectMaintainerModal)

  const formMethods = useForm<FormPropsOutput>({
    resolver: zodResolver(schema),
  })
  const [createMaintainer, { isLoading }] = useCreateMaintainerMutation()

  const handleSubmit = (data: FormPropsOutput) => {
    createMaintainer(data)
      .unwrap()
      .then(() => {
        dispatch(closeMaintainerModal())
        toast.success('Obrigado por se tornar um mantenedor.')
      })
      .catch(error => handleFormError(error, formMethods.setError))
  }

  return (
    <ReactModal
      style={S.reactModalStyles}
      isOpen={isOpen}
      onRequestClose={() => dispatch(closeMaintainerModal())}
    >
      <FormProvider {...formMethods}>
        <S.Form onSubmit={formMethods.handleSubmit(handleSubmit)}>
          <S.Title>Inscrição</S.Title>
          <MaintainerForm />
          <S.SubmitButton disabled={isLoading}>Ser Mantenedor</S.SubmitButton>
        </S.Form>
      </FormProvider>
    </ReactModal>
  )
}
