import FancyLink from "@/components/fancyLink";
import Container from "@/components/container";
import Navigation from "./navigation";
import OverlayMenu from "./menu";
import Link from "next/link";
import Burger from "./burger";
import Logo from "@/components/header/logo";
import { useState, useEffect } from "react";
import {
  motion,
  AnimateSharedLayout,
  useAnimation,
  useCycle,
} from "framer-motion";
import { fade, delayedFade } from "@/helpers/transitions";
import DateTime from "../dateTime";
import HeaderLogo from "../headerLogo";

export default function Header() {

  const Logofade = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: { duration: 0.4, delay: .9, ease: [0.83, 0, 0.17, 1] },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] },
    },
  };

  return (
    <header
      className=" w-full bg-black fixed flex flex-col justify-center z-20 h-[10vh]"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#scroll-container"
    >
      <Container extraClasses="Header-Section ">
        <motion.div className="flex flex-row  h-full justify-between">
          <AnimateSharedLayout>
          <motion.a
                variants={Logofade}
                initial="initial"
                animate="enter"
                exit="exit"
                className="cursor-pointer"
              >
                <HeaderLogo />
              </motion.a>
          </AnimateSharedLayout>
        </motion.div>
      </Container>
    </header>
  );
}
