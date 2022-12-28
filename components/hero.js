import React, { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/container";
import Link from "next/link";
import { fade } from "@/helpers/transitions";

export default function Hero({ message }) {
  // const content = [
  //   { id: 1, text: "Mpoy Jean-Marc" },
  //   { id: 2, text: "— front end developer" },
  //   { id: 3, text: "based in Nantes" },
  //   { id: 4, text: "*Curently working at Ucaya" },
  // ];

  const frenchContent = [
    { id: 1, text: "Mpoy Jean-Marc" },
    { id: 2, text: "— développeur web" },
    { id: 3, text: "basé à Nantes" },
    { id: 4, text: "*Travaille actuellement chez Ucaya" },
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
      <main className=" h-[65vh] flex flex-col justify-center">
        <motion.div>
          {message == null ? (
            <motion.ul
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit">
              {frenchContent.map((item, index) => {
                const isGray = item.id === 3 ? "text-gray" : "text-black";
                const isSecondLine = item.id === 2;
                const currentStatus = item.id === 4;
                return (
                  <div key={index} className="overflow-hidden">
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
                        className={` ${isGray} hero-font-size  mb-0 font-neueLight uppercase   xsm:text-3xl sm:mb-3   sm:text-5xl`}>
                        {item.text}
                      </motion.li>
                    )}
                  </div>
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
                className={`hero-font-size  mb-0 font-neueLight uppercase   xsm:text-3xl sm:mb-3   sm:text-5xl`}>
                Cette page n'existe pas.
              </motion.p>
              <Link href="/">
                <a
                  className={` hero-font-size mb-0 font-neueLight uppercase xsm:text-3xl sm:mb-3 sm:text-5xl`}>
                  Cliquez ici.
                </a>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </main>
    </Container>
  );
}
