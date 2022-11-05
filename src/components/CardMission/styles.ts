import tw, { css,styled } from 'twin.macro'

export const Container = styled.div([
  tw`flex flex-col w-[300px] h-[270px] rounded-3xl shadow-xl`,
  tw`hover:w-[320px] hover:h-[290px] hover:cursor-pointer transition-all ease-in-out duration-200`,
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

export const Location = styled.div([
  tw`flex flex-col justify-center items-center w-full h-5 bg-white rounded-xl leading-3 shadow-md`,
])

export const Left = styled.div([tw`flex h-full  items-start`])

export const Content = styled.div([tw`flex flex-col p-2.5`])

export const Title = styled.h2([tw`font-bold text-blue-500 text-[1.1rem]`])

export const Span = styled.span([
  tw`flex gap-1.5 items-center font-semibold text-gray-500 text-base p-3`,
])

export const Section = styled.div([tw`flex justify-between pr-2.5`])
