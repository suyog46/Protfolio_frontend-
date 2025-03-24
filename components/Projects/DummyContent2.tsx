"use client";
import Image from "next/image";
import React from "react";
import { CarouselDemo } from "../Pjcarausel";
 export const DummyContent2 = () => {
  return (
     <>
      
            <div
              key={"dummy-content" }
              className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto my-8">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Ecosort
                </span>{" "}
                is an AI-powered smart dustbin system that classifies waste into 
                degradable and non-degradable categories using machine learning and IoT components.
                 The project aims to promote efficient waste management and sustainability.
                 <br />
                  <span className="font-bold text-neutral-700 dark:text-neutral-200 text-xl">
             Find the description Video at the bottom 
                </span>
              </p>
              <CarouselDemo imageCount={3} imagePrefix="img/pj3_"/>
              <p className=" leading-loose my-8 text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        
  
  The system features Real-time Waste Classification, using an AI model to categorize waste as 
  biodegradable or non-biodegradable. A Smart Notification System alerts users via WebSockets when the bin is full. 
  The Automated Waste Disposal mechanism, powered by a servo motor, ensures proper waste separation. Users can monitor waste levels
   and history through a User Dashboard, while all waste classification records are securely stored in a Database.
  <br /><br />
  <p className="font-bold text-neutral-700 dark:text-neutral-200">
              My role in this project
              </p><br />
    <ul className="list-disc space-y-3">
      <li>Backend Developer-Websocket for real-time communication and api development</li>
      <li>Iot hardware handler-Connected different iot devices and made a full responsive device system</li>
    </ul>

<br /><br />
  <p className="font-bold text-neutral-700 dark:text-neutral-200">
              Tech Used:
              </p>
              <br />
              <ol className="list-decimal pl-5 space-y-4">
          <li>
            <strong>AI (ecosort-ai):</strong>
            <ul className="list-disc pl-5 space-y-3">
              <li>Python</li>
              <li>OpenCV</li>
              <li>TensorFlow/PyTorch</li>
              <li>Jupyter Notebook</li>
            </ul>
          </li>
          <li>
            <strong>Backend (ecosort-backend):</strong>
            <ul className="list-disc pl-5 space-y-3">
              <li>Node.js (Express.js)</li>
              <li>MongoDB</li>
              <li>WebSockets</li>
              <li>Serial Communication with Arduino</li>
            </ul>
          </li>
          <li>
            <strong>Frontend (ecosort-frontend):</strong>
            <ul className="list-disc pl-5 space-y-3">
              <li>React.js / Next.js</li>
              <li>WebSockets</li>
              <li>Tailwind CSS</li>
            </ul>
          </li>
          <li>
            <strong>Hardware:</strong>
            <ul className="list-disc pl-5 space-y-3">
              <li>Arduino</li>
              <li>Servo Motors</li>
              <li>Camera Module</li>
              <li>Ultrasonic Sensor</li>
            </ul>
          </li>
        </ol>
  <br /><br />
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Github Link           </span>
              <br /><br />
  
      <a href=" https://github.com/suyog46/ecoSort-Hackathon">
      https://github.com/suyog46/ecoSort-Hackathont
      </a>
            
              <br /><br />
  
   </p>
   <span className="font-bold text-neutral-700 dark:text-neutral-200 text-2xl">
  Demo Video:              </span>
  <br />
  <br />
   <video width="1050" height="360" controls>
                  <source src='/video/waste_classifier.mp4' type="video/mp4" />
                </video>
                </div>
  
      
      </>
  );
};