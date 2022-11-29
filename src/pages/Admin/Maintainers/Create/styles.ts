import tw, { styled } from 'twin.macro'

import { Button } from '@/components/Form/Button'

export const Container = styled.div([
  tw`w-full h-full flex flex-col gap-4 overflow-auto`,
])

export const Form = styled.form([tw`w-full flex flex-col`])

export const SubmitButton = styled(Button)([tw`mr-8 self-end`])

SubmitButton.defaultProps = {
  type: 'submit',
}
