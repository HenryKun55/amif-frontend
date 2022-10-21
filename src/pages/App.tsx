import { Provider } from 'react-redux'
import { GlobalStyles } from '../styles/global'
import store from '@/store'
import { Router } from '@/routes'

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Router />
    </Provider>
  )
}
