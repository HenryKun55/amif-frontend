import { ptBR } from 'date-fns/locale'
import SetDefaultOptions from 'date-fns/setDefaultOptions'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import { ModalProvider } from '@/context/Modal/modal.provider'
import { Router } from '@/routes'
import store from '@/store'
import { GlobalStyles } from '@/styles/global'

export const App = () => {
  SetDefaultOptions({ locale: ptBR })

  return (
    <ModalProvider>
      <Provider store={store}>
        <GlobalStyles />
        <Router />
        <ToastContainer />
      </Provider>
    </ModalProvider>
  )
}
