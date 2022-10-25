import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ModalProvider } from 'context/Modal/index.provider'
import { Provider } from 'react-redux'
import store from '@/store'
import { Router } from '@/routes'

export const App = () => {
  const queryClient = new QueryClient()

  return (
    <ModalProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </Provider>
    </ModalProvider>
  )
}
