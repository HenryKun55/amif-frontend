import tw, { styled } from 'twin.macro'

export const Container = styled.div([tw``])

export const Wrapper = styled.div([tw`flex items-center gap-4`])

export const Label = styled.label([tw`font-medium cursor-pointer`])

type CheckboxProps = {
  error?: boolean
}

export const Checkbox = styled.input<CheckboxProps>([tw``])

export const ErrorMessage = styled.span([tw`text-xs font-medium text-red-500`])
