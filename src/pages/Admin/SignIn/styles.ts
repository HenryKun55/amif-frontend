import tw, { styled } from 'twin.macro'

export const Container = styled.div([tw`w-full h-full flex`])

export const FormContainer = styled.div([
  tw`flex flex-1 items-center justify-center px-8`,
])

export const Box = styled.div([
  tw`hidden md:flex flex-1 items-center justify-center bg-gray-200`,
])

export const Title = styled.h1([tw`text-5xl font-semibold`])

export const LogoFake = styled.div([tw`w-64 h-44 bg-red-200`])
