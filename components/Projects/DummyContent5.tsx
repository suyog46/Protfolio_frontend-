"use client";
import Image from "next/image";
import React from "react";
import { CarouselDemo } from "../Pjcarausel";
 export const DummyContent5 = () => {
  return (
    <>
    
          <div
            key={"dummy-content" }
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto my-8">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              This project is a
              </span>{" "}
               full-stack web application that allows users to choose between a Notification System or a Chat System.
               The app uses Socket.IO for real-time communication and is built with Next.js for the frontend and Node.js for the backend

               <br />
                <span className="font-bold text-neutral-700 dark:text-neutral-200 text-xl">
           Find the description Video at the bottom 
              </span>
            </p>

            <CarouselDemo imageCount={2} imagePrefix="img/pj5_"/>
            <p className=" leading-loose my-8 text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            The system features a real-time notification system with customizable types (info, warning, error, success),
             allowing users to view and dismiss alerts, and a real-time chat system for instant messaging between users.
              Both functionalities are integrated into a professional tab-based UI,
             enabling seamless navigation between notifications and chat for an enhanced user experience.
<br /><br />
<span className="font-bold text-neutral-700 dark:text-neutral-200">
            Tech Used:
            </span><br />
            <br />
            <h3 className="text-xl font-semibold mt-6">Frontend</h3>
<br />
<ul className="list-disc pl-6 space-y-3">
  <li><strong>React:</strong> A JavaScript library for building user interfaces, powering the dynamic components of the Skillify platform.</li>
  <li><strong>Next.js:</strong> A React framework for building server-side rendered and static web applications, ensuring optimal performance and SEO.</li>
  <li><strong>Tailwind CSS:</strong> A utility-first CSS framework used to design a responsive, modern, and customizable UI for the platform.</li>
  <li><strong>Socket.IO-client:</strong> Enables real-time communication between the client and the server, allowing for live updates and notifications.</li>
</ul>

<h3 className="text-xl font-semibold mt-6">Backend</h3>
<br />
<ul className="list-disc pl-6 space-y-3">
  <li><strong>Node.js:</strong> A JavaScript runtime for building scalable server-side applications and handling asynchronous requests.</li>
  <li><strong>Express.js:</strong> A minimalist web framework for Node.js, simplifying the creation of APIs and handling routes and middleware.</li>
  <li><strong>Socket.IO:</strong> A library that enables real-time, bidirectional communication between the client and server, used for live notifications and updates in Skillify.</li>
</ul>
<br /><br />
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Github Link:        </span>
            <br /><br />

    <a href="https://github.com/suyog46/Real-time-communication" className="text-white">
    https://github.com/suyog46/Real-time-communication    </a>
          
            <br /><br />

 </p>
 <span className="font-bold text-neutral-700 dark:text-neutral-200 text-2xl">
Demo Video:              </span>
<br />
<br />
 <video width="1050" height="360" controls>
                <source src='/video/chat.mp4' type="video/mp4" />
              </video>
              </div>

    
    </>
  );
};