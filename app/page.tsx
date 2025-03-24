'use client'
import Aboutme from "@/components/Aboutme";
import ContactForm from "@/components/Contact";
import Hero from "@/components/Hero";
import MaintenanceNotification from "@/components/MaintainceNotification";
import Navbar from "@/components/Navbar";
import { AppleCardsCarouselDemo } from "@/components/Project";


export default function Home() {
  
  return (
    <>
      <Navbar />
      {/* <MaintenanceNotification /> */}

      <Hero />
      <Aboutme />
      <AppleCardsCarouselDemo />
      <div className="flex flex-col gap-3 justify-center items-center m-5">
        <h1 className="lg:text-5xl text-2xl px-40 text-white text-center m-5 text-nowrap  ">
          Thank You for Visiting !
        </h1>
        <div className="flex gap-3 ">
        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
          <ContactForm />
        </div>
      </div>

      {/* <ContactForm/> */}
      {/* <StickyNotification/> */}
      {/* <ContactDetail/> */}
    </>
  );
}
