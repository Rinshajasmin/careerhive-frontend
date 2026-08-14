import { Mail, Lock } from "lucide-react";
import { useState } from "react";
import Button from "../../components/common/Button";
import loginImage from "../../assets/login.png";
import Logo from "../../components/common/Logo";
import { FcGoogle } from "react-icons/fc";
import InputField from "../../components/common/InputField";
import { validateEmail } from "../../utils/validations";
import { loginUser } from "../../api/authApi";

const LoginPage = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
  email: "",
  password: "",
});
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const { id, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [id]: value,
  }));
};
const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setError("");

  const emailError = validateEmail(formData.email);

  if (emailError) {
    setError(emailError);
    return;
  }

  if (!formData.password) {
    setError("Password is required.");
    return;
  }

  try {
    const result = await loginUser({
      email: formData.email.trim(),
      password: formData.password,
    });

    console.log("Login successful:", result);
    console.log("userrole",result.data.user.role)
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    } else {
      setError("Login failed. Please try again.");
    }
  }
};
  return (
    <main className="min-h-screen bg-[#F9F6F4] flex flex-col items-center justify-center px-4 py-6">
      {/* Logo */}
      <div className="mb-5">
        <Logo />
      </div>

      {/* Login Card */}
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
    LOGIN
  </div>
</div>

            {/* Form */}
           {/* Form */}
           {error && (
  <div className="mt-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
    {error}
  </div>
)}
<form className="mt-7 space-y-5" onSubmit={handleSubmit}>

  {/* Email */}
  <InputField
    id="email"
    label="Email Address"
    placeholder="Please Enter your Email"
    type="email"
    icon={Mail}
    value={formData.email}
  onChange={handleChange}
  />

  {/* Password */}
  <div>
    <InputField
      id="password"
      label="Password"
      placeholder="Please Enter your Password"
      type="password"
      icon={Lock}
      value={formData.password}
  onChange={handleChange}
    />

    {/* Forgot Password */}
    <button
      type="button"
      className="
        mt-2
        text-xs
        text-[#FF7A18]
        hover:text-[#FF4D00]
        transition-colors
      "
    >
      Forgot Password?
    </button>
  </div>

  {/* Login */}
  <div className="pt-1">
   <Button
  variant="primary"
  type="submit"
  className="w-full h-11 rounded-full"
  
>
  Login
</Button>
  </div>

  {/* Google */}
  <button
    type="button"
    className="
      w-full
      h-11
      rounded-full
      bg-white
      border
      border-[#FF7A18]
      text-gray-700
      flex
      items-center
      justify-center
      gap-3
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
              alt="CareerHive login illustration"
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

export default LoginPage;
