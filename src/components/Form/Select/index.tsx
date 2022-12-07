import { StyledComponent } from '@emotion/styled'
import { Control, FieldValues, Path, useController } from 'react-hook-form'
import SelectComponent from 'react-select'

import { colorStyles as colorStyles } from './styles'

export interface ColorOption {
  readonly value: string
  readonly label: string
  readonly color: string
  readonly isFixed?: boolean
  readonly isDisabled?: boolean
}

export type SelectProps<TFormValues extends FieldValues> = {
  options: ColorOption[]
  name: Path<TFormValues>
  control: Control<TFormValues>
}

export type SelectFieldAs<TFormValues extends FieldValues> = StyledComponent<
  SelectProps<TFormValues>
>

export const Select = <TFormValues extends FieldValues>({
  options,
  control,
  name,
  ...props
}: SelectProps<TFormValues>) => {
  const { field } = useController({ name, control })
  return (
    <SelectComponent
      {...props}
      options={options}
      styles={colorStyles}
      value={field.value}
      onChange={field.onChange}
    />
  )
}
