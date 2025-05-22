import { HashLink, HashLink as Link, NavHashLink } from "react-router-hash-link";
import { FaBars, FaBeer, FaTimes } from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id:1,
      link: 'Hero'
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Education",
    },
    {
      id: 4,
      link: "Skills",
    },
    {
      id: 5,
      link: "Projects",
    },
    {
      id: 6,
      link: "Blogs",
    },
    {
      id: 7,
      link: "Contact",
    },
  ];

  return (
    <div className="sticky top-0 z-50 bg-black bg-opacity-90 backdrop-blur-md text-white shadow">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      
      {/* Left: Logo */}
      <div className="flex-1">
        <Link to="/#Hero">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm logo">
            Soyaib
          </h1>
        </Link>
      </div>
  
      {/* Center: Links */}
      <ul className="hidden md:flex flex-1 justify-center space-x-8 text-gray-300">
        {links.map((link) => (
          <li key={link.id} className="group relative">
            <NavHashLink
              to={`/#${link.link}`}
              smooth
              duration={500}
              className="capitalize font-medium hover:text-white transition"
            >
              {link.link}
              <span className="block h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </NavHashLink>
          </li>
        ))}
      </ul>
  
      {/* Right: Resume Button */}
      <div className="flex-1 hidden lg:flex justify-end">
        <a
          href="https://drive.google.com/file/d/1YwEMvXNMsdNtWnZa6BcalbO8GAXMZwh2/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md text-white transition">
            Resume
          </button>
        </a>
      </div>
  
      {/* Mobile Toggle */}
      <div
        className="md:hidden text-gray-300 ml-4"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>
    </div>
  
    {/* Mobile Menu */}
    {nav && (
      <ul className="md:hidden flex flex-col items-center gap-6 bg-gradient-to-b from-black via-gray-900 to-gray-800 py-10 text-gray-300">
        {links.map((link) => (
          <NavHashLink
            key={link.id}
            to={`/#${link.link}`}
            smooth
            duration={500}
            onClick={() => setNav(false)}
            className="capitalize text-lg hover:text-blue-400"
          >
            {link.link}
          </NavHashLink>
        ))}
        <a
          href="https://drive.google.com/file/d/1YwEMvXNMsdNtWnZa6BcalbO8GAXMZwh2/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-white">
            Resume
          </button>
        </a>
      </ul>
    )}
  </div>
  
  
  );
};

export default Navbar;
