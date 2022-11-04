import tw, { styled } from 'twin.macro'

export const Container = styled.div([
  tw`w-full h-[500px] flex bg-white`,
  tw`rounded shadow-xl border border-gray-100`,
])

export const Image = styled.img([
  tw`flex-1 w-full lg:max-w-[calc(100% - 400px)] object-cover`,
  tw`rounded`,
])

export const Content = styled.div([
  tw`w-[400px] min-w-[400px] p-4 pb-10 hidden`,
  tw`lg:(flex flex-col justify-between)`,
])

export const Info = styled.div([tw``])

export const Date = styled.span([
  tw`inline-block pt-20 text-blue-400 font-bold uppercase`,
])

export const Title = styled.h1([tw`text-3xl font-bold pt-6 line-clamp-3`])

export const Location = styled.span([
  tw`inline-block text-sm pt-4 text-gray-500 line-clamp-1`,
])
