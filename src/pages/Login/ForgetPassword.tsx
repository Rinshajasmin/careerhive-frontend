import { Mail } from "lucide-react";

import Button from "../../components/common/Button";
import InputField from "../../components/common/InputField";
import Logo from "../../components/common/Logo";

import loginImage from "../../assets/login.png";

const ForgotPasswordPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // OTP sending logic will be added later
    console.log("Send OTP");
  };

  return (
    <main className="min-h-screen bg-[#F9F6F4] flex flex-col items-center px-4 py-8 sm:py-10">

      {/* Logo */}
      <div className="mb-8 sm:mb-10">
        <Logo />
      </div>

      {/* Forgot Password Card */}
      <div
        className="
          w-full
          max-w-[800px]
          bg-white
          rounded-2xl
          overflow-hidden
        "
      >
        <div className="grid lg:grid-cols-2 items-center">

          {/* ================= FORM ================= */}
          <div
            className="
              px-7
              py-10
              sm:px-10
              lg:px-9
            "
          >
            <div className="max-w-[320px] mx-auto">

              {/* Heading */}
              <h1
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  gradient-text
                  text-center
                  lg:text-left
                "
              >
                Forgot Password
              </h1>

              {/* Description */}
              <p
                className="
                  mt-3
                  text-sm
                  text-gray-500
                  leading-6
                  text-center
                  lg:text-left
                "
              >
                Enter your registered email address and we'll
                send you an OTP to reset your password.
              </p>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="mt-7 space-y-5"
              >

                {/* Email */}
                <InputField
                  id="email"
                  label="Email Address"
                  placeholder="Please Enter your Email"
                  type="email"
                  icon={Mail}
                />

                {/* Send OTP */}
                <div className="pt-1">
                  <Button
                    variant="primary"
                    type="submit"
                    className="
                      w-full
                      h-11
                      rounded-full
                      text-sm
                    "
                  >
                    Send OTP
                  </Button>
                </div>

              </form>

              {/* Back to Login */}
              <div className="mt-5 text-center">
                <button
                  type="button"
                  className="
                    text-xs
                    text-gray-500
                    hover:text-[#FF7A18]
                    transition-colors
                    duration-200
                  "
                >
                  Back to Login
                </button>
              </div>

            </div>
          </div>

          {/* ================= IMAGE ================= */}
          <div
            className="
              hidden
              lg:flex
              items-center
              justify-center
              px-5
              py-8
            "
          >
            <img
              src={loginImage}
              alt="CareerHive password recovery illustration"
              className="
                w-full
                max-w-[350px]
                max-h-[380px]
                object-contain
              "
            />
          </div>

        </div>
      </div>
    </main>
  );
};

export default ForgotPasswordPage;