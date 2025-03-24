"use client";
import Image from "next/image";
import React from "react";
import { CarouselDemo } from "../Pjcarausel";
 export const DummyContent4 = () => {
  return (
     <>
      
            <div
              key={"dummy-content" }
              className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto my-8">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Skillify 
                </span>{" "}
                 is the updated version of the Eduwe Learning Management System (LMS). 
                 This project marks the transition to a **React-based** frontend, making it the first React-based version of Eduwe.
                  Skillify aims to provide a more dynamic, user-friendly experience for managing courses, students, and instructors.
  
                 <br />
                  <span className="font-bold text-neutral-700 dark:text-neutral-200 text-xl">
             Find the description Video at the bottom 
                </span>
              </p>
              {/* <CarouselDemo imageCount={2} imagePrefix="img/pj2_"/> */}
  
              <CarouselDemo imageCount={9} imagePrefix="img/pj4_"/>
              <p className=" leading-loose my-8 text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        
  <br /><br />
  <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Tech Used:
              </span><br />
              <br />
              <h3 className="text-xl font-semibold mt-6">Backend (Node.js, Express.js & MySQL)</h3>
  <br />
  <ul className="list-disc pl-6 space-y-3">
    <li><strong>Node.js & Express.js:</strong> Handles backend logic and serves as the API server for Skillify, providing RESTful APIs to manage courses, students, and instructors.</li>
    <li><strong>MySQL:</strong> A relational SQL database used to store user data, course information, and other essential LMS data.</li>
    <li><strong>Multer:</strong> Handles file uploads for course materials, user documents, and other resources, allowing for smooth interaction with the LMS.</li>
  </ul>
  
  <h3 className="text-xl font-semibold mt-6">Frontend (React.js)</h3>
  <br />
  <ul className="list-disc pl-6 space-y-3">
    <li><strong>React.js:</strong> The frontend framework for building the user interface, making the Skillify platform dynamic and responsive.</li>
    <li><strong>React Router:</strong> Used to handle routing and navigation within the React application, enabling smooth transitions between different pages (e.g., courses, student dashboard, etc.).</li>
    <li><strong>Axios:</strong> Makes HTTP requests to the backend API, handling data fetching and submission for various features in the Skillify platform.</li>
  </ul>
  <br /><br />
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Github Link:        </span>
              <br /><br />
  
      <a href="https://github.com/suyog46/EDU-react-Project/" className="text-white">
      https://github.com/suyog46/EDU-react-Project/
      </a>
            
              <br /><br />
  
   </p>
   <span className="font-bold text-neutral-700 dark:text-neutral-200 text-2xl">
  Demo Video:              </span>
  <br />
  <br />
   <video width="1050" height="360" controls>
                  <source src='https://res.cloudinary.com/dilof1uox/video/upload/v1742803453/skiilify1_mhlbf8.mp4' type="video/mp4" />
                </video>
                </div>
  
      
      </>
  );
};