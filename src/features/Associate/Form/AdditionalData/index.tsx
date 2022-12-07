import { useEffect, useState } from 'react'
import { Control, useFormContext } from 'react-hook-form'

import { Associate } from '@/api/models'
import { Checkbox } from '@/components/Form/Checkbox'
import { Input } from '@/components/Form/Input'
import { Radio } from '@/components/Form/Radio'
import { Select } from '@/components/Form/Select'

import * as S from '../styles'

export type AdditionalDataProps = {
  associate?: Associate
  control: Control<any>
  mode: string
}

export const AdditionalData = ({
  associate,
  control,
  mode,
}: AdditionalDataProps) => {
  const [hasIndication, setHasIndication] = useState(false)
  const statusOptions = [
    { value: 'approved', label: 'Aprovado', color: '#36B37E' },
    { value: 'pending', label: 'Pendente', color: '#FF8B00' },
    { value: 'inactive', label: 'Inativo', color: '#FF5630' },
  ]

  const {
    register,
    formState: { errors },
  } = useFormContext()

  useEffect(() => {
    if (associate && associate.indication) {
      setHasIndication(true)
    }
  }, [])

  return (
    <S.Wrapper>
      <S.Row>
        <Checkbox
          checked={hasIndication}
          onChange={() => setHasIndication(!hasIndication)}
        >
          Teve indicação de outro sócio da AMIF ?
        </Checkbox>
        {hasIndication && (
          <Input
            name="indication"
            label="Quem?"
            placeholder="Informe o nome"
            register={register}
            errors={errors}
          />
        )}
      </S.Row>
      {mode === 'admin' && (
        <div>
          <S.WrapperCategory>
            <S.Row>
              <S.Label htmlFor="howKnow">Categoria de associado:*</S.Label>
              <Radio
                name="category"
                register={register}
                value="founded_partners"
              >
                Sócio fundador
              </Radio>
              <Radio
                name="category"
                register={register}
                value="contributing_partner"
              >
                Sócio contribuinte
              </Radio>
            </S.Row>
            {errors.category?.message && (
              <S.ErrorText>{errors.category?.message + '*'}</S.ErrorText>
            )}
          </S.WrapperCategory>
          <S.Row>
            <span>Status:</span>
            <Select options={statusOptions} control={control} name="status" />
          </S.Row>
        </div>
      )}
    </S.Wrapper>
  )
}
