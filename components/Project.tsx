"use client";
import Image from "next/image";
import React from "react";
import { CarouselDemo } from "./Pjcarausel";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { DummyContent5 } from "./Projects/DummyContent5";
import { DummyContent2 } from "./Projects/DummyContent2";
import { DummyContent3 } from "./Projects/DummyContent3";
import { DummyContent4 } from "./Projects/DummyContent4";
import { DummyContent6 } from "./Projects/DummyContent6";
import { DummyContent } from "./Projects/DummyContent";
import { DummyContent7 } from "./Projects/DummyContent7";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section id="project">
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        My Projects
      </h2>
      <Carousel items={cards} />
    </div>
    </section>
  );
}


const data = [
  {
    category: "Booking Management system(Team Project)",
    title: "Purohit",
    src: "/img/project_7.jpg ",
    content: <DummyContent7 />,
  },
  {
    category: "Learning Managmenet system",     
    title: "Edu we",
    src: "/img/project_1.jpg  ",
    content: <DummyContent />,
  },
  {
    category: "Iot(Team Project)",
    title: "Waste_Classifier",
    src: "/img/project_2.jpg ",
    content: <DummyContent2 />,
  },
  {
    category: "Iot(Team Project)",
    title: "Smart_compost_manure",
    src: "/img/project_3.jpg ",
    content: <DummyContent3 />,
  },
  {
    category: "Learning Management System",
    title: "Skillify",
    src: "/img/project_4.jpg ",
    content: <DummyContent4/>,
  },
  {
    category: "Chat System",
    title: "Chat Practice",
    src: "/img/project_5.jpg ",
    content: <DummyContent5 />,
  },
  {
    category: "Backend",
    title: "Youtube Clone",
    src: "/img/project_6.jpg ",
    content: <DummyContent6 />,
  }
];
