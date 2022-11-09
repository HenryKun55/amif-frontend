import tw, { styled } from 'twin.macro'

export const Container = styled.div([tw`flex items-center flex-wrap gap-2`])

export const Input = styled.input([tw`hidden`])

type ButtonProps = {
  highlight: boolean
}

export const Button = styled.button<ButtonProps>(({ highlight }) => [
  tw`w-44 h-24 flex flex-col items-center justify-center`,
  tw`rounded-xl bg-blue-50 text-blue-500`,
  tw`border-dashed border-2 border-blue-500`,
  tw`hover:opacity-75`,
  highlight && tw`border-green-500 text-green-500 bg-green-100`,
])

export const Text = styled.span([tw``])

export const ImageWrapper = styled.div([
  tw`relative w-44 h-24 bg-black overflow-hidden`,
  tw`border border-black rounded-xl`,
])

export const RemoveButton = styled.button([
  tw`absolute top-0 left-0 w-full h-full bg-black`,
  tw`flex items-center justify-center`,
  tw`text-gray-500 opacity-75`,
])

export const Image = styled.img([tw`object-contain`])
