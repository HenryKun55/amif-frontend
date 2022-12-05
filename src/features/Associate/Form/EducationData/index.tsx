import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { Checkbox } from '@/components/Form/Checkbox'
import { Radio } from '@/components/Form/Radio'

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
        <S.Label htmlFor="howKnow">Formação: </S.Label>

        <Radio
          name="education.level"
          register={register}
          value="Ensino Fundamental"
        >
          Ensino Fundamental
        </Radio>
        <Radio name="education.level" register={register} value="Ensino Médio">
          Ensino Médio
        </Radio>
        <Radio
          name="education.level"
          register={register}
          value="Ensino Superior"
        >
          Ensino Superior
        </Radio>
        <Radio name="education.level" register={register} value="Pós-graduação">
          Pós-graduação
        </Radio>
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
          <Radio
            name="education.background"
            register={register}
            value="Básico em teologia"
          >
            Básico em teologia
          </Radio>
          <Radio
            name="education.background"
            register={register}
            value="Bacharel em Teologia"
          >
            Bacharel em Teologia
          </Radio>
          <Radio
            name="education.background"
            register={register}
            value="Missiologia"
          >
            Missiologia
          </Radio>
          <Radio name="education.background" register={register} value="Outro">
            Outro
          </Radio>
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
