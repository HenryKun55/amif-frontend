import tw, { styled } from 'twin.macro'

import { Button } from '@/components/Form/Button'

export const Form = styled.form([tw`w-full flex flex-col px-8 pb-8 gap-4`])

export const Row = styled.div([
  tw`w-full flex flex-col lg:flex-row items-center gap-4`,
])

export const Actions = styled.div([tw`w-full flex justify-between`])

export const LeftActions = styled.div([tw`flex gap-4`])

export const SubmitButton = styled(Button)([tw`ml-auto w-max`])
