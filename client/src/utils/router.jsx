import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import SharedLayout from '../pages/SharedLayout/SharedLayout.jsx';

import LoginPage from '../pages/LoginPage.jsx';
import RegisterPage from '../pages/RegisterPage.jsx';
import ForgotPassword from '../pages/ForgotPassword.jsx';
import WelcomePage from '../pages/WelcomePage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import PasswordReset from '../pages/PasswordReset.jsx';

import ProtectedRoute from './ProtectedRoute.jsx';

import Test from '../pages/Test.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route index element={<WelcomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="test" element={<Test />} />
        <Route path="password-reset" element={<ForgotPassword />} />
        <Route
          path="password-reset/:userId/:token"
          element={<PasswordReset />}
        />

        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<SharedLayout />}>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="test" element={<Test />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </>
  )
);

export default router;
