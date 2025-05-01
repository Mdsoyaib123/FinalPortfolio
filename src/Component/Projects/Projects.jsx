import "./Projects.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import blood from "../../assets/screencapture-blood-donation-a244f-web-app-2023-12-16-23_16_38.png";
import sofiya from "../../assets/Sofiya hotel.png";
import bistro from "../../assets/Bistro boss.png";

import blood1 from "../../assets/blood1.png";
import Sofiya1 from "../../assets/Sofiya1.png";
import brand1 from "../../assets/Brand1.png";

const projectsData = [
  {
    title: "Sofiya Hotel",
    subtitle: "Room Booking Website",
    image: "Sofiya1",
    features: [
      "This is a MERN Stack Room Booking website",
      "Implement Login and Register system using Firebase Authentication",
      "User can book rooms and update or cancel bookings",
      "Technology: React, React Router, Tailwind, MongoDB, Express.js, Node.js, Private Route, Firebase Authentication, JWT",
    ],
    links: {
      live: "https://the-hotel-room.web.app",
      client: "https://github.com/Mdsoyaib123/Sofiya-Hotel",
      server: "https://github.com/Mdsoyaib123/Sofiya-Hotel-Server",
    },
    images: "blood1",
  },
  {
    title: "Blood Donation Website",
    description:
      "A full-stack Blood Donation platform enabling users to register/login (including Google authentication) and participate as donors or volunteers.",
    features: [
      "Role-based dashboards for Admins, Users, and Volunteers.",
      "Admins can block/unblock users and manage platform activity.",
      "Google authentication and custom account creation.",
      "Private routes and protected dashboard access.",
    ],
    techStack: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Authentication",
      "JWT",
    ],
    links: {
      live: "https://blood-donation-a244f.web.app",
      client: "https://github.com/Mdsoyaib123/Blood-Donation",
      server: "https://github.com/Mdsoyaib123/Blood-Donation-Server",
    },
    images: "blood1",
  },
];

