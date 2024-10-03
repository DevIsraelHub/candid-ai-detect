"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import appScreen from "../assets/app-screen.jpeg"
import { motion, useScroll, useTransform } from "framer-motion";

const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  })

  const rotateX = useTransform(scrollYProgress, [0, 1], [16, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [.5, 1]);

  return (
    <div className="text-white bg-gradient-to-b from-black to-[#5d2cab] py-[72px] md:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl md:text-6xl tracking-tighter">The Intuitive User Interface</h2>
        <p className="max-w-xl mx-auto text-center mt-5 text-xl text-white/70">
          Ai detection made easy with Candid Ai easy to use dashboard.
        </p>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}>
          <Image
            src={appScreen}
            alt="Product Showcase"
            width={1000} height={1000}
            className="mt-14 mx-auto"
            ref={appImage}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default ProductShowcase
