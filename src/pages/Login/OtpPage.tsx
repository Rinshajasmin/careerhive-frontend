import { useEffect, useRef, useState } from "react";
import Button from "../../components/common/Button";
import Logo from "../../components/common/Logo";
import loginImage from "../../assets/login.png";

const OtpPage = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(60);

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
      .slice(0, 4);

    if (!pastedOtp) {
      return;
    }

    const updatedOtp = ["", "", "", ""];

    pastedOtp.split("").forEach((digit, index) => {
      updatedOtp[index] = digit;
    });

    setOtp(updatedOtp);

    // Focus appropriate input
    const nextIndex = Math.min(pastedOtp.length, 3);
    inputRefs.current[nextIndex]?.focus();
  };

  // ================= SEND AGAIN =================
  const handleResend = () => {
    setOtp(["", "", "", ""]);
    setTimeLeft(60);

    inputRefs.current[0]?.focus();

    // TODO:
    // Call resend OTP API here
    console.log("OTP resent");
  };

  // ================= REGISTER =================
  const handleRegister = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 4) {
      return;
    }

    // TODO:
    // Verify OTP using API here
    console.log("Entered OTP:", enteredOtp);
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

            {/* Timer */}
            <h2
              className="
                text-2xl
                sm:text-3xl
                font-bold
                text-[#FF4D00]
                text-center
                mb-7
              "
            >
              {`1:${timeLeft.toString().padStart(2, "0")}`}
            </h2>

            {/* ================= OTP INPUTS ================= */}
            <div
              className="
                flex
                justify-center
                gap-3
                sm:gap-4
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
                    w-12
                    h-12
                    sm:w-14
                    sm:h-14
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
  >
    Send Again
  </Button>
</div>

<div className="flex justify-center">
  <Button
    variant="primary"
    className="w-[240px] max-w-full h-10 rounded-full"
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
