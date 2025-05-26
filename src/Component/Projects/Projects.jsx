import "./Projects.css";

import Sofiya1 from "../../assets/Sofiya1.png";
import Sofiya2 from "../../assets/Sofiya hotel.png";
import bookShop1 from "../../assets/book-shop.png";
import bookShop2 from "../../assets/boo-shop2.png";
import bookShop3 from "../../assets/book-shop-3.png";
import bookShop4 from "../../assets/book-shop4.png";
import tutorLink1 from "../../assets/tutor-link .png";
import tutorLink2 from "../../assets/tutorLink2.png";
import tutorLink3 from "../../assets/tutorLink3.png";
import tutorLink4 from "../../assets/tutor-link 4.png";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "./ProjectCard";

export const projectsData = [
  
  {
    id: 1,
    title: "TutorLink",
    subtitle: "Find the Right Tutor. Anytime. Anywhere",
    description:
      "A full-stack tutoring platform connecting students with qualified tutors. Students can browse subjects, book tutors, and leave reviews.Student can request the tutor and  Tutors can manage their bookings.",
    features: [
      "User authentication with role-based dashboards for Students, Tutors.",
      "Students can browse tutors by subject, view tutor profiles, and book sessions.",
      "Tutors can manage availability, bookings, and respond to student requests.",
      "Secure authentication using JWT stored in httpOnly cookies.",
      "Integrated payment system with Stripe and SSLCommerz.",
      "Booking history, review system, and protected routes for each role.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "RTK Query",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Stripe",
      "SSLCommerz",
    ],
    links: {
      live: "https://tutor-link-frontend-amber.vercel.app",
      client: "https://github.com/Mdsoyaib123/tutor-link-frontend",
      server: "https://github.com/Mdsoyaib123/tutor-link-backend",
    },
    images: [tutorLink4, tutorLink1, tutorLink2, tutorLink3],
  },
  {
    id: 2,
    title: "Book Shop",
    subtitle: "Online Bookstore for Every Genre",
    description:
      "A full-stack Book Shop platform where users can browse books, add them to cart, and place orders. Admins can manage inventory and view orders.",
    features: [
      "User authentication with role-based dashboards for Admin and user.",
      "Browse and search books by title, author, or category.",
      "Orders books with order history tracking.",
      "Admins can add, edit, delete books and manage all orders.",
      "Secure routes with JWT-based authentication.",
    ],
    techStack: [
      "React",
      "React Router",
      "TypeScript",
      "Tailwind CSS",
      "Redux-Toolkit",
      "RTK Query",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],
    links: {
      live: "https://book-shop-frontend-vert.vercel.app",
      client: "https://github.com/bdshakhawat/book-shop-frontend",
      server: "https://github.com/bdshakhawat/book-shop-backend",
    },
    images: [bookShop4, bookShop1, bookShop2, bookShop3],
  },
  {
    id: 3,
    title: "Sofiya Hotel",
    subtitle: "Modern Hotel Booking Made Easy",
    description:
      "A full-stack Hotel Booking platform where users can browse available rooms, book their stay, and manage their reservations. Admins can manage rooms, bookings, and user accounts.",
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
    features: [
      "MERN Stack-based hotel room booking system.",
      "Users can register and log in using Firebase Authentication (including Google Sign-In).",
      "Admins can manage room listings and monitor bookings.",
      "Protected routes for secure dashboard access.",
    ],
    links: {
      live: "https://the-hotel-room.web.app",
      client: "https://github.com/Mdsoyaib123/Sofiya-Hotel",
      server: "https://github.com/Mdsoyaib123/Sofiya-Hotel-Server",
    },
    images: [Sofiya1, Sofiya2],
  },
];

const reactProject = projectsData.filter(
  (item) => item.techStack[0] === "React"
);
const nextjsProject = projectsData.filter(
  (item) => item.techStack[0] === "Next.js"
);

const Projects = () => {
  return (
    <div
      id="Projects"
      className=" bg-gradient-to-b from-black via-black to-gray-800  w-full   text-white px-3 md:px-6 xl:px-0 "
    >
      <div className="max-w-6xl mx-auto h-full  py-16 " id="projects">
        <div className="text-center mb-12">
          <h2 className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
            Projects
          </h2>
          <div className="mt-2 w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-md"></div>
        </div>

        <div>
          <Tabs defaultValue="all" className="  w-full">
            <TabsList className="md:grid w-full max-w-[600px] mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-10 bg-gray-800 text-gray-400 gap-2 px-2">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white transition text-center py-2"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="react"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white transition text-center py-2"
              >
                React.js
              </TabsTrigger>
              <TabsTrigger
                value="next"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white transition text-center py-2"
              >
                Next.js
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="all"
              className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 "
            >
              {/* project */}
              {/* <div className=" md:flex gap-5 justify-between items-center w-full md:h-[450px] px-6 rounded py-4 md:py-0 hover:bg-slate-900 hover:cursor-pointer shadow-md  shadow-blue-500">
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
              </div> */}
              {projectsData.map((project, index) => (
                <ProjectCard data={project}></ProjectCard>
              ))}
            </TabsContent>
            <TabsContent
              value="react"
              className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-16 "
            >
              {reactProject.map((project, index) => (
                <ProjectCard data={project}></ProjectCard>
              ))}
            </TabsContent>
            <TabsContent
              value="next"
              className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-16 "
            >
              {nextjsProject.map((project, index) => (
                <ProjectCard data={project}></ProjectCard>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Projects;
