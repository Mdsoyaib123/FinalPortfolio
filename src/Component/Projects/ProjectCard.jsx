import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Adjust based on your setup

const ProjectCard = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="rounded-xl overflow-hidden shadow-xl bg-gray-900 border border-gray-800 hover:shadow-2xl transition duration-300 max-w-full"
    >
      {/* Image Section */}
      <div className="relative group aspect-video">
        <img
          src={data?.images[0]}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white text-lg sm:text-2xl font-semibold mb-2">
            {data.title}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-4 line-clamp-3">
            {data.description}
          </p>
          <Link to={`/project-details/${data.id}`}>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm sm:text-base">
              View Project
            </Button>
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="p-4 bg-gray-950"
      >
        <h3 className="text-white text-lg sm:text-xl font-bold mb-1">
          {data.title}
        </h3>
        <p className="text-gray-400 text-sm">{data.subtitle}</p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
