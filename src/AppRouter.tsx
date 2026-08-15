import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/Login/SignupPage";
import ForgotPasswordPage from "./pages/Login/ForgetPassword";
import ChangePasswordPage from "./pages/Login/PasswodChange";
import OtpPage from "./pages/Login/OtpPage";
import ResetPassword from "./pages/Login/ResetPassword";
import JoinAsPage from "./pages/Login/JoinAsPage";
import GoogleAuthSuccess from "./pages/Login/GoogleAuthSuccess";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} />

        <Route
  path="/auth/google/success"
  element={<GoogleAuthSuccess />}
/>

        <Route
          path="/forgot-password"
          element={<ForgotPasswordPage />}
        />

        <Route
          path="/change-password"
          element={<ChangePasswordPage />}
        />

        <Route path="/otp" element={<OtpPage />} />

        <Route
          path="/reset-password"
          element={<ResetPassword />}
        />

        <Route path="/join-as" element={<JoinAsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;