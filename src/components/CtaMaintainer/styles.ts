import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div([
  tw`flex place-items-center w-full max-w-content p-12 rounded-3xl bg-gradient-to-r from-blue-250 to-blue-400 mx-auto cursor-pointer`,
])

export const Container = styled.div([tw`flex flex-col gap-4 max-w-3xl`])

export const Title = styled.h1([tw`text-6xl text-white font-bold`])

export const Description = styled.h1([tw`text-xl text-white`])

export const Content = styled.div([tw`ml-auto`])
