import React, { useState } from "react";
import { motion } from "framer-motion";
import { fade } from "@/helpers/transitions";

export default function Navigation({ items, activeIndex, setActiveIndex }) {
  const [AnimationIsDone, SetAnimationIsDone] = useState(false);

  const handleClick = (e, url, index) => {
    e.preventDefault();
    setActiveIndex(index);

    const targetId = url.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.nav className="flex items-center">
      <motion.ul
        variants={fade}
        initial="initial"
        animate="enter"
        exit="exit"
        className="navItems flex space-x-4 md:space-x-6"
      >
        {items.map(({ route, url }, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.li key={index} className="uppercase">
              <a
                href={url}
                onClick={(e) => handleClick(e, url, index)}
                className="relative group text-xs font-neueRegular tracking-tighter text-gray hover:text-black cursor-pointer"
              >
                <span>{route}</span>
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.nav>
  );
}
