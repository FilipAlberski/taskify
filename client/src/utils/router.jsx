import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import SharedLayout from '../pages/SharedLayout.jsx';

import LoginPage from '../pages/LoginPage.jsx';
import RegisterPage from '../pages/RegisterPage.jsx';

import WelcomePage from '../pages/WelcomePage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<WelcomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="dashboard" element={<SharedLayout />}>
        {/* <Route index element={<DashboardPage />} />  and others*/}
      </Route>
      <Route path="*" element={<NotFoundPage />} />

      {/*https://www.youtube.com/watch?v=K-bxVELldCc*/}
    </>
  )
);

export default router;
