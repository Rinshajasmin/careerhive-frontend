import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Button from "../common/Button";
import Logo from "../common/Logo";
import { useNavigate } from "react-router-dom";


const navLinks = [
  { name: "Home", path: "/" },
  { name: "Marketplace", path: "/marketplace" },
  { name: "Freelancers", path: "/freelancers" },
  { name: "Recruiters", path: "/recruiters" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

   const handleLogin = () => {
    setMenuOpen(false);
    navigate("/login");
  };

   const handleSignup = () => {
    setMenuOpen(false);
    navigate("/join-as");
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FBF6F0] backdrop-blur-md border-b  border-orange-300">
        
      <div className="max-w-7xl mx-auto h-20 px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
       <Logo/>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              onClick={() => navigate(link.path)}
              className="
              text-gray-700
              font-medium
              transition-all
              duration-300

              hover:bg-gradient-to-r
              hover:from-[#FF7A18]
              hover:to-[#FF4D00]
              hover:bg-clip-text
              hover:text-transparent
             "
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
<Button
  variant="primary"
  onClick={handleLogin}
>
  Login
</Button>
          <Button variant="outline"   onClick={handleSignup}
>SignUp</Button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl text-gray-700"
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 bg-white border-t border-orange-100">
          <nav className="flex flex-col items-center gap-8 mt-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
onClick={() => {
                  setMenuOpen(false);
                  navigate(link.path);
                }}                className="text-gray-700 font-medium "
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-5 mt-6">
            <Button variant="primary" onClick={handleLogin}>login</Button>
            <Button variant="outline" onClick={handleSignup}>SignUp</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
