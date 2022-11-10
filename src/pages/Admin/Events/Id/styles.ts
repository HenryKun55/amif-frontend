import tw, { styled } from 'twin.macro'

export const Container = styled.div([
  tw`w-full h-full flex flex-col gap-4 overflow-auto`,
])

export const MainEventWrapper = styled.div([tw`w-full py-2 px-8`])

export const MainEventText = styled.div([
  tw`w-full flex items-center gap-2 py-2 px-4 bg-gray-200 rounded text-gray-500`,
])
