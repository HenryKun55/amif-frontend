import { zodResolver } from '@hookform/resolvers/zod'
import format from 'date-fns/format'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { MdClose } from 'react-icons/md'
import ReactModal from 'react-modal'
import { toast } from 'react-toastify'

import { useCreateMaintainerPaymentMutation } from '@/api/maintainers'
import { Input } from '@/components/Form/Input'
import handleFormError from '@/utils/handle-form-error'
import { maskCurrency } from '@/utils/mask'

import * as S from './styles'
import schema, { FormPropsOutput } from './validator'

export type CreatePaymentModalProps = {
  maintainerId: string
  isOpen: boolean
  onClose: () => void
}

export const CreatePaymentModal = ({
  maintainerId,
  isOpen,
  onClose,
}: CreatePaymentModalProps) => {
  const [createPayment, { isLoading }] = useCreateMaintainerPaymentMutation()

  const {
    reset,
    register,
    setFocus,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<FormPropsOutput>({ resolver: zodResolver(schema) })

  const showPicker = (event: any) => {
    event.target.showPicker()
  }

  const handleCancel = () => {
    reset()
    onClose()
  }

  const onSubmit = (values: unknown) => {
    const data = values as FormPropsOutput
    createPayment({ id: maintainerId, ...data })
      .unwrap()
      .then(() => {
        toast.success('Pagamento adicionado.')
        onClose()
      })
      .catch(error => handleFormError(error, setError))
  }

  useEffect(() => {
    if (isOpen) {
      reset({ paymentDate: format(new Date(), 'yyyy-MM-dd') })
      setFocus('amount')
    }
  }, [isOpen])

  return (
    <ReactModal
      style={S.reactModalStyles}
      isOpen={isOpen}
      onRequestClose={handleCancel}
      appElement={document.getElementById('root') as HTMLElement}
    >
      <S.Container>
        <S.Header>
          <S.Title>Criar Novo Pagamento</S.Title>
          <S.CloseButton onClick={handleCancel}>
            <MdClose />
          </S.CloseButton>
        </S.Header>
        <S.Content>
          <S.Form id="create-payment-form" onSubmit={handleSubmit(onSubmit)}>
            <Input
              required
              name="paymentDate"
              label="Data do Pagamento"
              placeholder="Informe a data do pagamento"
              register={register}
              errors={errors}
              type="date"
              onFocus={showPicker}
              onClick={showPicker}
            />
            <Input
              required
              name="amount"
              label="Valor pago"
              placeholder="Informe o valor pago"
              mask={maskCurrency}
              register={register}
              errors={errors}
            />
          </S.Form>
          <S.Footer>
            <S.CancelButton
              size="sm"
              variant="outlined"
              onClick={handleCancel}
              disabled={isLoading}
            >
              Cancelar
            </S.CancelButton>
            <S.SubmitButton
              size="sm"
              form="create-payment-form"
              disabled={isLoading}
            >
              Criar Pagamento
            </S.SubmitButton>
          </S.Footer>
        </S.Content>
      </S.Container>
    </ReactModal>
  )
}
