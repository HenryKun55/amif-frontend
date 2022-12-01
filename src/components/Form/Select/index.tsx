import { StyledComponent } from '@emotion/styled'
import chroma from 'chroma-js'
import { Control, FieldValues, Path, useController } from 'react-hook-form'
import SelectComponent, { StylesConfig } from 'react-select'

export interface ColourOption {
  readonly value: string
  readonly label: string
  readonly color: string
  readonly isFixed?: boolean
  readonly isDisabled?: boolean
}

const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
})

const colourStyles: StylesConfig<ColourOption> = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color)
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    }
  },
  input: styles => ({ ...styles, ...dot() }),
  placeholder: styles => ({ ...styles, ...dot('#ccc') }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
}

export type SelectProps<TFormValues extends FieldValues> = {
  options: ColourOption[]
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
      styles={colourStyles}
      value={field.value}
      onChange={field.onChange}
    />
  )
}
