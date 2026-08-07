import { User, Mail, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import Button from "../../components/common/Button";
import loginImage from "../../assets/login.png";
import Logo from "../../components/common/Logo";
import InputField from "../../components/common/InputField";


const SignupPage = () => {
  return (
    <main className="min-h-screen bg-[#F9F6F4] flex flex-col items-center px-4 py-6 sm:py-8">

      {/* Logo */}
      <div className="mb-6 sm:mb-8">
        <Logo />
      </div>

      {/* Signup Card */}
      <div
        className="
          w-full
          max-w-[800px]
          bg-white
          rounded-2xl
          overflow-hidden
        "
      >
        <div className="grid lg:grid-cols-2 min-h-[500px]">

          {/* ================= FORM ================= */}
          <div className="px-7 py-8 sm:px-9 lg:px-8">

            {/* Tabs */}
            <div className="flex border-b border-gray-400">

              {/* Login */}
              <button
                type="button"
                className="
                  flex-1
                  pb-3
                  text-sm
                  font-semibold
                  text-gray-500
                  hover:text-[#FF7A18]
                  transition-colors
                  duration-200
                "
              >
                LOGIN
              </button>

              {/* Sign Up */}
              <button
                type="button"
                className="
                  flex-1
                  pb-3
                  text-sm
                  font-semibold
                  text-[#FF7A18]
                  border-b-2
                  border-[#FF7A18]
                "
              >
                SIGN UP
              </button>

            </div>

            {/* Form */}
           <form className="mt-6 space-y-4">

  <InputField
    id="name"
    label="Full Name"
    placeholder="Please Enter your Full Name"
    type="text"
    icon={User}
  />

  <InputField
    id="email"
    label="Email Address"
    placeholder="Please Enter your Email"
    type="email"
    icon={Mail}
  />

  <InputField
    id="password"
    label="Password"
    placeholder="Please Enter your Password"
    type="password"
    icon={Lock}
  />

  <InputField
    id="confirmPassword"
    label="Confirm Password"
    placeholder="Please Enter your Password"
    type="password"
    icon={Lock}
  />

  {/* Get OTP */}
  <div className="pt-1">
    <Button
      variant="primary"
      className="w-full h-10 rounded-full text-sm"
      type="submit"
    >
      Get OTP
    </Button>
  </div>

  {/* Google */}
  <button
    type="button"
    className="
      w-full
      h-10
      rounded-full
      bg-white
      border
      border-[#FF7A18]
      text-gray-700
      flex
      items-center
      justify-center
      gap-3
      text-sm
      font-medium
      hover:bg-[#FF7A18]/5
      transition-all
      duration-300
    "
  >
    <FcGoogle size={18} />
    <span>Sign up with Google</span>
  </button>

</form>
          </div>

          {/* ================= IMAGE ================= */}
          <div
            className="
              hidden
              lg:flex
              items-center
              justify-center
              px-5
              py-6
            "
          >
            <img
              src={loginImage}
              alt="CareerHive signup illustration"
              className="
                w-full
                max-w-[350px]
                max-h-[400px]
                object-contain
              "
            />
          </div>

        </div>
      </div>
    </main>
  );
};

export default SignupPage;