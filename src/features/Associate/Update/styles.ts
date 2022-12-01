import tw, { css, styled } from 'twin.macro'

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

export const Select = styled.select(tw``)
export const Option = styled.option(tw``)

type ColorProps = {
  color: string
}
export const Text = styled.span<ColorProps>(({ color }) => [
  tw`flex gap-1`,
  css`
    color: ${color};
  `,
])

export const WrapperCategory = styled.div(tw` flex flex-col`)

export const ErrorText = styled.span(tw`text-red-500 text-sm `)
