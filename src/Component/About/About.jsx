import { NavHashLink } from "react-router-hash-link";
import { FaArrowRightLong } from "react-icons/fa6";
const About = () => {
  return (
    <div
      id="About"
      className="pb-8 bg-gradient-to-b from-gray-800 to-black text-white w-full h-full md:h-[80vh] px-1 md:px-6"
    >
      <div className="px-3 md:px-0 max-w-6xl mx-auto h-full">
        {/* title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl xl:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
            About Me
          </h2>
          <div className="mt-2 w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-md"></div>
        </div>
        <div className="space-y-4 pb-6">
          <p className="text-lg md:text-xl ">
            👋 Hello! I'm Soyaib Hossain , a passionate Web Developer
            specializing in the MERN (MongoDB, Express.js, React.js, Node.js)
            stack. With 1 years of hands-on experience in the development realm,
            I thrive on crafting innovative solutions and bringing ideas to life
            through code. <br></br>
          </p>
          <p className="text-xl">
            🚀 My expertise lies in harnessing the power of JavaScript and its
            associated technologies - ReactJs for dynamic front-end experiences,
            NodeJs and ExpressJs for robust server-side development, along with
            MongoDB for efficient and scalable database solutions. I am also in
            the learning zone of Typescript and NextJs.
          </p>
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
