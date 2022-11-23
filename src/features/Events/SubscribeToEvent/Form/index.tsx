/**
 *
 * Subscribe to Event Form
 *
 */

import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { useCreateSubscribeToEventMutation } from '@/api/events'
import { Button } from '@/components/Form/Button'
import { Input } from '@/components/Form/Input'
import { Radio } from '@/components/Form/Radio'
import { useModal } from '@/context/Modal'

import * as S from './styles'
import schema, { FormProps } from './validator'

export const SubscribeToEventForm = () => {
  const { eventId, onClose } = useModal()
  const [subscribeToEvent, { isLoading }] = useCreateSubscribeToEventMutation()

  const formMethods = useForm<FormProps>({
    resolver: zodResolver(schema),
    defaultValues: {
      alreadyHeard: 'Não',
      howKnow: '',
    },
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formMethods

  const onSubmit = useCallback(async (data: FormProps) => {
    try {
      await subscribeToEvent({
        ...data,
        alreadyHeard: data.alreadyHeard === 'Sim' ? true : false,
        eventId,
      }).unwrap()
      toast.success('Inscrição Enviada')
    } catch (error) {
      const err = error as { message: string }
      alert(err.message)
    } finally {
      onClose('subscribe')
    }
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
          <Radio value="Sim" {...register('alreadyHeard')}>
            Sim
          </Radio>
          <Radio value="Não" {...register('alreadyHeard')}>
            Não
          </Radio>
        </S.Fieldset>
        <S.Fieldset>
          <S.Label htmlFor="howKnow">Como soube deste evento?</S.Label>
          <Radio value="Divulgação na minha igreja" {...register('howKnow')}>
            Divulgação na minha igreja
          </Radio>
          <Radio value="Redes Sociais" {...register('howKnow')}>
            Redes Sociais
          </Radio>
          <Radio value="Amigos" {...register('howKnow')}>
            Amigos
          </Radio>
          <Radio value="Outro" {...register('howKnow')}>
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
