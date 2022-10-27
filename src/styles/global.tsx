import { Fragment } from 'react'
import { Global } from '@emotion/react'
import tw, { css, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css([
  css`
    html,
    body,
    #root {
      width: 100vw;
      height: 100vh;
      font-family: 'Sora', sans-serif;
    }
  `,
  {
    body: {
      WebkitTapHighlightColor: 'transparent',
      ...tw`antialiased`,
    },
  },
])

export const GlobalStyles = () => (
  <Fragment>
    <BaseStyles />
    <Global styles={customStyles} />
  </Fragment>
)
