import { HashLink, HashLink as Link, NavHashLink } from "react-router-hash-link";
import { FaBars, FaBeer, FaTimes } from "react-icons/fa";
import { useState } from "react";
import './Navbar.css'
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
      link: "Skill",
    },
    {
      id: 4,
      link: "Projects",
    },
    // {
    //   id: 5,
    //   link: "Education ",
    // },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <div className=" text-white w-full h-24 bg-black sticky top-0 z-10 px-3 md:px-0  ">
      <div className="flex justify-between py-6  max-w-6xl mx-auto  ">
        <div className="">
          <Link to={'/#Hero'}  className="cursor-pointer "><h1 className="text-5xl logo">Soyaib </h1></Link>
        </div>
        <ul className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <li
              key={link.id}
              className="text-gray-400 cursor-pointer px-4 hover:scale-105 capitalize font-medium duration-200 "
            >
              <NavHashLink to={`/#${link.link}`}  smooth duration={500} >{link.link}</NavHashLink>
            </li>
            
          ))}
           <a href="https://drive.google.com/file/d/1_RLQiOVoJBEQaJC_ok_Ih7J1_ubtz9yT/view?usp=sharing" target="_blank">   <button className=" w-fit px-6 rounded-md py-2 my-2 bg-blue-500"> Resume </button></a>
           
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-10 pr-5 text-gray-400 md:hidden "
        >
          {nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full py- bg-gradient-to-b from-black to-gray-800 text-gray-400 ">
            {links.map((link) => (
              <NavHashLink 
              to={`/#${link.link}`} smooth duration={500}
                key={link.id}
                className="px-4 py-2 hover:underline text-xl  cursor-pointer capitalize "
              >
                {link.link}
              </NavHashLink>
            ))}
            <a href="https://drive.google.com/file/d/1_RLQiOVoJBEQaJC_ok_Ih7J1_ubtz9yT/view?usp=sharing" target="blank">
              {" "}
              <button className=" w-fit px-6 text-white rounded-md py-3 my-2 bg-blue-500">
              
                Resume 
              </button>
            </a>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
