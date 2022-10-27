import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div([tw`flex flex-col`])

export const Label = styled.label([tw`text-sm capitalize font-semibold pb-2`])

type InputWrapperProps = {
  error: boolean
  shape?: 'square' | 'pill'
  focus: boolean
}

export const InputWrapper = styled.div<InputWrapperProps>(
  ({ error, focus, shape = 'square' }) => [
    tw`w-full flex gap-1 items-center border border-gray-300 rounded`,
    tw`bg-white px-2`,
    tw`transition-all ease-in-out duration-200`,
    focus && tw`border-blue-500 ring-2`,
    error && tw`border-red-500 focus:(border-red-500 ring-red-200)`,
    shape === 'pill' && tw`rounded-full`,
  ],
)

type InputProps = {
  height: 'sm' | 'md'
}

export const Input = styled.input<InputProps>(({ height }) => [
  tw`w-full appearance-none outline-none`,
  tw`py-3 text-xs`,
  tw`placeholder:(text-gray-400 text-sm)`,
  tw`transition-all ease-in-out duration-200`,
  height === 'sm' && tw`py-1.5`,
])

export const LeftIcon = styled.div([tw``])

export const Error = styled.span([tw`text-red-500 text-xs pt-0.5`])
