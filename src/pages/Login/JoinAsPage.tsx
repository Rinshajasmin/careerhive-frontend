import { useState } from "react";
import { UserRound, BriefcaseBusiness } from "lucide-react";
import Button from "../../components/common/Button";
import Logo from "../../components/common/Logo";
import { useNavigate } from "react-router-dom";



const JoinAsPage = () => {
  const [selectedRole, setSelectedRole] = useState<"recruiter" | "freelancer" |null>(
    null
  );
  const navigate = useNavigate()
 const handleJoin = () => {
  if (!selectedRole) {
    return;
  }

  console.log("Selected role:", selectedRole);

  navigate("/signup", {
    state: {
      role: selectedRole,
    },
  });
};

  return (
    <main className="min-h-screen bg-[#F9F7F5] flex flex-col items-center px-4 py-8">
      {/* Logo */}
      <div className="mb-8">
        <Logo />
      </div>

      {/* Card */}
      <div
        className="
          w-full
          max-w-[650px]
          bg-white
          rounded-2xl
          px-6
          py-10
          sm:px-10
          sm:py-12
          md:px-16
          md:py-14
        "
      >
        {/* Heading */}
        <h1
          className="
            text-2xl
            sm:text-3xl
            font-semibold
            text-center
            text-gray-900
            mb-10
          "
        >
          Join as a Recruiter or  a Freelancer
        </h1>

        {/* Role Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[430px] mx-auto">
          {/* Client */}
          <button
            type="button"
            onClick={() => setSelectedRole("recruiter")}
            className={`
              relative
              text-left
              border
              rounded-2xl
              p-5
              min-h-[150px]
              transition-all
              duration-200
              ${
                selectedRole === "recruiter"
                  ? "border-[#FF7A18] ring-2 ring-[#FF7A18]/20"
                  : "border-gray-400 hover:border-[#FF7A18]"
              }
            `}
          >
            {/* Radio */}
            <span
              className={`
                absolute
                top-4
                right-4
                w-5
                h-5
                rounded-full
                border
                flex
                items-center
                justify-center
                ${
                  selectedRole === "recruiter"
                    ? "border-[#FF7A18]"
                    : "border-gray-500"
                }
              `}
            >
              {selectedRole === "recruiter" && (
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A18]" />
              )}
            </span>

            <UserRound size={22} className="mb-4 text-gray-900" />

            <p className="text-base font-medium leading-6 text-gray-900">
              I'm a Recruiter,
              <br />
              hiring for a
              <br />
              project
            </p>
          </button>

          {/* Freelancer */}
          <button
            type="button"
            onClick={() => setSelectedRole("freelancer")}
            className={`
              relative
              text-left
              border
              rounded-2xl
              p-5
              min-h-[150px]
              transition-all
              duration-200
              ${
                selectedRole === "freelancer"
                  ? "border-[#FF7A18] ring-2 ring-[#FF7A18]/20"
                  : "border-gray-400 hover:border-[#FF7A18]"
              }
            `}
          >
            {/* Radio */}
            <span
              className={`
                absolute
                top-4
                right-4
                w-5
                h-5
                rounded-full
                border
                flex
                items-center
                justify-center
                ${
                  selectedRole === "freelancer"
                    ? "border-[#FF7A18]"
                    : "border-gray-500"
                }
              `}
            >
              {selectedRole === "freelancer" && (
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A18]" />
              )}
            </span>

            <BriefcaseBusiness size={22} className="mb-4 text-gray-900" />

            <p className="text-base font-medium leading-6 text-gray-900">
              I'm a freelancer,
              <br />
              looking for a
              <br />
              project
            </p>
          </button>
        </div>

        {/* Join Button */}
        <div className="flex justify-center mt-8">
          <Button
            variant="primary"
            onClick={handleJoin}
            disabled = {!selectedRole}
            className="px-7 py-2.5"
          >
            {selectedRole === "recruiter"
              ? "Join as a recruiter"
              : "Join as a Freelancer"}
          </Button>
        </div>

        {/* Login */}
        <p className="text-center text-sm text-gray-700 mt-5">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => {
              // navigate("/login");
            }}
            className="
              text-[#FF7A18]
              font-medium
              hover:text-[#FF4D00]
              transition-colors
            "
          >
            Login
          </button>
        </p>
      </div>
    </main>
  );
};

export default JoinAsPage;