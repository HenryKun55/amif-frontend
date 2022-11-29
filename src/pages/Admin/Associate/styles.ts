import tw, { css, styled } from 'twin.macro'

import { Input as InputComponent } from '@/components/Form/Input'

export const Container = styled.div([
  tw`w-full h-full flex flex-col gap-4 overflow-auto`,
])

export const Content = styled.div([tw`w-full flex flex-col gap-4 p-5`])

export const Input = styled(InputComponent)([tw`w-1/3 max-w-md self-end`])

type ColorProps = {
  color: string
}
export const Text = styled.span<ColorProps>(({ color }) => [
  tw`flex gap-1`,
  css`
    color: ${color};
  `,
])
