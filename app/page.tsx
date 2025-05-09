'use client'
import Aboutme from "@/components/Aboutme";
import Certificates from "@/components/Certificates";
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
<Certificates/>
    
    </>
  );
}
