"use client";

import acmeLogo from "../assets/logo-acme.png";
import apexLogo from "../assets/logo-apex.png";
import celestialLogo from "../assets/logo-celestial.png";
import quantumLogo from "../assets/logo-quantum.png";
import pulseLogo from "../assets/logo-pulse.png";
import echoLogo from "../assets/logo-echo.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <section>
      <div className="container py-20 md:py-24">
        <div className="flex items-center gap-5 lg:gap-6">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>
          <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            >
              {[
                acmeLogo,
                apexLogo,
                celestialLogo,
                quantumLogo,
                pulseLogo,
                echoLogo,
                acmeLogo,
                apexLogo,
                celestialLogo,
                quantumLogo,
                pulseLogo,
                echoLogo
              ].map((logo, index) => (
                <Image key={index} width={100} height={100} src={logo.src} alt={logo.src} className="h6 w-auto" />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <span id="ai-detections" />
    </section>
  );
};
