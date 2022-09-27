import { AdminLayout } from '@/layouts/AdminLayout'
import { MainLayout } from '@/layouts/MainLayout'
import { AdminHome } from '@/pages/Admin/Home'
import { SignIn } from '@/pages/Admin/SignIn'
import { Home } from '@/pages/Home'
import {
  BrowserRouter,
  Routes as DOMRoutes,
  Route as DOMRoute,
} from 'react-router-dom'
import { AdminRoutes } from './admin-routes'
import { Routes } from './routes'

export const Router = () => {
  return (
    <BrowserRouter>
      <DOMRoutes>
        <DOMRoute path={Routes.Home} element={<MainLayout />}>
          <DOMRoute index element={<Home />} />
        </DOMRoute>
        <DOMRoute path={AdminRoutes.Admin_SignIn} element={<SignIn />} />
        <DOMRoute path={AdminRoutes.Admin_Home} element={<AdminLayout />}>
          <DOMRoute index element={<AdminHome />} />
        </DOMRoute>
      </DOMRoutes>
    </BrowserRouter>
  )
}
