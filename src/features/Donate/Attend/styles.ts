import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div([
  tw`flex items-center justify-center gap-20 py-14 bg-world bg-blue-100 bg-center`,
])

export const Container = styled.div([
  tw`flex flex-1 max-w-content justify-evenly gap-10 m-auto`,
])

export const Content = styled.div([tw`flex flex-col place-items-center`])

export const Title = styled.span([
  tw`text-blue-500 font-bold text-4xl text-center`,
])

export const Description = styled.span([tw`font-bold text-4xl text-center`])
