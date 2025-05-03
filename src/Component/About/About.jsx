import { NavHashLink } from "react-router-hash-link";
import { FaArrowRightLong } from "react-icons/fa6";
const About = () => {
  return (
    <div
      id="About"
      className="pb-8 bg-gradient-to-b from-gray-800 to-black text-gray-200 w-full h-full md:h-[80vh] px-1 md:px-6"
    >
      <div className="px-3 md:px-0 max-w-6xl mx-auto h-full">
        {/* title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
            About Me
          </h2>
          <div className="mt-2 w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-md"></div>
        </div>
        <div className="space-y-4 pb-6">
          <p className="text-lg md:text-xl ">
            👋 Hello! I'm Soyaib Hossain , a passionate Web Developer
            specializing in the MERN stack. With 2 years of learning experience in the development realm,
            I thrive on crafting innovative solutions and bringing ideas to life through code. Currently I am study on Diploma in Engineering in Compute Science <br></br>
          </p>
          <p className="text-xl">
            🚀 My expertise lies in harnessing the power of JavaScript and its
            associated technologies . I build so many project using the technology. I'm always exploring new tools and frameworks to sharpen my skills and stay ahead in the fast-paced world of web development.  

          </p>
          {/* <p className="text-lg md:text-xl">
            Hi, I’m a passionate and detail-oriented web developer with a strong
            focus on creating clean, user-friendly, and responsive websites and
            web applications. I enjoy turning ideas into reality using modern
            technologies like HTML, CSS, JavaScript, React, and Node.js.
            Currently pursuing a Diploma in Computer Technology, I’ve built
            several projects that reflect my growing expertise in front-end and
            back-end development. I’m always eager to learn new tools, follow
            best practices, and stay updated with the latest trends in web
            development. Whether it’s designing a landing page, developing a
            dynamic web app, or solving coding challenges, I’m committed to
            writing efficient, maintainable code that brings real value.
          </p> */}
        </div>
        <div className="flex justify-center">
          <NavHashLink
            to="/#Projects"
            smooth
            duration={500}
            className="group flex justify-center items-center gap-2 w-fit px-6 py-3 my-2 rounded-md bg-blue-600 cursor-pointer"
          >
            Portfolio{""}
            <span className="group-hover:rotate-90 duration-300">
              <FaArrowRightLong></FaArrowRightLong>
            </span>
          </NavHashLink>
        </div>
      </div>
    </div>
  );
};

export default About;
