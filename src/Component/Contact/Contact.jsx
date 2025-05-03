import React from "react";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowRightLong } from "react-icons/fa6";
import Typewriter from "typewriter-effect";
import { IoLogoGithub } from "react-icons/io5";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nqtf3mk",
        "template_b35el9n",
        form.current,
        "9aMyJzchMZxwvTHT7"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
          toast.success("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="Contact"
      className="bg-gradient-to-b from-black via-black to-gray-800  w-full text-white py-16 px-4 xl:px-0"
    >
      <Toaster />
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
            Contact
          </h2>
          <div className="mt-2 w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-md"></div>
        </div>

        <div className="flex flex-col md:flex-row  gap-20 items-center">
          {/* Contact Info */}
          <div className="w-full md:w-1/2 space-y-6 flex flex-col gap-10">
            <div >
              <p className="text-gray-300 text-center md:text-start">
                Get in touch with me today! Whether you have a question,
                feedback, or just want to say hello, I would love to hear from
                you. Fill out the form and I will get back to you as soon as
                possible.
              </p>
            </div>

            <div className="  text-gray-300 ">
              <div className="flex items-center justify-center md:justify-start gap-4">
                <MdEmail size={20} className="text-blue-400" />
                <span className="hover:text-blue-500 transition cursor-pointer text-lg">
                  mdsoyaibsourav@gmail.com
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <IoLocation size={20} className="" />
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition cursor-pointer text-lg"
                >
                  Pabna, Bangladesh
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <FaPhoneAlt size={15} className="" />
                <span className="hover:text-red-500 transition cursor-pointer text-lg">
                  +8801319974055
                </span>
              </div>
            </div>

            <div className=" flex justify-center md:justify-start  gap-16   ">
            <a  href="https://www.facebook.com/mdsoyaib.hossain.77" target="_blank">
              <FaFacebook
                className="cursor-pointer hover:bg-blue-800 rounded-3xl"
                size={30}
              ></FaFacebook>
            </a>
            <a href="https://www.linkedin.com/in/md-soyaib-hossain-9b75a92a0" target="_blank">
              <FaLinkedin
                className="cursor-pointer hover:bg-blue-800 rounded-3xl"
                size={30}
              ></FaLinkedin>
            </a>
            <a href="https://github.com/Mdsoyaib123" target="_blank">
              <IoLogoGithub
                className="cursor-pointer hover:bg-blue-800 rounded-3xl"
                size={30}
              ></IoLogoGithub>
            </a>
          </div>

          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-white/5 p-6 rounded-lg shadow-xl backdrop-blur">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  type="text"
                  name="name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message..."
                  name="message"
                  rows="6"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
