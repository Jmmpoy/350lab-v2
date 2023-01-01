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

export default function Header() {
  const [open, setOpen] = useCycle(false, true);
  const menuItems = [{ route: "About", url: "/about" }];

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
      className=" w-full bg-black fixed flex flex-col justify-center z-20 h-[10vh]"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#scroll-container">
      <Container extraClasses="Header-Section ">
        <motion.div className="flex flex-row  h-full justify-between">
          <AnimateSharedLayout>
            <Link href="/" className="relative">
              <motion.a
                variants={fade}
                initial="initial"
                animate="enter"
                exit="exit"
                className="mr-4 text-xl  uppercase self-center font-neueBold cursor-pointer">
                350lab©
              </motion.a>
            </Link>
          </AnimateSharedLayout>

          <motion.ul
            variants={delayedFade}
            initial="initial"
            animate="enter"
            exit="exit"
            className="sm:basis-1/2">
            <Navigation items={menuItems} />
          </motion.ul>

          <motion.ul
            variants={delayedFade}
            initial="initial"
            animate="enter"
            exit="exit"
            className=" block sm:hidden sm:basis-1/2">
            <Burger />
          </motion.ul>
        </motion.div>
      </Container>
    </header>
  );
}
