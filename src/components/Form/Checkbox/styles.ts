import tw, { styled } from 'twin.macro'

interface CheckboxProps {
  error?: boolean
}

export const Container = styled.div([tw``])

export const Wrapper = styled.div([tw`flex gap-4`])

export const Label = styled.label([tw`text-xs font-medium -mt-1`])

export const Checkbox = styled.input<CheckboxProps>([tw``])

export const ErrorMessage = styled.span([tw`text-xs font-medium text-red-500`])
