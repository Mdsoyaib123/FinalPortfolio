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

const ProjectDetails = () => {
  const { id } = useParams();
  const data = projectsData.find((item) => item.id == id);

  return (
    <div className="">
      <Navbar></Navbar>
      <div className="bg-gradient-to-b from-gray-800 via-black to-black  h-full text-white px-3 md:px-6 xl:px-0">
        <div className="max-w-6xl  mx-auto p-4   pt-10 ">
          {/* Image Slider */}
          <div className="w-full">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 1500, disableOnInteraction: false }}
              className="rounded-2xl shadow-lg"
            >
              {data?.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-[400px] md:h-[80vh] object-cover rounded-2xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Text Content */}
          <div className="space-y-2 mt-10 ">
            <h2 className="text-3xl font-bold">{data.title}</h2>
            <p className="text-gray-600">{data.description}</p>

            <div>
              <h4 className="font-semibold text-lg">Features:</h4>
              <div className="list-disc list-inside text-gray-500">
                {data.features.map((item,index) => (
                  <p className="">{index} . {item}</p>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Tech Stack:</h4>
              <div className="list-disc list-inside text-gray-500">
                {data.techStack.map((item) => (
                  <span className="text-blue-600">{item} , </span>
                ))}
              </div>
            </div>
{/* buttons */}
<div className="flex flex-wrap gap-3 mt-6">
  <Link
    to={data.links.live}
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition text-sm sm:text-base"
  >
    Live Site
  </Link>
  <Link
    to={data.links.client}
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition text-sm sm:text-base"
  >
    GitHub Client Code
  </Link>
  <Link
    to={data.links.server}
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition text-sm sm:text-base"
  >
    GitHub Server Code
  </Link>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
