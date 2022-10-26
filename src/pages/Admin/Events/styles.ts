import { Input as InputComponent } from '@/components/Form/Input'
import tw, { styled } from 'twin.macro'

export const Container = styled.div([
  tw`w-full h-full flex flex-col gap-4 overflow-auto`,
])

export const Content = styled.div([tw`w-full flex flex-col gap-4 p-5`])

export const Input = styled(InputComponent)([tw`w-1/3 max-w-md self-end`])
