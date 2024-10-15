"use client";

import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-scroll";

const LoadingBar = () => (
  <div className="lds-facebook">
    <div></div>
    <div></div>
    <div></div>
  </div>
);

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (!isClient) {
    return (
      <div className="flex justify-center">
        <LoadingBar />
      </div>
    );
  }

  return (
    <div className="navbar flex fixed top-0 right-0 left-0 z-20 backdrop-blur justify-between items-center max-w-7xl mx-auto py-6 px-8">
      <div className="flex cursor-pointer items-center justify-between w-full md:hidden">
        <div onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      <div
        className={`nav-links ${isMobileMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-9 items-center text-white md:static absolute bg-charcoal  md:bg-transparent w-full rounded-xl md:w-auto left-0 top-full md:top-0 p-6 md:p-0`}
      >
        <Link
          to="hero"
          spy={true}
          smooth={true}
          duration={499}
          offset={-101}
          onClick={() => setIsMobileMenuOpen(false)}
          activeClass="active bg-gradient-to-t"
          className="nav-item hover:bg-gradient-to-t from-slateBlue to-royalBlue rounded-lg px-3 py-1 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="technologies"
          spy={true}
          smooth={true}
          duration={499}
          offset={-101}
          onClick={() => setIsMobileMenuOpen(false)}
          activeClass="active bg-gradient-to-t"
          className="nav-item hover:bg-gradient-to-t from-slateBlue to-royalBlue rounded-lg px-3 py-1 cursor-pointer"
        >
          Technologies
        </Link>
        <Link
          to="experiences"
          spy={true}
          smooth={true}
          duration={499}
          offset={-101}
          onClick={() => setIsMobileMenuOpen(false)}
          activeClass="active bg-gradient-to-t"
          className="nav-item hover:bg-gradient-to-t from-slateBlue to-royalBlue rounded-lg px-3 py-1 cursor-pointer"
        >
          Experiences
        </Link>
        <Link
          to="education"
          spy={true}
          smooth={true}
          duration={499}
          offset={-101}
          onClick={() => setIsMobileMenuOpen(false)}
          activeClass="active bg-gradient-to-t"
          className="nav-item hover:bg-gradient-to-t from-slateBlue to-royalBlue rounded-lg px-3 py-1 cursor-pointer"
        >
          Education
        </Link>
      </div>

      <div className="social-links flex flex-row gap-5 items-center text-white">
        <a
          href="https://github.com/M4095M"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-301"
        >
          <FaGithub size={23} />
        </a>
        <a
          href="https://linkedin.com/in/mohamed-abdennour-morsli"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-301"
        >
          <FaLinkedin size={23} />
        </a>
        <a
          href="mailto:mohamed_abdennour.morsli@g.enp.edu.dz"
          className="hover:text-gray-301"
        >
          <FaEnvelope size={23} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
