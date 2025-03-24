"use client";
import Image from "next/image";
import React from "react";
import { CarouselDemo } from "../Pjcarausel";
 export const DummyContent7= () => {
  return (
    <>
    
    <div
      key={"dummy-content" }
      className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto my-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
        Purohit
        </span>{" "}
 is a platform connecting customers (jajmans) with verified pandits for booking puja services. Users can register, book a pandit, or become one by completing a KYC process. Pandits receive booking requests, which they can accept or reject,
         while admins handle verification. Future plans include a payment gateway and an enhanced profile dashboard.
         <br />
      
      </p>
      <CarouselDemo imageCount={6} imagePrefix="img/pj7_"/>
      <p className=" leading-loose my-8 text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
     
<br /><br />
<p className="font-bold text-neutral-700 dark:text-neutral-200">
              My role in this project
              </p><br />
    <ul className="list-disc space-y-3">
      <li>Frontend developer-  built a seamless user experience using Next.js, React, and Tailwind CSS, ensuring smooth navigation, responsive UI, and efficient booking interactions.</li>
      <li>Web Designer- crafted a visually appealing and user-friendly interface using Tailwind CSS and Heroicons, focusing on clean design, intuitive navigation, and a seamless user experience.</li>
    </ul>

      <br />
      <br /><br />
<span className="font-bold text-neutral-700 dark:text-neutral-200">
  Tech Used:
</span><br />
<br />

<h3 className="text-xl font-semibold mt-6">Backend (Node.js, Express.js & MongoDB)</h3>
<br />
<ul className="list-disc pl-6 space-y-3">
  <li><strong>Node.js & Express.js:</strong> Handles backend logic, providing RESTful APIs for user authentication, bookings, and pandit management.</li>
  <li><strong>MongoDB:</strong> A NoSQL database used to store user profiles, bookings, and KYC verification data efficiently.</li>
  <li><strong>TypeScript:</strong> Ensures type safety and better maintainability in the backend codebase.</li>
</ul>

<h3 className="text-xl font-semibold mt-6">Frontend (Next.js & React)</h3>
<br />
<ul className="list-disc pl-6 space-y-3">
  <li><strong>Next.js:</strong> A React-based framework used for server-side rendering (SSR) and client-side navigation for a smooth user experience.</li>
  <li><strong>Heroicons:</strong> Provides a set of high-quality icons for a visually appealing interface.</li>
  <li><strong>Tailwind CSS:</strong> Used for styling to ensure a clean and modern UI design.</li>
</ul>

<h3 className="text-xl font-semibold mt-6">Other Integrations</h3>
<br />
<ul className="list-disc pl-6 space-y-3">
  <li><strong>Authentication & Role Management:</strong> Differentiates between admins, customers, and pandits for secure access control.</li>
  <li><strong>Payment Gateway (Upcoming):</strong> Will enable secure transactions for booking puja services.</li>
</ul>

<br /><br />
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
      Github Link:        </span>
      <br /><br />

<a href="https://github.com/Serve-Hub/Purohit_frontend" className="text-white">
https://github.com/Serve-Hub/Purohit_frontend </a>
    
      <br /><br />

</p>
<span className="font-bold text-neutral-700 dark:text-neutral-200 text-2xl">
Demo Video:              </span>
<br />
<br />
 <video width="1050" height="360" controls>
                <source src='https://res.cloudinary.com/dilof1uox/video/upload/v1742803419/purohit1_jhu1mb.mp4' type="video/mp4" />
              </video>
            

        </div>


</>
  );
};