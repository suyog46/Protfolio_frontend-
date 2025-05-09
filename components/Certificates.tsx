import React from 'react';
import {
  TrophyIcon,
  ArrowRightIcon,
  DocumentTextIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";

import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
  } from "@/components/ui/animated-modal";
   
  import { motion } from "motion/react";
import CertificateCard from './CertificateCard';

function Certificates() {
    const certificates = [
        {
          imageUrl: "img/pj3_1.jpg",
          altText: "Best project Award",
          title: "Best Project Award",
          issuer: "Noskathon Lite 2025",
          description: "Awarded for demonstrating smart waste classifier in Noskathon Lite 2025 hackathon",
          issueDate: "2025",
          credentialId: "NSK-2025-042",
          imagePrefix:"img/pj3_",
          imageCount:3
        },
        {
            imageUrl: "img/pj2_1.jpg",
            altText: "Best project Award",
            title: "3rd Position",
            issuer: "Nepal TechnoFest 2025",
            description: " Awarded 3rd place in a Nepal Technofest hackathon for creating amobile app based smart compost manure management system ",
            issueDate: "2025",
            credentialId: "NSK-2025-042",
          imagePrefix:"img/pj2_",
          imageCount:2


          }, 
           {
            imageUrl: "img/pj8_1.jpg",
            altText: " Web Design Certificate",
            title: "Web Design Certificate",
            issuer: "Broaway Infosys",
            description: " Completed a comprehensive web design program covering UI/UX principles, responsive design, and modern design tools.",
            issueDate: "2024",
            credentialId: "NSK-2025-042",
          imagePrefix:"img/pj8_",
          imageCount:1
          },
      ];
  return (
    <section className="py-16 bg-slate-950 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Certifications <span className="text-emerald-400">&</span> Awards
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Recognized for excellence in my field
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Certificate Card 1 */}
          {certificates.map((cert, index) => (
            
        <CertificateCard key={index} {...cert} />
      ))}
       
        </div>

        {/* View All Button */}
        {/* <div className="mt-12 flex justify-center">
          <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-white font-medium flex items-center gap-2 transition-colors">
            View All Certifications
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div> */}
      </div>
    </section>
  );
}

export default Certificates;