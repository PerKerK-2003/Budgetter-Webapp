import AccountVerified from '@/components/auth/AccountVerified';
import ForgotPasswordSection from '@/components/auth/ForgotPasswordSection';
import LoginSection from '@/components/auth/LoginSection';
import ResetPassword from '@/components/auth/ResetPassword';
import SignupSection from '@/components/auth/SignupSection';
import AuthLayout from '@/pages/auth/AuthLayout';
import DashboardLayout from '@/pages/dashboard/DashboardLayout';
import HomeLayout from '@/pages/Home/HomeLayout';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Redirect from "/" to "/login" */}
      <Route path="/" element={<Navigate to="/login" />} />

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginSection />} />
        <Route path="/signup" element={<SignupSection />} />
        <Route path="/forgot-password" element={<ForgotPasswordSection />} />
        <Route path="/account-verified" element={<AccountVerified />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>

      <Route path="/home" element={<HomeLayout />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
    </>
  )
);

export default routes;
