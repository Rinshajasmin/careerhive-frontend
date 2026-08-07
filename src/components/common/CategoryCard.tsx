import type { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
}

const CategoryCard = ({ title, icon: Icon }: CategoryCardProps) => {
  return (
    <div
      className="
        group
        bg-white
        rounded-3xl
        border-2
        border-orange-300
        h-60
        flex
        flex-col
        items-center
        justify-center
        cursor-pointer
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        hover:bg-gradient-to-r
        hover:from-[#FF7A18]
        hover:to-[#FF4D00]
      "
    >
      {/* Icon */}

     <div
  className="
    w-20
    h-20
    rounded-full
    bg-white
    border
    border-orange-200
    shadow-md
    flex
    items-center
    justify-center
    transition-all
    duration-300
    group-hover:border-orange-300
    group-hover:shadow-lg
  "
>
        <Icon
          size={34}
          className="
            text-gray-700
            transition-colors
            duration-300
            group-hover:text-[#FF5A1F]
          "
        />
      </div>

      {/* Title */}

      <h3
        className="
          mt-8
          text-lg
          font-semibold
          text-gray-800
          transition-colors
          duration-300
          group-hover:text-white
        "
      >
        {title}
      </h3>
    </div>
  );
};

export default CategoryCard;