'use client'; // Ensure this is at the top
import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Expertlanguages from './Expertlanguage';

function AboutMe() {
  return (
    <section id="aboutme">
    <div className="about bg-slate-950 p-8 lg:p-16  overflow-hidden" id="about">
      <h1 className="text-5xl  text-start lg:text-center mb-10 text-emerald-400">About Me</h1>

        <Tabs defaultValue="account" className="w-full  ">
  <TabsList className='justify-center border text-xl p-8  '>
    <TabsTrigger value="account" className='text-xl'>Introduction</TabsTrigger>
    <TabsTrigger value="password" className='text-xl'>Skills</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    
      <div className=" flex flex-col lg:flex-row container gap-2 justify-center mt-10">
        {/* Image Section */}

        <div className="flex justify-center  lg:w-2xl items-center  ">
          <motion.img
            src="img/profile_2.jpg"
            alt="Profile"
            className="object-cover rounded-full w-72 h-72 max-w-sm "
            initial={{ x: -100, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }}
                        transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
          />
        </div>

        {/* Text Section */}
        <div className="  lg:w-xl leading-8 tracking-wide text-stone-400">
          <motion.div
            initial={{ x: 100, opacity: 0 }} // Start off-screen to the right
            whileInView={{ x: 0, opacity: 1 }} // Animate to original position
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: 'easeOut',
            }}
            className="mt-5 text-base sm:text-lg md:text-sm lg:text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 shadow-md opacity-80 leading-loose  max-w-xl  px-4 dark:text-white"
          >
            <p className="mb-4 mt-4 leading-loose">
Hi!Its me Suyog Lamsal! I'm passionate about creating smooth web experiences. I specialize in the MERN stack, building dynamic React apps and working on back-end development.            </p>

            <p className="mb-4 leading-loose">
              I've been fortunate to work on numerous projects where I've honed my skills in both front and back-end systems. My journey doesn't stop there, as I'm currently expanding my backend knowledge and eagerly exploring IOt. 🎨
            </p>

            <p className='leading-loose'>
              If you're looking for someone who's adaptable, curious, and ready to take on new challenges, then let's connect! WE CAN BE THE START OF SOMETHING BIG. I'm always open to exciting opportunities and collaborations. 😊✨
            </p>
          </motion.div>
        </div>
      </div>
</TabsContent>
  <TabsContent value="password">

    <Expertlanguages/>
  </TabsContent>
</Tabs>
    </div>
    </section>
  );
}

export default AboutMe;
