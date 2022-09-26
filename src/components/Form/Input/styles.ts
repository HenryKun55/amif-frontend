import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div([tw`gap-2 flex flex-col`])

export const Label = styled.label([tw`leading-5 bg-gray-400 text-sm`])

export const Input = styled.input([
  tw`p-3 text-xs border border-gray-500 rounded-lg placeholder:text-gray-400`,
])
