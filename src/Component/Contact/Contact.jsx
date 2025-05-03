import React from "react";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { FaArrowRightLong } from "react-icons/fa6";
import Typewriter from "typewriter-effect";
import { IoLogoGithub } from "react-icons/io5";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_nqtf3mk', 'template_b35el9n', form.current, '9aMyJzchMZxwvTHT7')
      .then((result) => {
          console.log(result.text);
          console.log('message sent');
          e.target.reset();
          toast.success('Message sent successfully')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div
    id="Contact"
    className="bg-gradient-to-b from-black via-black to-gray-800  w-full text-white py-16 px-4 xl:px-0"
  >
    <Toaster />
    <div className="max-w-6xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-12">
          <h2 className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
            Contact
          </h2>
          <div className="mt-2 w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-md"></div>
        </div>
  
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Contact Info */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="flex items-center gap-4">
            <MdEmail size={28} className="text-blue-400" />
            <span className="hover:text-blue-500 transition cursor-pointer text-lg">
              mdsoyaibsourav@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <IoLocation size={28} className="text-green-400" />
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition cursor-pointer text-lg"
            >
              Pabna, Bangladesh
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt size={24} className="text-red-500" />
            <span className="hover:text-red-500 transition cursor-pointer text-lg">
              +8801319974055
            </span>
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
