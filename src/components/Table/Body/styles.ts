import tw, { css, styled } from 'twin.macro'

export const Row = styled.tr([
  tw`hover:(bg-blue-100 text-blue-500)`,
  css`
    :last-of-type {
      td {
        border: none;
      }
    }
  `,
])

export const Cell = styled.td([tw`p-2 border-b-2`])

type TextProps = {
  responsive?: boolean
  maxWidth?: string
}

export const Text = styled.span<TextProps>(({ responsive, maxWidth }) => [
  maxWidth &&
    css`
      width: ${maxWidth};
      max-width: ${maxWidth};
    `,
  responsive &&
    css`
      position: relative;
      max-width: 100%;
      height: 100%;
      padding: 0 !important;
      display: flex;
      vertical-align: middle !important;

      > span {
        position: absolute;
        white-space: nowrap;
        overflow-y: visible;
        overflow-x: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        min-width: 0;
        width: 100%;
        top: 0;
        left: 0;
      }

      &:after,
      span:after {
        content: '-';
        display: inline;
        visibility: hidden;
        width: 0;
      }
    `,
])
