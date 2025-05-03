import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import { projectsData } from "../Projects/Projects";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const ProjectDetails = () => {
  const { id } = useParams();
  const data = projectsData.find((item) => item.id == id);

  return (
    <div className="">
      <Navbar></Navbar>
      <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen px-4 md:px-8 py-10">
        <div className="max-w-6xl mx-auto">
          {/* Image Slider */}
          <div className="w-full mb-10 rounded-xl overflow-hidden shadow-2xl">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              className="rounded-xl"
            >
              {data?.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Project Screenshot ${index + 1}`}
                    className="w-full h-[400px] md:h-[80vh] object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Project Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-extrabold text-white mb-2">
                {data.title}
              </h2>
              <p className="text-gray-300 text-lg">{data.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">🚀 Features</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-400">
                {data.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-2xl font-semibold mb-2">🛠️ Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {data.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <Link
                to={data.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-green-600 hover:bg-green-700 transition rounded-lg text-white font-medium text-sm sm:text-base"
              >
                🌐 Live Site
              </Link>
              <Link
                to={data.links.client}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gray-800 hover:bg-gray-700 transition rounded-lg text-white font-medium text-sm sm:text-base"
              >
                🧩 GitHub Client
              </Link>
              <Link
                to={data.links.server}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gray-800 hover:bg-gray-700 transition rounded-lg text-white font-medium text-sm sm:text-base"
              >
                🔧 GitHub Server
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProjectDetails;
