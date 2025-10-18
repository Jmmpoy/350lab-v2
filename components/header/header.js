import { motion } from "framer-motion";
import HeaderLogo from "../headerLogo";
import Navigation from "./navigation";
import { useState } from "react";

export default function Header() {
  const Logofade = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: { duration: 0.4, delay: 0.9, ease: [0.83, 0, 0.17, 1] },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] },
    },
  };

  const items = [
    { route: "About", url: "#about" },
    { route: "Services", url: "#services" },
    { route: "Contact", url: "#contact" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <header
      className="w-full bg-white fixed flex flex-col justify-center z-20 h-14 inset-0"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#scroll-container"
    >
      <motion.div className="flex flex-row h-full justify-between items-center px-4 max-w-screen-3xl mx-auto w-full">
        <motion.a
          variants={Logofade}
          initial="initial"
          animate="enter"
          exit="exit"
          className="cursor-pointer"
        >
          <HeaderLogo size="w-16 h-16" />
        </motion.a>

        <Navigation
          items={items}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </motion.div>
    </header>
  );
}
