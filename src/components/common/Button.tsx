import type { ReactNode } from "react";


interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) => {
  const baseStyles =
    "px-5 py-2 rounded-full font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#FF7A18] to-[#FF4D00] hover:from-[#FF6A00] hover:to-[#F43F00] text-white shadow-lg hover:shadow-xl",

    outline:
      "py-[7px] border border-[#FF7A18] text-[#FF7A18] hover:text-white hover:border-transparent hover:bg-gradient-to-r hover:from-[#FF7A18] hover:to-[#FF4D00] hover:shadow-xl",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;