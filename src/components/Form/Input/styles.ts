import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div([tw`flex flex-col`])

export const Label = styled.label([tw`text-sm capitalize font-semibold pb-2`])

type InputProps = {
  error: boolean
}

export const Input = styled.input<InputProps>(({ error }) => [
  tw`appearance-none outline-none`,
  tw`p-3 text-xs border border-gray-300 rounded`,
  tw`placeholder:(text-gray-400 text-sm)`,
  tw`transition-all ease-in-out duration-200`,
  tw`focus:(border-blue-500 ring-2)`,
  error && tw`border-red-500 focus:(border-red-500 ring-red-200)`,
])

export const Error = styled.span([tw`text-red-500 text-xs pt-0.5`])
