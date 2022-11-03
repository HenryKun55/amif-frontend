import { ModalProvider } from 'context/Modal/index.provider'
import { Provider } from 'react-redux'
import store from '@/store'
import { Router } from '@/routes'
import { GlobalStyles } from '@/styles/global'
import SetDefaultOptions from 'date-fns/setDefaultOptions'
import { ptBR } from 'date-fns/locale'

export const App = () => {
  SetDefaultOptions({ locale: ptBR })

  return (
    <ModalProvider>
      <Provider store={store}>
        <GlobalStyles />
        <Router />
      </Provider>
    </ModalProvider>
  )
}
