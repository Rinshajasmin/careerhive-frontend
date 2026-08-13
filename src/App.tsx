import React from 'react'
import HomePage from './pages/Home/HomePage';
import Login from'./pages/Login/LoginPage';
import SignupPage from './pages/Login/SignupPage';
import ForgotPasswordPage from './pages/Login/ForgetPassword';
import ChangePasswordPage from './pages/Login/PasswodChange';
import OtpPage from './pages/Login/OtpPage';
import ResetPassword from './pages/Login/ResetPassword';
import JoinAsPage from './pages/Login/JoinAsPage';
import AppRouter from "./AppRouter";


const App = () => {
  return (
    <div>
            

      <AppRouter/>

      {/* <HomePage/> */}
      {/* <Login/> */}
      {/* <SignupPage/> */}
      {/* <ForgotPasswordPage/> */}
      {/* <ChangePasswordPage/> */}
      {/* <OtpPage/> */}
      {/* <ResetPassword/> */}
      {/* <JoinAsPage/> */}
    </div>
  )
}

export default App
