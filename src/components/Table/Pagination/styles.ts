import tw, { styled } from 'twin.macro'

interface ButtonProps {
  active: boolean
}

interface ControlsProps {
  active: boolean
}

export const Container = styled.div([
  tw`w-full flex items-center justify-between px-8`,
])

export const ShowingText = styled.span([tw`text-blue-600 text-sm`])

export const List = styled.ul([tw`flex items-center gap-1 list-none`])

export const Button = styled.button<ButtonProps>(({ active }) => [
  tw`text-gray-600 rounded-md w-8 h-8 font-medium text-xs`,
  active && tw`bg-white border border-blue-500 text-blue-600`,
])

export const Elipsis = styled.button([
  tw`w-8 h-8 border border-blue-200 font-bold rounded-md`,
  tw`text-gray-600 text-center`,
])

export const Controls = styled.button<ControlsProps>(({ active }) => [
  tw`flex items-center cursor-pointer text-blue-600`,
  active && tw`text-blue-600`,
])

export const ControlsText = styled.span([tw`font-medium text-xs mx-1.5`])
