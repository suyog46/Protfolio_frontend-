"use client";
import Image from "next/image";
import React from "react";
import { CarouselDemo } from "../Pjcarausel";
 export const DummyContent3 = () => {
  return (
   <>
    
          <div
            key={"dummy-content" }
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto my-8">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The Smart Compost Manure System
              </span>{" "}
               is an automated, AI-powered solution designed to optimize 
              the composting process while reducing environmental impact. By leveraging IoT, AI, sensors, 
              and real-time data analytics, the system ensures efficient decomposition of
               organic waste, captures methane gas, and promotes sustainable waste management practices..
               <br />
                <span className="font-bold text-neutral-700 dark:text-neutral-200 text-xl">
           Find the description Video at the bottom 
              </span>
            </p>
            <CarouselDemo imageCount={2} imagePrefix="img/pj2_"/>
            <p className=" leading-loose my-8 text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      

            The system automates compost monitoring using sensors to track temperature, humidity, and methane levels,
             ensuring optimal decomposition conditions. AI models analyze data, predict decomposition time, and provide smart
              recommendations, while an automated control system regulates aeration, moisture, and temperature. Users can operate
               in automatic or manual mode via a mobile app, which offers real-time monitoring, alerts, and control options.
             Additionally, methane is captured and stored for sustainable use in cooking, heating, or electricity generation.
<br /><br />
<p className="font-bold text-neutral-700 dark:text-neutral-200">
              My role in this project
              </p><br />
    <ul className="list-disc space-y-3">
    <li>Iot hardware handler-Connected different iot devices and made a full responsive device system</li>
    </ul>
<span className="font-bold text-neutral-700 dark:text-neutral-200">
            Tech Used:
            </span><br />
            <br />
            <h3 className="text-xl font-semibold mt-6">Backend (Node.js, Flask & MongoDB)</h3>
            <br />
<ul className="list-disc pl-6 space-y-3">
  <li><strong>Node.js & Express.js:</strong> Handles real-time communication and RESTful APIs.</li>
  <li><strong>Flask (Python):</strong> AI backend predicts the number of days required for complete decomposition.</li>
  <li><strong>MongoDB:</strong> Stores sensor data, user interactions, and composting statistics.</li>
  <li><strong>WebSocket:</strong> Enables real-time data updates between ESP32 and the mobile app.</li>
</ul>

<h3 className="text-xl font-semibold mt-6">IoT Integration (ESP32 & Sensors)</h3>
<br />
<ul className="list-disc pl-6 space-y-3">
  <li><strong>ESP32:</strong> Controls the fan and water pump based on sensor readings.</li>
  <li><strong>Sensors:</strong> Includes temperature, humidity, and gas sensors for environmental monitoring.</li>
  <li><strong>Communication:</strong> WebSocket enables real-time data transmission to the backend.</li>
</ul>

<h3 className="text-xl font-semibold mt-6">Frontend (Mobile App)</h3>
<br />
<ul className="list-disc pl-6 space-y-3">
  <li><strong>Features:</strong> Real-time monitoring, manual control of the pump/fan, and alert notifications.</li>
  <li><strong>Technologies:</strong> Built using cross-platform technologies for accessibility.</li>
</ul>

<br /><br />
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Github Link:        </span>
            <br /><br />

    <a href="https://github.com/suyog46/Smart_compost_manure_system" className="text-white">
    https://github.com/suyog46/Smart_compost_manure_system
    </a>
          
            <br /><br />

 </p>
 <span className="font-bold text-neutral-700 dark:text-neutral-200 text-2xl">
Demo Video:              </span>
<br />
<br />
 <video width="1050" height="360" controls>
                <source src='/video/Fertilizer.mp4' type="video/mp4" />
              </video>
              </div>

    
    </>
  );
};