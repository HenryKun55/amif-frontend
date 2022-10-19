import tw, { styled, css } from 'twin.macro'

export const Container = styled.div([
  tw`m-3.5`,
  tw`flex flex-col w-[300px] h-[250px] rounded-3xl shadow-xl`,
  tw`hover:w-[320px] hover:h-[270px] hover:cursor-pointer transition-all ease-in-out duration-200`,
])

type BannerProps = {
  background: string
}
export const Banner = styled.div<BannerProps>(({ background }) => [
  tw`flex w-full h-2/3 rounded-t-3xl`,
  css`
    background: url(${background});
    background-size: cover;
  `,
])

export const Date = styled.div([
  tw`flex flex-col justify-center items-center w-11 h-11 bg-white rounded-xl leading-3 shadow-md`,
])

export const Left = styled.div([tw`flex h-full w-4/12 items-end p-2`])
export const Right = styled.div([tw`flex h-full w-8/12 justify-end p-2`])
export const Day = styled.span([
  tw`font-extrabold text-blue-500 text-xl leading-4 `,
])
export const Month = styled.div([tw`text-blue-400 font-semibold `])

export const Subscribe = styled.div([tw``])

export const Content = styled.div([tw`flex flex-col p-2.5`])

export const Title = styled.h2([tw`font-bold text-blue-500 text-[1.1rem]`])
export const Span = styled.span([
  tw`flex gap-1.5 items-center font-semibold text-gray-500 text-base`,
])

export const Section = styled.div([tw`flex justify-between pr-2.5`])
