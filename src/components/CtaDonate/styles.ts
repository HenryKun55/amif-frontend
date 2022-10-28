import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div([
  tw`flex place-items-center w-full max-w-content p-12 rounded-3xl bg-gradient-to-r from-beige-100 to-beige-200 mx-auto cursor-pointer`,
])

export const Container = styled.div([tw`flex flex-col gap-4 max-w-3xl`])

export const Title = styled.h1([tw`text-6xl text-blue-500 font-bold`])

export const Description = styled.h1([tw`text-xl text-blue-500`])

export const Content = styled.div([tw`ml-auto`])
