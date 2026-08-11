import { Lock } from "lucide-react";
import Button from "../../components/common/Button";
import InputField from "../../components/common/InputField";
import Logo from "../../components/common/Logo";
import loginImage from "../../assets/login.png";

const ResetPassword = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO:
    // Add reset password API call here
    console.log("Password changed");
  };

  return (
    <main
      className="
        min-h-screen
        bg-[#F8F6F4]
        flex
        flex-col
        items-center
        px-4
        py-6
        sm:py-8
      "
    >
      {/* ================= LOGO ================= */}
      <div className="mb-6 sm:mb-8">
        <Logo />
      </div>

      {/* ================= PASSWORD CARD ================= */}
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
              alt="Reset password illustration"
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
              flex
              flex-col
              justify-center
              order-2
            "
          >
            {/* Heading */}
            <h1
              className="
                text-xl
                sm:text-2xl
                font-bold
                gradient-text
                text-center
                mb-8
              "
            >
              forgot Password
            </h1>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
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
              <div className="flex justify-center pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  className="
                    w-[180px]
                    max-w-full
                    h-10
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

export default ResetPassword;