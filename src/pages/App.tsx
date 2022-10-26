import { ModalProvider } from 'context/Modal/index.provider'
import { Provider } from 'react-redux'
import store from '@/store'
import { Router } from '@/routes'
import { GlobalStyles } from '@/styles/global'

export const App = () => {
  return (
    <ModalProvider>
      <Provider store={store}>
        <GlobalStyles />
        <Router />
      </Provider>
    </ModalProvider>
  )
}
