import tw, { styled } from 'twin.macro'
import { ButtonProps } from '.'

export const Button = styled.button<ButtonProps>(
  ({ variant, fullWidth, size = 'md' }) => [
    tw`bg-blue-500 rounded-lg font-extrabold text-white cursor-pointer`,
    tw`hover:bg-blue-400 transition-all ease-in-out duration-200`,
    tw`disabled:(bg-blue-300 cursor-not-allowed)`,
    fullWidth && tw`w-full`,
    variant === 'outlined' && [
      tw`border border-blue-500 bg-white text-blue-500`,
      tw`hover:(border-blue-400 bg-white text-blue-400)`,
      tw`disabled:(bg-white border-blue-300 text-blue-300)`,
    ],
    size === 'sm' && tw`px-4 py-1`,
    size === 'md' && tw`px-6 py-2`,
    size === 'lg' && tw`px-8 py-3`,
  ],
)
