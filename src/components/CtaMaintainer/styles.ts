import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div([
  tw` flex gap-5 flex-wrap items-center justify-center p-12 mx-10 rounded-3xl bg-gradient-to-r from-blue-250 to-blue-400 cursor-pointer`,
])

export const Container = styled.div([
  tw`flex flex-col gap-4 max-w-3xl items-center lg:(items-start)`,
])

export const Title = styled.h1([
  tw`text-4xl text-white font-bold text-center md:text-6xl`,
])

export const Description = styled.h1([
  tw`text-lg text-center text-white md:(text-2xl text-left) `,
])

export const Content = styled.div([tw`mx-auto lg:(mr-0 ml-auto)`])
