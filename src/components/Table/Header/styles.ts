import tw, { styled } from 'twin.macro'

export const Row = styled.tr([tw``])

export const Header = styled.td([
  tw`bg-gray-100 p-2 border-b-2`,
  tw`first-of-type:rounded-tl-xl last-of-type:rounded-tr-xl`,
])

export const HeaderButton = styled.button([tw`flex items-center gap-2`])
