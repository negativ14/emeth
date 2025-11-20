"use client";
import openAI from "@/src/assets/images/openai.png";
import granola from "@/src/assets/images/granola.png";
import oracle from "@/src/assets/images/oracle.png";
import helloPatient from "@/src/assets/images/hellopatient.png";
import character_AI from "@/src/assets/images/character.png";
import portola from "@/src/assets/images/portola.png";
import Image from "next/image";
import { motion } from "motion/react";

export default function LogoCloud() {
  const logos = [
    { title: "OpenAI", src: openAI },
    { title: "Granola", src: granola },
    { title: "Oracle", src: oracle },
    { title: "Hello Patient", src: helloPatient },
    { title: "Character AI", src: character_AI },
    { title: "Portola", src: portola },
  ];

  return (
    <section className="pt-20">
      <h2 className="max-w-xl text-neutral-600 dark:text-neutral-400 font-medium text-lg text-center mx-auto">
        Trusted by modern operators across industries.
        <span className="text-neutral-400 dark:text-neutral-500">
          From pilot to scale without choas
        </span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 max-w-3xl mx-auto pt-20 gap-6">
        {logos.map((logo, index) => (
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: -10,
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
            key={index}
          >
            <Image
              src={logo.src}
              alt={logo.title}
              height={100}
              width={100}
              className="size-10 object-contain mx-auto"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
