import {
  BrowserRouter,
  Route as DOMRoute,
  Routes as DOMRoutes,
} from 'react-router-dom'

import { AdminLayout } from '@/layouts/AdminLayout'
import { MainLayout } from '@/layouts/MainLayout'
import { AdminAssociates } from '@/pages/Admin/Associate'
import { AdminAssociatesId } from '@/pages/Admin/Associate/Id'
import { AdminEvents } from '@/pages/Admin/Events'
import { AdminEventsCreate } from '@/pages/Admin/Events/Create'
import { AdminEventsId } from '@/pages/Admin/Events/Id'
import { AdminHome } from '@/pages/Admin/Home'
import { AdminMaintainers } from '@/pages/Admin/Maintainers'
import { AdminMaintainersCreate } from '@/pages/Admin/Maintainers/Create'
import { AdminMaintainersId } from '@/pages/Admin/Maintainers/Id'
import { AdminMissions } from '@/pages/Admin/Missions'
import { AdminMissionsCreate } from '@/pages/Admin/Missions/Create'
import { AdminMissionsId } from '@/pages/Admin/Missions/Id'
import { SignIn } from '@/pages/Admin/SignIn'
import { Associate } from '@/pages/Associate'
import { Donate } from '@/pages/Donate'
import { Events } from '@/pages/Events'
import { EventsId } from '@/pages/Events/Id'
import { Home } from '@/pages/Home'
import { Missions } from '@/pages/Missions'
import { MissionsId } from '@/pages/Missions/Id'
import { NotFound } from '@/pages/NotFound'
import { Playground } from '@/pages/Playground'

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
          <DOMRoute path={Routes.Doe} element={<Donate />} />
          <DOMRoute path={Routes.Eventos} element={<Events />} />
          <DOMRoute path={Routes.Eventos_Id} element={<EventsId />} />
          <DOMRoute path={Routes.Associados} element={<Associate />} />
          <DOMRoute path={Routes.Missoes} element={<Missions />} />
          <DOMRoute path={Routes.Missoes_Id} element={<MissionsId />} />
        </DOMRoute>

        <DOMRoute path={AdminRoutes.Admin_SignIn} element={<SignIn />} />
        <DOMRoute path={AdminRoutes.Admin_Home} element={<AdminLayout />}>
          <DOMRoute path="*" element={<NotFound />} />
          <DOMRoute index element={<AdminHome />} />
          <DOMRoute
            path={AdminRoutes.Admin_Eventos}
            element={<AdminEvents />}
          />
          <DOMRoute
            path={AdminRoutes.Admin_Eventos_Criar}
            element={<AdminEventsCreate />}
          />
          <DOMRoute
            path={AdminRoutes.Admin_Eventos_Id}
            element={<AdminEventsId />}
          />
          <DOMRoute
            path={AdminRoutes.Admin_Missoes}
            element={<AdminMissions />}
          />
          <DOMRoute
            path={AdminRoutes.Admin_Missoes_Criar}
            element={<AdminMissionsCreate />}
          />
          <DOMRoute
            path={AdminRoutes.Admin_Missoes_Id}
            element={<AdminMissionsId />}
          />
          <DOMRoute
            path={AdminRoutes.Admin_Mantenedores}
            element={<AdminMaintainers />}
          />
          <DOMRoute
            path={AdminRoutes.Admin_Mantenedores_Criar}
            element={<AdminMaintainersCreate />}
          />
          <DOMRoute
            path={AdminRoutes.Admin_Mantenedores_Id}
            element={<AdminMaintainersId />}
          />
          <DOMRoute
            path={AdminRoutes.Admin_Associados}
            element={<AdminAssociates />}
          />
          <DOMRoute
            path={AdminRoutes.Admin_Associados_Id}
            element={<AdminAssociatesId />}
          />
        </DOMRoute>
      </DOMRoutes>
    </BrowserRouter>
  )
}
