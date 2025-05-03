import React from "react";
import { blogData } from "./blogData";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id == id);

  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-gradient-to-b from-gray-900 via-black to-black min-h-screen text-gray-300 px-4 py-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
            <p>{blog.date}</p>
            <span>|</span>
            <p>{blog.comments} Comments</p>
          </div>

          {/* Featured Image */}
          <img
            src={blog.image}
            alt="Blog"
            className="w-full md:h-screen rounded-xl mb-8 shadow-lg"
          />

          {/* Content */}
          <div className="space-y-6 leading-relaxed text-lg text-gray-300">
            {blog.description.split("\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Author Section */}
          <div className="mt-12 border-t pt-6 border-gray-700 flex items-center gap-4">
            <img
              src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740"
              alt="Author"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-white">{blog.author}</p>
              <p className="text-gray-400 text-sm">Blog Author</p>
            </div>
          </div>

          {/* Comments Section (Static Placeholder) */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-4">Leave a Comment</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600"
              />
              <textarea
                rows="4"
                placeholder="Your comment"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BlogDetails;
