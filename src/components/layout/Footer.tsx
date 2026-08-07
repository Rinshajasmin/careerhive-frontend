import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import Logo from "../common/Logo";

import SocialIcon from "../../components/common/SocialIcon";

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">

        {/* Main Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">
           <Logo variant="footer"/>

            <p className="mt-2 text-sm text-gray-400 max-w-xs">
              Connecting talented professionals with the right opportunities.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            <a
              href="#"
              className="
                text-gray-300
                               gradient-hover

              "
            >
              Home
            </a>

            <a
              href="#"
              className="
                text-gray-300
                               gradient-hover

              "
            >
              Marketplace
            </a>

            <a
              href="#"
              className="
                text-gray-300
                gradient-hover
              "
            >
              Freelancers
            </a>

            <a
              href="#"
              className="
                text-gray-300
                               gradient-hover

              "
            >
              Client
            </a>
          </nav>

          {/* Social Icons */}
          {/* Social Icons */}
<div className="flex items-center gap-3">


  <SocialIcon
    href="https://www.linkedin.com/in/rinshajasmin"
    label="LinkedIn"
    external
  >
    <FaLinkedinIn size={18} />
  </SocialIcon>

  <SocialIcon
    href="#"
    label="Instagram"
    external
  >
    <FaInstagram size={18} />
  </SocialIcon>

  <SocialIcon
    href="#"
    label="Facebook"
    external
  >
    <FaFacebookF size={18} />
  </SocialIcon>

  <SocialIcon
    href="#"
    label="Twitter"
    external
  >
    <FaTwitter size={18} />
  </SocialIcon>

</div>
        </div>

        {/* Gradient Divider */}
<div className="mt-8 h-px bg-gradient-to-r from-[#FF7A18]/60 to-[#FF4D00]/60" />
{/* Bottom Bar */}
<div
  className="
    pt-6
    flex
    flex-col
    sm:flex-row
    items-center
    justify-between
    gap-3
    text-xs
    text-gray-400
  "
>
  <p>
    © {new Date().getFullYear()} CareerHive. All rights reserved.
  </p>

  <div className="flex gap-5">
    <a
      href="#"
      className="
                       gradient-hover

      "
    >
      Privacy
    </a>

    <a
      href="#"
      className="
                       gradient-hover

      "
    >
      Terms
    </a>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;