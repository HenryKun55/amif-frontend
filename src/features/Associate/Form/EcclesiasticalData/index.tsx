import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { Checkbox } from '@/components/Form/Checkbox'
import { Input } from '@/components/Form/Input'

import * as S from '../styles'

type EcclesiasticalDataProps = {
  isPosition?: boolean
}

export const EcclesiasticalData = ({ isPosition }: EcclesiasticalDataProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  useEffect(() => {
    if (isPosition) {
      setPosition(true)
    }
  }, [])

  const [position, setPosition] = useState(false)

  const showPicker = (event: any) => {
    event.target.showPicker()
  }
  return (
    <S.Wrapper>
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
        <Checkbox checked={position} onChange={() => setPosition(!position)}>
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
    </S.Wrapper>
  )
}
