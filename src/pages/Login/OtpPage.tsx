import { useEffect, useRef, useState } from "react";
import Button from "../../components/common/Button";
import Logo from "../../components/common/Logo";
import loginImage from "../../assets/login.png";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyOtp, resendOtp } from "../../api/authApi";
const OtpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;
  console.log("OTP email:", email);
  
  useEffect(() => {
    if (!email) {
      navigate("/join-as", { replace: true });
    }
  }, [email, navigate]);

  if (!email) {
    return null;
  }
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [success, setSuccess] = useState("");
  const [resendLoading, setResendLoading] = useState(false);
  const [error, setError] = useState("");

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // ================= TIMER =================
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // ================= OTP CHANGE =================
  const handleChange = (value: string, index: number) => {
    // Allow only numbers
    if (!/^\d?$/.test(value)) {
      return;
    }

    const updatedOtp = [...otp];
    updatedOtp[index] = value;

    setOtp(updatedOtp);

    // Move to next input automatically
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // ================= BACKSPACE =================
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // ================= PASTE OTP =================
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const pastedOtp = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (!pastedOtp) {
      return;
    }

    const updatedOtp = ["", "", "", "", "", ""];
    pastedOtp.split("").forEach((digit, index) => {
      updatedOtp[index] = digit;
    });

    setOtp(updatedOtp);

    // Focus appropriate input
    const nextIndex = Math.min(pastedOtp.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  // ================= SEND AGAIN =================
  const handleResend = async () => {
    if (!email) {
      setError("Email not found.");
      return;
    }

    try {
      setResendLoading(true);
      setError("");

      await resendOtp(email);

      setOtp(["", "", "", "", "", ""]);
      setTimeLeft(60);

      inputRefs.current[0]?.focus();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Failed to resend OTP.");
      }
    } finally {
      setResendLoading(false);
    }
  };

  // ================= REGISTER =================
  const handleRegister = async () => {
    if (timeLeft <= 0) {
    setError("OTP has expired. Please request a new OTP.");
    return;
  }
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      setError("Please enter the 6-digit OTP.");
      return;
    }

    setError("");

    try {
      setError("");
      setSuccess("");

      await verifyOtp(email, enteredOtp);

      setSuccess("Email verified successfully!");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("OTP verification failed.");
      }
    }
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

      {/* ================= OTP CARD ================= */}
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
            "
          >
            <img
              src={loginImage}
              alt="OTP verification illustration"
              className="
                w-full
                max-w-[350px]
                max-h-[400px]
                object-contain
              "
            />
          </div>

          {/* ================= OTP FORM ================= */}
          <div
            className="
              px-7
              py-10
              sm:px-10
              lg:px-8
              flex
              flex-col
              justify-center
            "
          >
            {/* OTP Message */}
            <p
              className="
                text-xs
                sm:text-sm
                text-gray-500
                text-center
                mb-3
              "
            >
              OTP has been sent to your Email
            </p>
            {error && (
              <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600 text-center">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-4 rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-600 text-center">
                {success}
              </div>
            )}

            {/* Timer */}
            {timeLeft > 0 ? (
  <h2 className="text-2xl sm:text-3xl font-bold text-[#FF4D00] text-center mb-7">
    {`${Math.floor(timeLeft / 60)}:${(timeLeft % 60)
      .toString()
      .padStart(2, "0")}`}
  </h2>
) : (
  <p className="text-xs sm:text-sm font-medium text-red-500 text-center mb-7">
    OTP expired. Click send again.
  </p>
)}

            {/* ================= OTP INPUTS ================= */}
            <div
              className="
    grid
    grid-cols-6
    gap-2
    w-full
    max-w-[320px]
    mx-auto
    mb-7
  "
            >
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(element) => {
                    inputRefs.current[index] = element;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={handlePaste}
                  aria-label={`OTP digit ${index + 1}`}
                  className="
        w-full
        aspect-square
        rounded-xl
        bg-gray-100
        border
        border-gray-200
        text-center
        text-lg
        font-semibold
        text-gray-700
        outline-none
        focus:border-[#FF7A18]
        focus:ring-1
        focus:ring-[#FF7A18]/20
        transition-all
      "
                />
              ))}
            </div>

            <div className="flex justify-center mb-4">
              <Button
                variant="primary"
                className="w-[240px] max-w-full h-10 rounded-full"
                onClick={handleResend}
  disabled={timeLeft > 0 || resendLoading}
              >
                {resendLoading ? "Sending..." : "Send Again"}
              </Button>
            </div>

            <div className="flex justify-center">
              <Button
                variant="primary"
                className="w-[240px] max-w-full h-10 rounded-full"
                onClick={handleRegister}
                  disabled={timeLeft <= 0}

              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OtpPage;
