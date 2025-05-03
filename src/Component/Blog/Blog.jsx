import React from "react";
import { blogData } from "./blogData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div id="Blogs" className="bg-gradient-to-b from-gray-800 via-black to-black py-10 px-3 md:px-6">
  <div className="max-w-6xl mx-auto">
    {/* Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
        Blog Posts
      </h2>
      <div className="mt-2 w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>
    </div>

    {/* Blogs */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {blogData.slice(0, 3).map((blog, index) => (
        <div
          key={index}
          className="bg-gray-900 shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
        >
          <img
            className="w-full h-56 md:h-72 object-cover"
            src={blog.image}
            alt="Blog Image"
          />
          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-300 hover:text-blue-500 transition duration-200">
              {blog.title}
            </h2>
            <div className="flex items-center gap-3 text-sm text-gray-400 mt-2">
              <p>{blog.date}</p>
              <p>|</p>
              <p>Comments: {blog.comments}</p>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              {blog.description.slice(0, 100)}...
            </p>
            <Link
              to={`/blog-details/${blog.id}`}
              className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
            >
              Read more →
            </Link>
          </div>
        </div>
      ))}
    </div>

    {/* See More Button */}
    <div className="flex justify-center mt-10">
      <Button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md text-white transition-all">
        <Link to={'/all-blogs'}>See More</Link>
      </Button>
    </div>
  </div>
</div>

  );
};

export default Blog;
