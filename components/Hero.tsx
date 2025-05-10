"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";
import Contact from "./Contact";

const Hero = () => {
  return (
    <div className="lg:mt-0 mt-12 flex flex-col lg:flex-row bg-slate-950 h-[110vh] lg:h-[95vh] ">
      {/* Left Section */}
      <div className="   lg:mt-10 mt-40 flex flex-col justify-center items-center w-full lg:w-1/2 p-6 sm:p-8 space-y-6 lg:space-y-8 lg:h-full ">
        <LampContainer className="  flex flex-col items-center text-center space-y-4 sm:space-y-6 ">
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="  hidden lg:block mt-5 text-base sm:text-lg md:text-xl lg:text-3xl font-medium bg-clip-text bg-gradient-to-r from-gray-300 via-gray-400 to-white   leading-loose text-center max-w-xl px-4 "
          >
            <br />
          </motion.p>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-cyan-100    bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-medium tracking-tight text-transparent "
          >
            "Curious Learner  and
            <br />  Aspiring Full Stack Developer"
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="  mt-5 text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-emerald-400 bg-clip-text bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 shadow-md opacity-80 leading-loose text-center max-w-xl px-4"
          >
            {/* Transforming ideas into impactful digital experiences with elegant and efficient code.
             */}
            Crafting Real-World Solutions with Technology
          </motion.p>
          <div className="  flex lg:justify-center justify-between lg:gap-8 mt-8 gap-4 ">
            {" "}
            {/* This ensures the button is centered */}
            <Contact />
            <a
              href="File/SuyogLamsal_Resume.pdf" // replace with the actual resume file path
              download
              className="text-xs lg:text-normal border border-white   text-white py-2 px-4 rounded-lg hover:bg-transparent hover:border-emerald-400 hover:text-emerald-400 transition flex gap-2"
            >
              Download Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4 lg:size-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </LampContainer>
      </div>

      {/* Right Section with Background Image */}
      <div className="relative w-full lg:w-1/3 h-full  bg-slate-950 overflow-hidden">
        <img
          src="img/profile.png"
          alt=""
          className="w-full h-full object-cover opacity-70"
        />

        {/* Gradient overlay for small screens (from bottom to top) */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent " />

        {/* Gradient overlay for large screens */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent hidden lg:block" /> */}
      </div>
    </div>
  );
};

export default Hero;
