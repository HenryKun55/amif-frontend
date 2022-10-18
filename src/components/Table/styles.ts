import { css } from '@emotion/react'
import tw, { styled } from 'twin.macro'

export const Table = styled.table([
  tw`w-full border-2 rounded-xl mb-5`,
  css`
    border-collapse: separate;
    border-spacing: 0;
  `,
])
