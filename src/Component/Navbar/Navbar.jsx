import { HashLink as Link } from "react-router-hash-link";
import { FaBars, FaBeer, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "About",
    },
    {
      id: 2,
      link: "Skill",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Education ",
    },
    {
      id: 5,
      link: "Contact ",
    },
  ];

  return (
    <div className=" text-white w-full h-20 bg-black sticky top-0 z-10">
      <div className="flex justify-between py-6  max-w-6xl mx-auto  ">
        <div className="">
          <h1 className="text-5xl logo">Soyaib </h1>
        </div>
        <ul className="hidden md:flex ">
          {links.map((link) => (
            <li 
              key={link.id} 
              className="text-gray-400 cursor-pointer px-4 hover:scale-105 capitalize font-medium duration-200 "
            >
              {link.link}
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-10 pr-5 text-gray-400 md:hidden "
        >
          {nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full py-4 bg-gradient-to-b from-black to-gray-800 text-gray-400 ">
            {links.map((link) => (
              <li
                key={link.id}
                className="px-4 py-4 text-4xl  cursor-pointer capitalize "
              >
                {link.link}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
