import React from 'react'
import { FileAudio, FileVideo, Images, LetterText } from 'lucide-react';
import Service from "./Service";


const services = [
  {
    href: "/text-detection",
    icon: <LetterText size="30" />,
    title: "Ai Generated Text Detection",
    description: "Candid Ai uses advanced algorithms to identify text as either AI-generated or human-made.",
  },
  {
    href: "#cta",
    icon: <Images size="30" />,
    title: "Ai Generated Image Detection",
    description: "Candid Ai image detection service uses advanced algorithms to identify AI-generated images",
  },
  {
    href: "#cta",
    icon: <FileAudio size="30" />,
    title: "Ai Generated Audio Detection",
    description: "Candid Ai audio detection service uses advanced algorithms to identify AI-generated Audio",
  },
  {
    href: "#cta",
    icon: <FileVideo size="30" />,
    title: "Ai Generated Video Detection",
    description: "Candid Ai video detection service uses advanced algorithms to identify AI-generated Videos",
  },
]
const Services = () => {
  return (
    <div className="text-white py-[72px] md:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl md:text-6xl tracking-tighter">
          Ai detection made easy
        </h2>
        <p className="mx-auto text-center mt-5 text-xl text-white/70">
          Our services to help you differenntiate between AI-generated and human-made content.
        </p>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
