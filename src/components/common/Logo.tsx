interface LogoProps {
  variant?: "navbar" | "footer";
}

const Logo = ({ variant = "navbar" }: LogoProps) => {
  const isFooter = variant === "footer";

  return (
    <a
      href="/"
      className={`
        ${isFooter ? "text-2xl" : "text-3xl"}
        font-bold
        tracking-tight
        cursor-pointer
        select-none
      `}
    >
      <span className={isFooter ? "text-white" : "text-gray-900"}>
        Career
      </span>

      <span className="gradient-text">
        Hive
      </span>
    </a>
  );
};

export default Logo;