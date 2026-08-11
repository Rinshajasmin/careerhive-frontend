import { Lock } from "lucide-react";
import Button from "../../components/common/Button";
import InputField from "../../components/common/InputField";
import Logo from "../../components/common/Logo";
import loginImage from "../../assets/login2.png"

const ChangePasswordPage = () => {
  return (
    <main className="min-h-screen bg-[#F9F7F5] flex flex-col items-center px-4 py-6 sm:py-8">
      {/* Logo */}
      <div className="mb-6 sm:mb-8">
        <Logo />
      </div>

      {/* Change Password Card */}
      <div
        className="
          w-full
          max-w-[800px]
          bg-white
          rounded-2xl
          overflow-hidden
        "
      >
        <div
          className="
            grid
            lg:grid-cols-2
            items-center
            min-h-[500px]
          "
        >
          {/* ================= IMAGE ================= */}
          <div
            className="
              hidden
              lg:flex
              items-center
              justify-center
              px-6
              py-8
              order-1
            "
          >
            <img
              src={loginImage}
              alt="Change password illustration"
              className="
                w-full
                max-w-[350px]
                max-h-[400px]
                object-contain
              "
            />
          </div>

          {/* ================= FORM ================= */}
          <div
            className="
              px-7
              py-10
              sm:px-10
              lg:px-8
              order-2
            "
          >
            {/* Heading */}
            <h1
              className="
                text-2xl
                sm:text-[26px]
                font-bold
                gradient-text
                text-center
                mb-8
              "
            >
              forgot Password
            </h1>

            <form className="space-y-5">
              {/* New Password */}
              <InputField
                id="newPassword"
                label=""
                type="password"
                placeholder="Please Enter your New Password"
                icon={Lock}
              />

              {/* Confirm Password */}
              <InputField
                id="confirmPassword"
                label=""
                type="password"
                placeholder="Confirm Password"
                icon={Lock}
              />

              {/* Change Button */}
              <div className="pt-2 flex justify-center">
                <Button
                  type="submit"
                  variant="primary"
                  className="
                    w-full
                    max-w-[260px]
                    h-11
                    rounded-full
                  "
                >
                  Change
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChangePasswordPage;