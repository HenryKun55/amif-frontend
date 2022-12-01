import tw, { styled } from 'twin.macro'

import { Button as ButtonComponent } from '@/components/Form/Button'
import { Input as InputComponent } from '@/components/Form/Input'

export const Form = styled.form([
  tw`flex flex-col w-full h-full max-w-content gap-8`,
])
export const Wrapper = styled.div([tw`flex flex-col w-full gap-4`])

export const Row = styled.div([
  tw`w-full flex flex-col md:flex-row items-center gap-4`,
])

export const Title = styled.h3(
  tw`font-bold text-3xl text-brown-500 underline my-2.5`,
)

export const Input = styled(InputComponent)(tw`max-w-2xl`)

export const Button = styled(ButtonComponent)(tw`w-full
  md:w-4/12
`)

export const WrapperButton = styled.div(tw`w-full flex justify-center`)
