import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="shadow-lg shadow-slate-600 rounded-lg overflow-hidden max-w-full"
    >
      {/* Image Container */}
      <div
        key={data.title}
        className="relative w-full h-64 sm:h-72 md:h-80 lg:h-[350px] aspect-video rounded-t-lg overflow-hidden group cursor-pointer"
      >
        {/* Image with hover zoom */}
        <img
          src={data?.images[0]}
          alt="Card"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-4 space-y-1 text-gray-400">
          <h1 className="text-lg sm:text-xl font-bold text-center">{data.description}</h1>
          <Link to={"/project-details"}>
            <Button className="text-white bg-blue-600 text-base sm:text-lg hover:scale-105 transition-transform duration-300">
              View Project
            </Button>
          </Link>
        </div>
      </div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="px-4 py-3 sm:py-4 space-y-1 sm:space-y-1"
      >
        <h1 className="text-lg sm:text-xl font-bold">{data.title}</h1>
        <p className="text-sm sm:text-base text-gray-400">{data.subtitle}</p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
