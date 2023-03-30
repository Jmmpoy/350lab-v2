import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/container";
import Link from "next/link";
import {
  fade,
  delayedFade,
  container,
  heroLineReveal,
} from "@/helpers/transitions";
import Arrow from "./arrow";

export default function Hero({ message }) {
  const content = [
    { id: 1, text: "We provide digital" },
    { id: 2, text: "solutions to grow" },
    { id: 3, text: "your businesses" },
  ];

  let mainStyle = "h-[65vh] flex flex-col justify-center sm:h-[85vh]";
  let heroText =
    "about-font-size text-xl mb-0 font-neueBold uppercase    xsm:text-3xl sm:mb-3   sm:text-5xl md:text-6xl";
  let errorText =
    "hero-font-size cursor-pointer mb-0 font-neueBold uppercase  xsm:text-3xl sm:mb-3   sm:text-5xl";

  return (
    <Container extraClasses="Hero-Container relative">
      <motion.main className={mainStyle}>
        <motion.div>
          {message == null ? (
            <motion.ul
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              {content.map((item, index) => {
                const isGray = item.id === 3 ? "text-brown" : "text-offWhite";
                return (
                  <motion.div key={index} className="overflow-hidden">
                    <motion.li
                      custom={item.id}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={heroLineReveal}
                      key={item.id}
                      className={` ${isGray} ${heroText}`}
                    >
                      {item.text}
                    </motion.li>
                  </motion.div>
                );
              })}
            </motion.ul>
          ) : (
            <motion.div
              variants={fade}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <motion.p className={errorText}>
                This page does not exist.
              </motion.p>
              <Link href="/">
                <motion.a className={`${errorText} underline`}>
                  Clic here.
                </motion.a>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </motion.main>
      {message == null && (
        <motion.div
          variants={delayedFade}
          initial="initial"
          animate="enter"
          exit="exit"
          className="hero-arrow absolute bottom-[120px] right-10 rotate-[120deg]"
        >
          <Arrow size="w-8 w-8" />
        </motion.div>
      )}
    </Container>
  );
}
