import tw, { styled } from 'twin.macro'

export const MenuTab = styled.div(tw`flex w-full  bg-blue-450`)

export const Tabs = styled.ul(tw`flex w-full justify-center`)

type ItemProps = {
  active: boolean
}

export const Item = styled.li<ItemProps>(({ active }) => [
  tw`flex  flex-col items-center justify-center  text-white leading-[20px] border-white flex-1`,
  tw`text-sm gap-1.5 py-2 opacity-50 border-b-4 border-blue-450`,
  tw`cursor-pointer transition-all ease-in-out duration-300`,
  active && tw`border-white opacity-100`,
])

export const Logo = styled.img(tw`w-8 `)

export const Content = styled.div(tw`w-full h-full bg-gray-100`)
