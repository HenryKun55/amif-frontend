import tw, { styled } from 'twin.macro'

interface CheckboxProps {
  error?: boolean
}

export const Container = styled.div([tw``])

export const Wrapper = styled.div([tw`flex gap-4`])

export const Label = styled.label([tw`text-xs font-medium -mt-1`])

export const Checkbox = styled.input<CheckboxProps>(({ error }) => [
  // tw`transition-all appearance-none outline-0`,
  // tw`border-2 border-functional-neutral-50 rounded`,
  // tw`w-3.5 h-3.5 shrink-0 cursor-pointer`,
  // tw`focus:ring-1 focus:border-support-primary-30 focus:ring-support-primary-30`,
  // tw`checked:bg-feedback-success-pure checked:border-feedback-success-pure checked:focus:ring-2`,
  // tw`checked:bg-checked bg-no-repeat bg-center bg-cover`,
  // tw`indeterminate:bg-indeterminate indeterminate:bg-contain`,
  // error && [tw`border-feedback-danger-30 ring-feedback-danger-30 ring-1`],
])

export const ErrorMessage = styled.span([tw`text-xs font-medium text-red-500`])
