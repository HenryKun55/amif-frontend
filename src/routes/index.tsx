import { AdminLayout } from '@/layouts/AdminLayout'
import { MainLayout } from '@/layouts/MainLayout'
import { AdminEvents } from '@/pages/Admin/Events'
import { AdminHome } from '@/pages/Admin/Home'
import { SignIn } from '@/pages/Admin/SignIn'
import { Events } from '@/pages/Events'
import { EventsId } from '@/pages/Events/Id'
import { Home } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'
import { Playground } from '@/pages/Playground'
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
        <DOMRoute path="/playground" element={<Playground />} />
        <DOMRoute path={Routes.Home} element={<MainLayout />}>
          <DOMRoute path="*" element={<NotFound />} />
          <DOMRoute index element={<Home />} />
          <DOMRoute path={Routes.Eventos} element={<Events />} />
          <DOMRoute path={Routes.Eventos_Id} element={<EventsId />} />
        </DOMRoute>

        <DOMRoute path={AdminRoutes.Admin_SignIn} element={<SignIn />} />
        <DOMRoute path={AdminRoutes.Admin_Home} element={<AdminLayout />}>
          <DOMRoute path="*" element={<NotFound />} />
          <DOMRoute index element={<AdminHome />} />
          <DOMRoute
            path={AdminRoutes.Admin_Eventos}
            element={<AdminEvents />}
          />
        </DOMRoute>
      </DOMRoutes>
    </BrowserRouter>
  )
}
