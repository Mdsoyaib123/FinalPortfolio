import React from "react";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const Contact = () => {
  return (
    <div id='Contact' className="bg-gradient-to-b from-black via-black to-gray-800 w-full  text-white px-10 xl:px-0">
     
      <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold inline border-b-4  ">
        Contact
      </h1>
        <div className="flex justify-center items-center  py-16">
          <div className="w-1/2 flex-1  space-y-4">
            <p className="flex items-center gap-2">
              <MdEmail size={30} className="text-blue-400"></MdEmail>
              <span className="hover:text-red-500 cursor-pointer">
                mdsoyaibsourav@gmail.com
              </span>
            </p>
            <p className="flex items-center gap-2">
              <IoLocation size={30}></IoLocation>{" "}
              <a
                href="https://www.google.com/maps"
                target="_blank"
                className="hover:text-red-500 cursor-pointer"
              >
                Pabna, Bangladesh{" "}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt size={30} className="text-red-600"></FaPhoneAlt>{" "}
              <span className="hover:text-red-500 cursor-pointer">
                +8801319974055
              </span>
            </p>
          </div>
          <div className="w-1/2 flex-1">
            <form action="https://getform.io/f/dd3ecddf-dd12-4c77-a851-79c353ed1a45" method="POST" className="space-y-4">
              <input
                className="w-full py-2 px-4 rounded"
                placeholder="Your name"
                type="text"
                name="name"
              />
              <input
                className="w-full py-2 px-4 rounded"
                placeholder="Your email"
                type="email"
                name="email"
              />
              <textarea
                className="w-full px-4 rounded py-2"
                placeholder="Your message"
                name="message"
                cols="30"
                rows="10"
              ></textarea>
              <input className="w-full py-3 rounded bg-blue-600 cursor-pointer" type="submit" value="Submit"  />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
