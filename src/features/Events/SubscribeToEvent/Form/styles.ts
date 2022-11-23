import tw, { styled } from 'twin.macro'

export const Form = styled.form([
  tw`w-full h-full flex flex-col px-8 pb-8 gap-4 overflow-y-auto`,
])

export const Row = styled.div([
  tw`w-full flex flex-col lg:flex-row items-center gap-4`,
])

export const Title = styled.h1([tw`text-3xl font-bold py-6 text-center`])

export const Fieldset = styled.fieldset([tw`pb-2`])

export const Label = styled.label([tw`font-medium cursor-pointer`])
