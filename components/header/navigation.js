import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "@/components/header/logo";
import { fade } from "@/helpers/transitions";
export default function Navigation({ items, activeIndex, setActiveIndex }) {
  const [AnimationIsDone, SetAnimationIsDone] = useState(false);

  return (
    <motion.nav className="self-baseline flex flex-end xsm:basis-1/2  md:flex items-center w-full  md:w-auto">
      <div className="flex">
        <motion.ul
          variants={fade}
          initial="initial"
          animate="enter"
          exit="exit"
          className=" navItems flex flex-end  space-x-4 self-center">
          {items.map(({ route, url }, index) => {
            const isActive = index === activeIndex;
            const isServices = route.url === "services";
            return (
              <motion.li key={index} class=" uppercase ">
                {isServices ? (
                  <a className="text-sm font-founders">
                    <span>{route}</span>
                  </a>
                ) : (
                  <Link href={url} class="relative">
                    <a className="text-sm font-founders">
                      <span>{route}</span>
                    </a>
                  </Link>
                )}
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </motion.nav>
  );
}
