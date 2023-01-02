import React, { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/container";
import Link from "next/link";
import { fade, delayedFade } from "@/helpers/transitions";

export default function Hero({ message }) {
  const content = [
    { id: 1, text: "We provide digital" },
    { id: 2, text: "solutions to grow" },
    { id: 3, text: "your businesses" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 2,
        staggerChildren: 0.9,
        delayChildren: 0.2,
      },
    },
  };

  const [HeroAnimationIsDone, SetHeroAnimationIsDone] = useState(false);

  return (
    <Container extraClasses="Hero-Container relative ">
      <motion.main className=" h-[65vh] flex flex-col justify-center sm:h-[85vh]">
        <motion.div>
          {message == null ? (
            <motion.ul
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit">
              {content.map((item, index) => {
                const isGray = item.id === 3 ? "text-brown" : "text-offWhite";
                const isSecondLine = item.id === 2;
                const currentStatus = item.id === 4;
                return (
                  <motion.div key={index} className="overflow-hidden">
                    {currentStatus ? (
                      <motion.p
                        initial={{ y: `${70 * item.id}` }}
                        animate={{
                          y: 0,
                          transition: {
                            delay: 3,
                            duration: 1,
                            ease: "easeInOut",
                          },
                        }}
                        exit={{
                          y: 100,
                          transition: {
                            delay: `${0.1 * item.id}`,
                            duration: 0.8,
                            ease: "easeInOut",
                          },
                        }}
                        key={item.id}
                        className="text-[10px] font-foundersLight">
                        {item.text}
                      </motion.p>
                    ) : (
                      <motion.li
                        initial={{ y: `${70 * item.id}` }}
                        animate={{
                          y: 0,
                          transition: {
                            delay: `${0.2 * item.id}`,
                            duration: 1,
                            ease: "easeInOut",
                          },
                        }}
                        exit={{
                          y: 100,
                          transition: {
                            delay: `${0.1 * item.id}`,
                            duration: 0.8,
                            ease: "easeInOut",
                          },
                        }}
                        key={item.id}
                        className={` ${isGray}    about-font-size text-xl  mb-0 font-neueBold uppercase    xsm:text-3xl sm:mb-3   sm:text-5xl md:text-6xl`}>
                        {item.text}
                      </motion.li>
                    )}
                  </motion.div>
                );
              })}
            </motion.ul>
          ) : (
            <motion.div
              variants={fade}
              initial="initial"
              animate="enter"
              exit="exit">
              <motion.p
                className={`hero-font-size  mb-0 font-neueBold text-brown uppercase   xsm:text-3xl sm:mb-3   sm:text-5xl`}>
                This page does not exist.
              </motion.p>
              <Link href="/">
                <motion.a
                  className={` hero-font-size mb-0 font-neueBold text-brown uppercase xsm:text-3xl sm:mb-3 sm:text-5xl`}>
                  Clic here.
                </motion.a>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </motion.main>
      <motion.div
        variants={delayedFade}
        initial="initial"
        animate="enter"
        exit="exit"
        className="hero-arrow absolute bottom-[120px] right-10 rotate-[120deg]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="w-5 h-5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </motion.div>
    </Container>
  );
}
