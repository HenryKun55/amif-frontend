import { Input as InputComponent } from '@/components/Form/Input'
import tw, { styled } from 'twin.macro'

export const Container = styled.div([
  tw`w-full flex flex-col gap-4 h-full p-5 overflow-auto`,
])

export const Input = styled(InputComponent)([tw`w-1/3 max-w-md self-end`])
