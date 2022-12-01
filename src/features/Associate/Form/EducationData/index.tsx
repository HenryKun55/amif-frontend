import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { Checkbox } from '@/components/Form/Checkbox'

import * as S from '../styles'

export const EducationData = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()
  const [isFormation, setIsFormation] = useState(false)

  useEffect(() => {
    if (watch('education.background')) {
      setIsFormation(true)
    }
  }, [])

  return (
    <S.Wrapper>
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
        <Checkbox
          checked={isFormation}
          onChange={() => setIsFormation(!isFormation)}
        >
          Possui formação em teologia?
        </Checkbox>
      </S.Row>

      {isFormation && (
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
    </S.Wrapper>
  )
}