const Projects = () => {
  return (
    <div
      id="Projects"
      className="bg-gradient-to-b from-gray-800 via-black to-black w-full   text-white px-3 md:px-6 xl:px-0 "
    >
      <div className="max-w-6xl mx-auto h-full  py-16 " id="projects">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold inline border-b-4  ">
          Projects
        </h1>

        <div className="py-20  ">
          <div className="flex flex-col gap-6 ">
            {/* project 1 */}

            <div className="md:flex gap-5 justify-between items-center w-full md:h-[450px] px-6 rounded py-4 md:py-0 hover:bg-slate-900 hover:cursor-pointer shadow-md  shadow-blue-500">
              <div className="md:w-1/2 md:flex items-center  ">
                <img
                  className="mt-6 md:mt-0 md:w-[400px] h-[400px] border-2 shadow shadow-blue-400 border-blue-400 rounded "
                  src={Sofiya1}
                  alt=""
                />
              </div>
              <div className="md:w-1/2 mt-7 md:mt-0 ">
                <ul className="mb-6">
                  <h1 className="text-2xl font-bold mb-1 ">Sofiya Hotel </h1>
                  <h4 className="text-sm font-semibold mb-6">
                    Room Booking Website
                  </h4>
                  <li className="flex items-center gap-2 mb-4">
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        class="text-2xl mr-3 text-blue-400"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                      </svg>
                    </span>{" "}
                    This is a MERN Stack Room Booking website
                  </li>
                  <li className="flex items-center gap-2 mb-4">
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        class="text-2xl mr-3 text-blue-400"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                      </svg>
                    </span>{" "}
                    Implement Login and Register system using Firebase
                    Authentication.
                  </li>
                  <li className="flex items-center gap-2 mb-4">
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        class="text-2xl mr-3 text-blue-400"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                      </svg>
                    </span>{" "}
                    Here , user can book room and can update , cancel the
                    booking room .
                  </li>
                  <li className="flex items-center gap-2 mb-4">
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        class="text-2xl mr-3 text-blue-400"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                      </svg>
                    </span>{" "}
                    Technology : React , React Router , Tailwind, MongoDB ,
                    Express.js , Node.js, Private route , Firebase
                    Authentication , Jwt etc
                  </li>
                </ul>
                <div className="flex gap-5 flex-wrap mb-6 md:mb-0">
                  <a href="https://the-hotel-room.web.app" target="_blank">
                    <button className="border border-blue-500 hover:bg-blue-500 shadow-2xl px-4 py-2 rounded-md text-sm">
                      Live link
                    </button>
                  </a>
                  <a
                    href=" https://github.com/Mdsoyaib123/Sofiya-Hotel"
                    target="_blank"
                  >
                    <button className="border  border-blue-500 hover:bg-blue-500 shadow-2xl px-4 py-2 rounded-md text-sm">
                      Client code
                    </button>
                  </a>
                  <a
                    href="https://github.com/Mdsoyaib123/Sofiya-Hotel-Server"
                    target="_blank"
                  >
                    <button className="border  border-blue-500 hover:bg-blue-500  px-4 py-2 rounded-md text-sm md:text-base">
                      Server code{" "}
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* project 2 */}
            <div className="md:flex gap-5 justify-between items-center w-full md:h-[450px] px-6 rounded py-4 md:py-0 hover:bg-slate-900 hover:cursor-pointer shadow-md  shadow-blue-500">
              <div className="md:w-1/2 md:flex items-center  ">
                <img
                  className="mt-6 md:mt-0 md:w-[400px] h-[400px] border-2 shadow shadow-blue-400 border-blue-400 rounded "
                  src={blood1}
                  alt=""
                />
              </div>
              <div className="md:w-1/2 mt-7 md:mt-0 ">
                <ul className="mb-6">
                  <h1 className="text-2xl font-bold mb-1 ">Blood Donation </h1>
                  <h4 className="text-sm font-semibold mb-6">
                    Blood Donation Website
                  </h4>
                  <li className="flex items-center gap-2 mb-4">
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        class="text-2xl mr-3 text-blue-400"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                      </svg>
                    </span>{" "}
                    This is a full stack Blood donation website
                  </li>
                  <li className="flex items-center gap-2 mb-4">
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        class="text-2xl mr-3 text-blue-400"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                      </svg>
                    </span>{" "}
                    Users need to login via Google (also can create a new
                    Account) .
                  </li>
                  <li className="flex items-center gap-2 mb-4">
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        class="text-2xl mr-3 text-blue-400"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                      </svg>
                    </span>{" "}
                    Have an Admin , User dashboard , Admin dashboard , Volunteer
                    dashboard. Admin can Block,Unblock the user .
                  </li>
                  <li className="flex items-center gap-2 mb-4">
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        class="text-2xl mr-3 text-blue-400"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                      </svg>
                    </span>{" "}
                    Technology : React , React Router , Tailwind, MongoDB ,
                    Express.js , Node.js, Private route , Firebase
                    Authentication , Jwt etc
                  </li>
                </ul>
                <div className="flex gap-5 flex-wrap mb-6 md:mb-0">
                  <a
                    href="https://blood-donation-a244f.web.app"
                    target="_blank"
                  >
                    <button className="border border-blue-500 hover:bg-blue-500 shadow-2xl px-4 py-2 rounded-md text-sm">
                      Live link
                    </button>
                  </a>
                  <a
                    href="https://github.com/Mdsoyaib123/Blood-Donation"
                    target="_blank"
                  >
                    <button className="border  border-blue-500 hover:bg-blue-500 shadow-2xl px-4 py-2 rounded-md text-sm">
                      Client code
                    </button>
                  </a>
                  <a
                    href="https://github.com/Mdsoyaib123/Blood-Donation-Server"
                    target="_blank"
                  >
                    <button className="border  border-blue-500 hover:bg-blue-500  px-4 py-2 rounded-md text-sm md:text-base">
                      Server code{" "}
                    </button>
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
