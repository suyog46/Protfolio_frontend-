"use client";
import Image from "next/image";
import React from "react";
import { CarouselDemo } from "../Pjcarausel";
 export const DummyContent6 = () => {
  return (
    <>
    
    <div
      key={"dummy-content" }
      className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
    >
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto my-8">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
        A YouTube Clone Backend
        </span>{" "}
        built with Node.js and Express, featuring JWT authentication, video uploads, likes, 
        comments, and user profiles. It uses MongoDB for storage and provides Swagger API documentation
         <br />
      
      </p>
      <CarouselDemo imageCount={4} imagePrefix="img/pj6_"/>
      <p className=" leading-loose my-8 text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
     
<br /><br />
<span className="font-bold text-neutral-700 dark:text-neutral-200">
      Tech Used:
      </span><br />
      <br />
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
<li><strong>Backend:</strong> Node.js, Express.js</li>
<li><strong>Database:</strong> MongoDB</li>
<li><strong>Authentication:</strong> JWT (JSON Web Token)</li>
<li><strong>Documentation:</strong> Swagger</li>
</ul>
<br /><br />
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
      Github Link:        </span>
      <br /><br />

<a href="https://github.com/suyog46/youtubeClone" className="text-white">
https://github.com/suyog46/youtubeClone  </a>
    
      <br /><br />

</p>

        </div>


</>
  );
};