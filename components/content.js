import React, { useEffect } from "react";
import Container from "./container";
import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { delayedFade } from "@/helpers/transitions";

export default function content() {
  const services = [
    { id: 1, name: "Creative Direction" },
    { id: 2, name: "Digital Design" },
    { id: 3, name: "Brand Identity" },
    { id: 5, name: "Development" },
  ];

  const projects = [{ id: 1, name: "Coming Soon" }];

  function FadeInWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ margin: "70px" });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        className={` project border-t-[2px] border-offWhite border-opacity-5 h-32 md:h-48 flex justify-between items-center text-sm uppercase relative text-offWhite hover:text-brown  transition duration-700`}
        ref={ref}
        animate={controls}
        initial="hidden"
        exit="exit"
        transition={{ duration: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 20 },
        }}>
        {children}
      </motion.div>
    );
  }

  return (
    <Container extraClasses="Content-Container py-12 lg:py-32">
      <motion.p
        variants={delayedFade}
        initial="initial"
        animate="enter"
        exit="exit"
        className="text-base uppercase text-offWhite font-founders ">
        Services
      </motion.p>
      <motion.div className="h-full mt-4">
        {services.map((service, index) => {
          return (
            <FadeInWhenVisible key={`project-${service.id}`}>
              <a
                className={`  text-2xl  sm:text-4xl md:text-6xl lg:text-8xl font-neueBold tracking-tight   `}>
                {service.name}
              </a>

              <div className="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="w-10 h-10">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </FadeInWhenVisible>
          );
        })}
      </motion.div>
    </Container>
  );
}
