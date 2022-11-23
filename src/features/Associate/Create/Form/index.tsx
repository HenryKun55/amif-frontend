import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useCreateAssociateMutation } from '@/api/associates'
import { AddressForm } from '@/components/AddressForm'
import { Checkbox } from '@/components/Form/Checkbox'
import { Input } from '@/components/Form/Input'
import { Routes } from '@/routes/routes'

import * as S from './styles'
import schema, { FormProps } from './validator'

export const FormAssociate = () => {
  const navigate = useNavigate()
  const [createAssociate, { isLoading }] = useCreateAssociateMutation()
  const [position, setPosition] = useState(false)
  const [isIndication, setIsIndication] = useState(false)

  const formMethods = useForm<FormProps>({
    resolver: zodResolver(schema),
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = formMethods

  const onSubmit = useCallback((data: FormProps) => {
    createAssociate(data)
      .unwrap()
      .then(() => navigate(Routes.Home))
  }, [])

  const showPicker = (event: any) => {
    event.target.showPicker()
  }

  return (
    <FormProvider {...formMethods}>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Dados Pessoais</S.Title>
        <S.Row>
          <Input
            required
            name="name"
            label="Nome"
            placeholder="Informe seu nome completo"
            register={register}
            errors={errors}
          />
          <Input
            required
            name="birthDate"
            label="Data de Nascimento"
            placeholder="Informe a data do evento"
            register={register}
            errors={errors}
            type="date"
            onFocus={showPicker}
            onClick={showPicker}
          />
        </S.Row>
        <S.Row>
          <Input
            required
            name="rg"
            label="R.G"
            placeholder="Informe o numero do documento"
            register={register}
            errors={errors}
          />
          <Input
            required
            name="cpf"
            label="CPF"
            placeholder="Informe o numero do CPF"
            register={register}
            errors={errors}
          />
          <Input
            required
            name="phone"
            label="Telefone"
            placeholder="Informe o numero de contato"
            register={register}
            errors={errors}
          />
          <Input
            required
            name="email"
            label="Email"
            placeholder="Informe o email de contato"
            register={register}
            errors={errors}
          />
        </S.Row>
        <AddressForm />

        <hr />
        <S.Title>Dados eclesiásticos</S.Title>

        <S.Row>
          <Input
            name="ecclesiastical.church"
            label="Igreja da qual é membro"
            placeholder="Informe o nome completo"
            register={register}
            errors={errors}
          />
          <Input
            name="ecclesiastical.admissionDate"
            label="Data de admissão"
            placeholder="Informe a data que você entrou"
            register={register}
            errors={errors}
            type="date"
            onFocus={showPicker}
            onClick={showPicker}
          />
        </S.Row>
        <S.Row>
          <Checkbox onChange={() => setPosition(!position)}>
            Ocupa cargo ou função na igreja?
          </Checkbox>
          {position && (
            <Input
              name="ecclesiastical.position"
              label="Cite o cargo ou função?"
              placeholder="Informe o nome"
              register={register}
              errors={errors}
            />
          )}
        </S.Row>
        <hr />

        <S.Title>Dados educacionais/ acadêmicos</S.Title>
        <S.Row>
          <span>Formação:</span>

          <input
            id="Ensino Fundamental"
            {...register('education.level')}
            type="radio"
            value="Ensino Fundamental"
          />
          <label htmlFor="Ensino Fundamental">Ensino Fundamental</label>
          <input
            id="Ensino Médio"
            {...register('education.level')}
            type="radio"
            value="Ensino Médio"
          />
          <label htmlFor="Ensino Médio">Ensino Médio</label>
          <input
            id="Ensino Superior"
            {...register('education.level')}
            type="radio"
            value="Ensino Superior"
          />
          <label htmlFor="Ensino Superior">Ensino Superior</label>
          <input
            id="Pós-graduação"
            {...register('education.level')}
            type="radio"
            value="Pós-graduação"
          />
          <label htmlFor="Pós-graduação">Pós-graduação</label>
        </S.Row>
        <S.Row>
          <Checkbox {...register('education.background')}>
            Possui formação em teologia?
          </Checkbox>
        </S.Row>

        {watch('education.background') && (
          <S.Row>
            <input
              id="Básico em teologia"
              {...register('education.background')}
              type="radio"
              value="Básico em teologia"
            />
            <label htmlFor="Básico em teologia">Básico em teologia</label>
            <input
              id="Bacharel em Teologia"
              {...register('education.background')}
              type="radio"
              value="Bacharel em Teologia"
            />
            <label htmlFor="Bacharel em Teologia">Bacharel em Teologia</label>
            <input
              id="Missiologia"
              {...register('education.background')}
              type="radio"
              value="Missiologia"
            />
            <label htmlFor="Missiologia">Missiologia</label>
            <input
              id="Outro"
              {...register('education.background')}
              type="radio"
              value="Outro"
            />
            <label htmlFor="Outro">Outro</label>
          </S.Row>
        )}
        <S.Row>
          <S.Input
            name="education.language"
            label="em domínio de algum idioma (fala e escrita), além do português?  Qual?"
            placeholder="Informe qual"
            register={register}
            errors={errors}
          />
        </S.Row>
        <S.Row>
          <Checkbox onChange={() => setIsIndication(!isIndication)}>
            Teve indicação de outro sócio da AMIF ?
          </Checkbox>
          {isIndication && (
            <Input
              name="indication"
              label="Quem?"
              placeholder="Informe o nome"
              register={register}
              errors={errors}
            />
          )}
        </S.Row>
        <S.WrapperButton>
          <S.Button type="submit">Enviar</S.Button>
        </S.WrapperButton>
      </S.Form>
    </FormProvider>
  )
}
