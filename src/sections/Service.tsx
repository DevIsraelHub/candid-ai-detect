"use client";


import { animate, motion, useMotionTemplate, useMotionValue, ValueAnimationTransition } from "framer-motion";
import Link from "next/link";
import React, { useEffect } from 'react'

const Service = ({ title, description, icon, href }: { title: string; description: string; href: string; icon: React.ReactNode }) => {

  const tabRef = React.useRef<HTMLDivElement>(null);
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    const options: ValueAnimationTransition = {
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, []);


  return (
    <div className="relative border border-white/20 rounded-xl px-5 py-6 text-center md:flex-1">
      <motion.div
        className="absolute inset-0 -z-10 border-2 border-purple-400 rounded-xl"
        style={{ WebkitMaskImage: maskImage, maskImage }}></motion.div>
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-black">
        {icon}
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
      <Link href={href} className="">
        <button className={`font-medium h-12 w-full mt-6 rounded-lg z-50 cursor-pointer inset-0 ${href !== "#cta" ? "bg-purple-500 text-white" : "bg-white text-black"}`}>
          {href !== "#cta" ? "Detect" : "Join waitlist"}
        </button>
      </Link>
    </div>
  )
}

export default Service
