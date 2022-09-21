import React from 'react'
import { GlobalStyles } from '../src/styles/globals'
import { withRouter } from 'storybook-addon-react-router-v6'

export const decorators = [
  withRouter,
  Story => {
    injectStyle()
    return (
      <div>
        <Story />
        <GlobalStyles />
      </div>
    )
  },
]

// export const parameters = {
//   actions: { argTypesRegex: '^on.*' },
// }
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
