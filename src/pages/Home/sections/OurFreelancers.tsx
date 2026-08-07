import FreelancerCard from "../../../components/common/FreelancerCard";

import profile from "../../../assets/freelancers/profileavatar.svg"


const freelancers = [
  {
    image: profile,
    name: "Emma Wilson",
    role: "UI/UX Designer",
    rating: 4.9,
    price: "$45/hr",
  },
  {
    image: profile,
    name: "James Anderson",
    role: "React Developer",
    rating: 5.0,
    price: "$55/hr",
  },
  {
    image: profile,
    name: "Sophia Brown",
    role: "Graphic Designer",
    rating: 4.8,
    price: "$40/hr",
  },
  {
    image: profile,
    name: "David Lee",
    role: "Full Stack Developer",
    rating: 4.9,
    price: "$60/hr",
  },
];

const OurFreelancers = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">
          <h2 className="text-4xl font-bold gradient-text">
            Our Freelancers
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Meet our talented professionals ready to bring your ideas to life.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {freelancers.map((freelancer) => (
            <FreelancerCard
              key={freelancer.name}
              image={freelancer.image}
              name={freelancer.name}
              role={freelancer.role}
              rating={freelancer.rating}
              price={freelancer.price}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default OurFreelancers;