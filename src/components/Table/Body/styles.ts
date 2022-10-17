import tw, { css, styled } from 'twin.macro'

export const Row = styled.tr([
  tw` hover:(bg-blue-100 text-blue-500)`,
  css`
    :last-of-type {
      td {
        border: none;
      }
    }
  `,
])

export const Cell = styled.td([tw`p-2 border-b-2`])
