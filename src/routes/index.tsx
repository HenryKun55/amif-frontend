import { MainLayout } from '@/layouts/MainLayout'
import { Home } from '@/pages/Home'
import {
  BrowserRouter,
  Routes as DOMRoutes,
  Route as DOMRoute,
} from 'react-router-dom'
import { Routes } from './routes'

export const Router = () => {
  return (
    <BrowserRouter>
      <DOMRoutes>
        <DOMRoute path={Routes.Home} element={<MainLayout />}>
          <DOMRoute index element={<Home />} />
        </DOMRoute>
      </DOMRoutes>
    </BrowserRouter>
  )
}
