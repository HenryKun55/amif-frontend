/**
 *
 * Subscribe to Event Form
 *
 */

import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { useCreateSubscribeToEventMutation } from '@/api/events'
import { Button } from '@/components/Form/Button'
import { Input } from '@/components/Form/Input'
import { Radio } from '@/components/Form/Radio'
import { useAppDispatch } from '@/store'
import { selectEventSubscribeModal } from '@/store/event/selector'
import { closeSubscribeEventModal } from '@/store/event/slice'
import handleFormError from '@/utils/handle-form-error'

import * as S from './styles'
import schema, { FormProps } from './validator'

export const SubscribeToEventForm = () => {
  const dispatch = useAppDispatch()
  const { eventId, eventTitle: eventName } = useSelector(
    selectEventSubscribeModal,
  )
  const [subscribeToEvent, { isLoading }] = useCreateSubscribeToEventMutation()

  const formMethods = useForm<FormProps>({
    resolver: zodResolver(schema),
    defaultValues: {
      alreadyHeard: 'Não',
      howKnow: '',
    },
  })
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = formMethods

  const onSubmit = useCallback((data: FormProps) => {
    subscribeToEvent({
      ...data,
      alreadyHeard: data.alreadyHeard === 'true',
      eventId,
    })
      .unwrap()
      .then(() => {
        toast.success(`Sua inscrição para o evento ${eventName} foi enviada.`)
        dispatch(closeSubscribeEventModal())
      })
      .catch(error => handleFormError(error, setError))
  }, [])

  return (
    <FormProvider {...formMethods}>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Inscrição</S.Title>
        <Input
          required
          name="name"
          label="Nome"
          placeholder="Informe o seu nome"
          register={register}
          errors={errors}
        />
        <Input
          required
          type="email"
          name="email"
          label="E-mail"
          placeholder="Informe a descrição do evento"
          register={register}
          errors={errors}
        />
        <S.Row>
          <Input
            required
            type="tel"
            name="phone"
            label="Celular"
            placeholder="Informe seu número de celular"
            register={register}
            errors={errors}
          />
        </S.Row>
        <S.Row>
          <Input
            name="pastorName"
            label="Nome do pastor"
            placeholder="Informe o nome do seu pastor"
            register={register}
            errors={errors}
          />
          <Input
            name="church"
            label="Nome da igreja"
            placeholder="Informe a igreja que você é membro"
            register={register}
            errors={errors}
          />
        </S.Row>
        <S.Fieldset>
          <S.Label htmlFor="alreadyHeard">
            Já tinha ouvido falar da AMIF?
          </S.Label>
          <Radio
            value="true"
            name="alreadyHeard"
            register={register}
            errors={errors}
          >
            Sim
          </Radio>
          <Radio
            value="false"
            name="alreadyHeard"
            register={register}
            errors={errors}
          >
            Não
          </Radio>
        </S.Fieldset>
        <S.Fieldset>
          <S.Label htmlFor="howKnow">Como soube deste evento?</S.Label>
          <Radio
            name="howKnow"
            register={register}
            value="Divulgação na minha igreja"
          >
            Divulgação na minha igreja
          </Radio>
          <Radio name="howKnow" register={register} value="Redes Sociais">
            Redes Sociais
          </Radio>
          <Radio name="howKnow" register={register} value="Amigos">
            Amigos
          </Radio>
          <Radio name="howKnow" register={register} value="Outro">
            Outro
          </Radio>
        </S.Fieldset>

        <Button type="submit" disabled={isLoading}>
          Me inscrever
        </Button>

        <input hidden {...register('eventId', { value: eventId })} />
      </S.Form>
    </FormProvider>
  )
}
