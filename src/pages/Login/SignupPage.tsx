import { User, Mail, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "../../components/common/Button";
import loginImage from "../../assets/login.png";
import Logo from "../../components/common/Logo";
import InputField from "../../components/common/InputField";
import { registerUser } from "../../api/authApi";
import { validateEmail,validateName,validatePassword } from "../../utils/validations";

const SignupPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Role selected from Join As page
  const role = location.state?.role as
    | "freelancer"
    | "recruiter"
    | undefined;

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle signup
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // Validation
    if (!role) {
      setError("Please select a role.");
      return;
    }

 const nameError = validateName(formData.userName);

if (nameError) {
  setError(nameError);
  return;
}

const emailError = validateEmail(formData.email);

if (emailError) {
  setError(emailError);
  return;
}

const passwordError = validatePassword(formData.password);

if (passwordError) {
  setError(passwordError);
  return;
}
if (formData.password !== formData.confirmPassword) {
  setError("Passwords do not match.");
  return;
}

    try {
      setLoading(true);
      setError("");

      await registerUser({
        userName: formData.userName,
        email: formData.email,
        password: formData.password,
        role,
      });

      // Navigate to OTP page
      navigate("/otp", {
        state: {
          email: formData.email,
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

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
          {/* Form */}
          <div className="px-7 py-8 sm:px-9 lg:px-8">
            {/* Tabs */}
          <div className="border-b border-gray-400">
  <div
    className="
      pb-3
      text-center
      text-sm
      font-semibold
      text-[#FF7A18]
      border-b-2
      border-[#FF7A18]
    "
  >
    SIGN UP
  </div>
</div>

            {/* Error Message */}
            {error && (
              <div className="mt-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4"
            >
              <InputField
                id="userName"
                label="Username"
                placeholder="Please Enter your Full Name"
                type="text"
                icon={User}
                value={formData.userName}
                onChange={handleChange}
              />

              <InputField
                id="email"
                label="Email Address"
                placeholder="Please Enter your Email"
                type="email"
                icon={Mail}
                value={formData.email}
                onChange={handleChange}
              />

              <InputField
                id="password"
                label="Password"
                placeholder="Please Enter your Password"
                type="password"
                icon={Lock}
                value={formData.password}
                onChange={handleChange}
              />

              <InputField
                id="confirmPassword"
                label="Confirm Password"
                placeholder="Please Enter your Password"
                type="password"
                icon={Lock}
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              {/* Get OTP */}
              <div className="pt-1">
                <Button
                  variant="primary"
                  className="w-full h-10 rounded-full text-sm"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Sending OTP..." : "Get OTP"}
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

          {/* Image */}
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