import autoprefixer from "autoprefixer";
import sourav1 from "../../assets/sourav1.jpg";
import soyaib from '../../assets/soyaib.jpg'
import sourav from '../../assets/sourav.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
import Typewriter from "typewriter-effect";
import { IoLogoGithub } from "react-icons/io5";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import './Banner.css'
const Banner = () => {
  return (
    <div
      name="banner"
      className="h-full md:h-screen  bg-gradient-to-b from-black via-black to-gray-800"
      id="about"
    >
      <div className="flex flex-col  justify-between items-center max-w-6xl mx-auto h-full   md:flex-row  ">
        <div className="flex items-center gap-10 flex-1   my-10 md:my-10">
          <div className="hidden md:flex flex-col gap-7 px-6">
            <a href="https://www.facebook.com/mdsoyaib.hossain.77">
              <FaFacebook
                className="cursor-pointer hover:bg-blue-800 rounded-3xl"
                size={25}
              ></FaFacebook>
            </a>
            <a href="https://www.linkedin.com/in/md-soyaib-hossain-9b75a92a0">
              <FaLinkedin
                className="cursor-pointer hover:bg-blue-800 rounded-3xl"
                size={25}
              ></FaLinkedin>
            </a>
            <a href="https://github.com/Mdsoyaib123">
              <IoLogoGithub
                className="cursor-pointer hover:bg-blue-800 rounded-3xl"
                size={25}
              ></IoLogoGithub>
            </a>
          </div>
          <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"> Hi , I am Soyaib Hossain </h1>
            <h2 className="flex items-center gap-2 text-xl md:text-2xl lg:text-3xl   font-bold">
              I'm a_{" "}
              <span className="text-green  ">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Font End Developer ")
                      .pauseFor(500)
                      .deleteAll()
                      .typeString("React Developer")
                      .pauseFor(500)
                      .deleteAll()
                      .typeString("Full Stack Developer")
                      .start(autoprefixer);
                  }}
                />
              </span>
            </h2>
            <p className="max-w-md text-xl  text-gray-400">
            Motivated and Enthusiastic Web Developer. <br></br>
              Seeking Opportunities to Grow and Learn.
            </p>
            <div className="flex  gap-5">
              <button className="group flex items-center gap-2 w-fit px-6 py-3 my-2 rounded-md bg-gradient-to-t from-cyan-500 to-blue-500 cursor-pointer">
                Contact{""}
                <span className="group-hover:rotate-90 duration-300">
                  <FaArrowRightLong></FaArrowRightLong>
                </span>
              </button>
           
            </div>
          </div>
        </div>
        <div className="flex-1" >
          <img id="img" className="rounded-2xl  mx-auto  border-gray-400 border-4 " src={sourav} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
