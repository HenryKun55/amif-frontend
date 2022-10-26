import tw, { css, styled } from 'twin.macro'

export const Row = styled.tr([tw``])

type HeaderProps = {
  maxWidth?: number
}

export const Header = styled.td<HeaderProps>(({ maxWidth }) => [
  tw`bg-gray-100 p-2 border-b-2 whitespace-nowrap`,
  tw`first-of-type:rounded-tl-xl last-of-type:rounded-tr-xl`,
  maxWidth &&
    css`
      width: ${maxWidth};
      max-width: ${maxWidth};
    `,
])

export const HeaderButton = styled.button([tw`flex items-center gap-2`])
