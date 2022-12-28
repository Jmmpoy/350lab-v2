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
  AnimatePresence,
  useAnimation,
  useCycle,
} from "framer-motion";
import { delayedFade } from "@/helpers/transitions";
import DateTime from "../dateTime";

export default function Header() {
  const [open, setOpen] = useCycle(false, true);
  const menuItems = [{ route: "Infos", url: "/about" }];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [open]);

  const asideVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.79, 0.14, 0.15, 0.86],
      },
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 0.9,
        ease: [0.79, 0.14, 0.15, 0.86],
        when: "afterChildren",
      },
    },
  };

  return (
    <header
      className="bg-white fixed  w-full  flex flex-col justify-center pt-2 z-10"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#scroll-container">
      <Container extraClasses="Header-Section ">
        <motion.div className="flex flex-col  h-full sm:justify-between   sm:flex-row">
          <AnimateSharedLayout>
            <Navigation items={menuItems} />
          </AnimateSharedLayout>

          <motion.ul
            variants={delayedFade}
            initial="initial"
            animate="enter"
            exit="exit"
            className=" hidden  sm:block sm:basis-1/2">
            <DateTime />
          </motion.ul>
        </motion.div>
      </Container>
    </header>
  );
}
