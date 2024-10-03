"use client";

import helixImage from "../assets/helix2.png"
import emojiStarImage from "../assets/emojistar.png"
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export const CallToAction = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <div id="cta" ref={containerRef} className="text-white py-[72px] md:py-24 pb-[85px] md:pb-32 overflow-hidden relative">
      <div className="container max-w-[1200px] mx-auto px-5 relative">
        <motion.div
          style={{
            translateY,
            transformPerspective: "800px",
          }}
        >
          <Image src={helixImage} alt="Helix" className="absolute top-6 left-[calc(100%+14px)]" />
        </motion.div>
        <motion.div
          style={{
            translateY,
            transformPerspective: "800px",
          }}
        >
          <Image src={emojiStarImage} alt="emoji star" className="absolute -top-[120px] right-[calc(100%+4px)]" />
        </motion.div>
        <h2 className="text-center font-bold text-5xl md:text-6xl tracking-tighter">Get free early access</h2>
        <p className="max-w-lg mx-auto text-center mt-5 text-xl text-white/70">
          Subscribe now to get free early access to Candid Ai when we lauch next month.
        </p>
        <form action="" className="mt-10 flex flex-col gap-2.5 max-w-md mx-auto md:flex-row">
          <input
            type="text"
            placeholder="Your email address"
            className="w-full border border-white/20 px-4 flex-1 py-3 rounded-lg bg-white/5"
          />
          <button className="bg-white text-black h-12 px-5 rounded-lg">Join waitlist</button>
        </form>
      </div>
    </div>
  )
};
