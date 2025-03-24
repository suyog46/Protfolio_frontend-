"use client";
import Image from "next/image";
import React from "react";
import { CarouselDemo } from "../Pjcarausel";
 export const DummyContent = () => {
  return (
    <>
       <p className="font-bold text-neutral-700 dark:text-neutral-200 text-lg text-end">
                
                  </p>
                  <br />
           <div
             key={"dummy-content" }
             className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
           >
             <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto my-8">
           
               <span className="font-bold text-neutral-700 dark:text-neutral-200">
                
             My first Project -
               </span>{" "}
               “EDUWE” is the learning management system that carries the motive of providing a 
               centralized platform for creating, delivering, and tracking learning materials and activities.
                It also facilitates online learning, tracking progress, and managing resources, contributing to a
                 more organized and accessible learning experience for both educators and learners.
                 <br />
                 <span className="font-bold text-neutral-700 dark:text-neutral-200 text-xl">
            Find the description Video at the bottom 
               </span>
 
             </p>
            <CarouselDemo imageCount={5} imagePrefix="img/pj1_"/>
             <p className=" leading-loose my-8 text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">The Learning Management System (LMS) holds significant importance in the field of education and training, impacting various stakeholders including educators, learners, and administrators.
             <br /><br />
             <span className="font-bold text-neutral-700 dark:text-neutral-200">
             Tech Used:
             </span><br />
             <ul style={{ listStyleType: "circle" }}>
               <br />
   <li>HTML, SCSS, and JS for Frontend</li>
   <br />
   <li>PHP for Backend</li>
 </ul>
 <br /><br />
             <span className="font-bold text-neutral-700 dark:text-neutral-200">
             Github Link           </span>
             <br /><br />
 
     <a href=" https://github.com/suyog46/LMS-project">
     https://github.com/suyog46/LMS-project
     </a>
           
             <br /><br />
 
  </p>
  <span className="font-bold text-neutral-700 dark:text-neutral-200 text-2xl">
 Demo Video:              </span>
 <br />
 <br />
  <video width="1050" height="360" controls>
                 <source src='https://res.cloudinary.com/dilof1uox/video/upload/v1742803458/eduwe1_imqhtt.mp4' type="video/mp4" />
               </video>
           </div>
     
     </>
  );
};