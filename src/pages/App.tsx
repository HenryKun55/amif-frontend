import { ModalProvider } from 'context/Modal/index.provider'
import { ptBR } from 'date-fns/locale'
import SetDefaultOptions from 'date-fns/setDefaultOptions'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { Router } from '@/routes'
import store from '@/store'
import { GlobalStyles } from '@/styles/global'

export const App = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

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
