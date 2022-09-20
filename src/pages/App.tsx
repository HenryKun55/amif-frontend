import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { GlobalStyles } from '../styles/global'
import store from '@/store'
import { Router } from '@/routes'

export const App = () => {
  const queryClient = new QueryClient()

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <Router />
      </QueryClientProvider>
    </Provider>
  )
}
