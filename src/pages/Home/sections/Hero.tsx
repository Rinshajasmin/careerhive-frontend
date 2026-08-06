import Button from "../../../components/common/Button"
import heroImage from "../../../assets/hero.svg";

const Hero = () => {
  return (
    <section className="bg-[#F9F6F4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 items-center gap-14">
          {/* Left Content */}
          <div className="text-center lg:text-left order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Your Trusted Platform
              <br />
              for{" "}
              <span className="gradient-text">
                Work
              </span>{" "}
              that
              <br />
              <span className="gradient-text">
                Works!
              </span>
            </h1>

            <p className="mt-6 text-gray-600 leading-8 max-w-xl mx-auto lg:mx-0">
              Whether you're a business owner or a freelancer, CareerHive is
              your one-stop platform for finding or offering freelance
              services. Join our growing community and start achieving your
              goals today.
            </p>

<div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">          
        <Button variant="primary">
                Hire a Freelancer
              </Button>

              <Button variant="outline">
                Find Work
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-2 flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="Freelancer Collaboration"
              className="w-full max-w-lg lg:max-w-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;