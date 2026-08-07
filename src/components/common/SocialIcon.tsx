import type { ReactNode } from "react";

interface SocialIconProps {
  href: string;
  label: string;
  children: ReactNode;
  external?: boolean;
}

const SocialIcon = ({
  href,
  label,
  children,
  external = false,
}: SocialIconProps) => {
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="
        group
        w-10
        h-10
        rounded-full
        p-[1px]
        bg-white/10
        hover:bg-gradient-to-r
        hover:from-[#FF7A18]/70
        hover:to-[#FF4D00]/70
        transition-all
        duration-300
      "
    >
      <div
        className="
          w-full
          h-full
          rounded-full
          bg-[#1F1F1F]
          flex
          items-center
          justify-center
        "
      >
        <span
          className="
            text-gray-300
            group-hover:text-white
            transition-colors
            duration-300
          "
        >
          {children}
        </span>
      </div>
    </a>
  );
};

export default SocialIcon;