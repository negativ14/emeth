"use client";
import { motion } from "motion/react";
import Image from "next/image";
import hero1 from "@/src/assets/images/hero1.jpg";
import hero2 from "@/src/assets/images/hero2.jpg";
import { cn } from "../lib/utils";

export default function LandingImages() {
  return (
    <div className="relative min-h-72 sm:min-h-80 md:min-h-100 lg:min-h-140 w-full translate-x-10">
      <motion.div
        initial={{
          opacity: 0,
          y: -40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: "easeOut",
        }}
        className="perspective-[4000px]"
      >
        <Image
          src={hero1}
          width={1920}
          height={1080}
          alt="hero1 img"
          className={cn(
            "absolute inset-0 rounded-lg mask-r-from-5% mask-b-from-0.5 shadow-2xl border"
          )}
          style={{
            transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
          }}
        />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="perspective-[4000px] translate-x-5 -translate-y-5 md:translate-x-10 md:-translate-y-20"
      >
        <Image
          src={hero2}
          width={1920}
          height={1080}
          alt="hero2 img"
          className={cn(
            "absolute inset-0 rounded-lg mask-r-from-50% mask-b-from-50% shadow-2xl border-2"
          )}
          style={{
            transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
          }}
        />
      </motion.div>
    </div>
  );
}
