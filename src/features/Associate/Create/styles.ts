import tw, { styled } from 'twin.macro'

import { Button as ButtonComponent } from '@/components/Form/Button'

export const Form = styled.form([
  tw`flex flex-col w-full h-full max-w-content gap-8`,
])

export const Row = styled.div([
  tw`w-full flex flex-col md:flex-row items-center gap-4`,
])

export const Button = styled(ButtonComponent)(tw`w-full
  md:w-4/12
`)

export const WrapperButton = styled.div(tw`w-full flex justify-center`)
