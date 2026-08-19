import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Button from "../common/Button";
import Logo from "../common/Logo";
import { NavLink, useNavigate } from "react-router-dom";

type NavbarVariant = "public" | "recruiter" | "freelancer";

interface NavbarProps {
  variant?: NavbarVariant;
}

const navLinks = {
  public: [
    { name: "Home", path: "/" },
    { name: "Find Work", path: "/marketplace" },
    { name: "Find Talent", path: "/freelancers" },
    { name: "About", path: "/about" },
  ],

  recruiter: [
    { name: "Home", path: "/recruiter/home" },
    { name: "Dashboard", path: "/recruiter/dashboard" },
  ],

  freelancer: [
    { name: "Home", path: "/freelancer/home" },
    { name: "Find Work", path: "/freelancer/marketplace" },
    { name: "Dashboard", path: "/freelancer/dashboard" },
  ],
};

const Navbar = ({ variant = "public" }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const currentNavLinks = navLinks[variant];

  const handleLogin = () => {
    setMenuOpen(false);
    navigate("/login");
  };

  const handleSignup = () => {
    setMenuOpen(false);
    navigate("/join-as");
  };

  const handleLogout = () => {
    setMenuOpen(false);

    // We will connect AuthContext logout here later
    navigate("/login");
  };

  const handleNavigation = (path: string) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FBF6F0] backdrop-blur-md border-b border-orange-300">
      <div className="max-w-7xl mx-auto h-20 px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <Logo />

    <nav className="hidden lg:flex items-center gap-10">
  {currentNavLinks.map((link) => (
    <NavLink
      key={link.name}
      to={link.path}
      className={({ isActive }) =>
        isActive
          ? "gradient-text font-semibold"
          : "text-gray-700 font-medium gradient-hover"
      }
    >
      {link.name}
    </NavLink>
  ))}
</nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {variant === "public" ? (
            <>
              <Button
                variant="primary"
                onClick={handleLogin}
              >
                Login
              </Button>

              <Button
                variant="outline"
                onClick={handleSignup}
              >
                SignUp
              </Button>
            </>
          ) : (
            <Button
              variant="primary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
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

          {/* Mobile Navigation */}
          <nav className="flex flex-col items-center gap-8 mt-8">
          {currentNavLinks.map((link) => (
  <NavLink
    key={link.name}
    to={link.path}
    onClick={() => setMenuOpen(false)}
    className={({ isActive }) =>
      isActive
        ? "gradient-text font-semibold"
        : "text-gray-700 font-medium"
    }
  >
    {link.name}
  </NavLink>
))}
          </nav>

          {/* Mobile Actions */}
          <div className="flex flex-col items-center gap-5 mt-6">
            {variant === "public" ? (
              <>
                <Button
                  variant="primary"
                  onClick={handleLogin}
                >
                  Login
                </Button>

                <Button
                  variant="outline"
                  onClick={handleSignup}
                >
                  SignUp
                </Button>
              </>
            ) : (
              <Button
                variant="primary"
                onClick={handleLogout}
              >
                Logout
              </Button>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;