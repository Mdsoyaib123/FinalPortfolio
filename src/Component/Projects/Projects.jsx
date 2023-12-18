import './Projects.css'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import blood from '../../assets/screencapture-blood-donation-a244f-web-app-2023-12-16-23_16_38.png'
import sofiya from '../../assets/Sofiya hotel.png'
import bistro from '../../assets/Bistro boss.png'
const Projects = () => {
  return (
    <div
      id="Projects"
      className="bg-gradient-to-b from-gray-800 via-black to-black w-full h-full text-white md:h-screen px-10 xl:px-0"
    >
      <div className="max-w-6xl mx-auto h-screen py-16" id="projects">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold inline border-b-4  ">
          Projects
        </h1>

        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols- 2 lg:grid-cols-3 justify-center items-center gap-12 lg:gap-6 ">
            <div className='port-box'>
              <div className='port-image flex justify-center items-center '>
              <img
                className=" object-cover"
                src={blood}
                alt=""
              />
              </div>
              <div className='port-content'>
                <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-5xl">
                  Blood Donation {" "}
                </h1>
                <p className='pb-4'>It is a blood management system . Here ,people can find blood donor and they donate blood </p>
                <div className='flex gap-10 justify-center items-center'>
                  <a href="https://blood-donation-a244f.web.app/" target='_blank'><FaExternalLinkAlt size={30}></FaExternalLinkAlt></a>
                  <a href="https://github.com/Mdsoyaib123/Blood-Donation" target='_blank'><FaSquareGithub size={30}></FaSquareGithub></a>
                </div>
              </div>
            </div>
            <div className='port-box'>
              <div className='port-image'>
              <img
                className="h-56 object-cover"
                src={sofiya}
                alt=""
              />
              </div>
              <div className='port-content'>
                <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-5xl">
                  Sofiya Hotel {" "}
                </h1>
                <p className='pb-4'>It is Hotel room booking system .People can book room and enjoy life . </p>
                <div className='flex gap-10 justify-center items-center'>
                  <a href="https://the-hotel-room.web.app/" target='_blank'><FaExternalLinkAlt size={30}></FaExternalLinkAlt></a>
                  <a href="https://github.com/Mdsoyaib123/Sofiya-Hotel" target='_blank'><FaSquareGithub size={30}></FaSquareGithub></a>
                </div>
              </div>
            </div>
            <div className="port-box">
              <div className='port-image'>
              <img
                className="h-56 object-cover "
                src={bistro}
                alt=""
              />
              </div>
              <div className="port-content">
                <h1 className="text-lg md:text-xl lg:text-2xl xl:text-4xl  ">
                  Bistro Boss {" "}
                </h1>
                <p className='pb-4'> It is restaurants Management project.Here, people can order food and they can pay money </p>
                <div className='flex gap-10 justify-center items-center'>
                  <a href="https://bistro-boss-c6182.web.app/" target='_blank' ><FaExternalLinkAlt size={30}></FaExternalLinkAlt></a>
                  <a href="https://github.com/Mdsoyaib123/Bistro-Boss" target='_blank'><FaSquareGithub size={30}></FaSquareGithub></a>
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
