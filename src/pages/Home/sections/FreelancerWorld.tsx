import freelancerWorld from "../../../assets/features.png";
import { CircleCheckBig } from "lucide-react";

const FreelancerWorld = () => {
  return (
    <section className="bg-[#F9F6F4] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={freelancerWorld}
              alt="Freelancer World"
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>

          {/* Right Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text leading-tight">
              A whole world of freelancers
              <br />
              talent at your fingertips.
            </h2>

            <div className="mt-10 space-y-8 max-w-lg mx-auto lg:mx-0">
             <div className="flex items-start gap-4">
  <CircleCheckBig
    size={32}
    className="text-[#FF7A18] flex-shrink-0 mt-1"
  />

  <div>
    <h3 className="text-xl font-semibold text-gray-900">
      The best for every budget
    </h3>

    <p className="mt-2 text-gray-600 leading-7">
      Our intelligent system connects the right talent with the right
      experience and preferences.
    </p>
  </div>
</div>

              <div className="flex items-start gap-4">
  <CircleCheckBig
    size={32}
    className="text-[#FF7A18] flex-shrink-0 mt-1"
  />

  <div>
    <h3 className="text-xl font-semibold text-gray-900">
      Quality work done quickly
    </h3>

    <p className="mt-2 text-gray-600 leading-7">
      Our intelligent system connects the right talent with the right
      opportunities based on skills, experience, and preferences.
    </p>
  </div>
</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelancerWorld;