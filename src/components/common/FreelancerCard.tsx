import { Star } from "lucide-react";
import Button from "./Button";

interface FreelancerCardProps {
  image: string;
  name: string;
  role: string;
  rating: number;
  price: string;
}

const FreelancerCard = ({
  image,
  name,
  role,
  rating,
  price,
}: FreelancerCardProps) => {
  return (
    <div
      className="
        group
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-md
        border
        border-orange-100
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* Image */}

      <div className="flex justify-center pt-6">
  <div className="w-28 h-28 rounded-full border-2 border-orange-300 p-1">
    <img
      src={image}
      alt={name}
      className="w-full h-full rounded-full object-cover"
    />
  </div>
</div>

      {/* Content */}

      <div className="p-5">

        <h3 className="text-xl font-bold text-gray-900">
          {name}
        </h3>

        <p className="mt-1 text-gray-500">
          {role}
        </p>

        <div className="flex items-center justify-between mt-5">

          <div className="flex items-center gap-2">
            <Star
              size={18}
              fill="#F59E0B"
              className="text-yellow-500"
            />

            <span className="font-medium">
              {rating}
            </span>
          </div>

          <span className="font-semibold text-[#FF6A00]">
            {price}
          </span>

        </div>

        <div className="mt-6 flex gap-3">
  <Button
    variant="outline"
    className="flex-1"
  >
    Profile
  </Button>

  <Button
    variant="primary"
    className="flex-1"
  >
    Hire 
  </Button>
</div>

      </div>
    </div>
  );
};

export default FreelancerCard;