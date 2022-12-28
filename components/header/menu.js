import React from "react";
import { asideVariants } from "./animations";
import { slideInLeft, stagger } from "@/helpers/transitions";
import { motion } from "framer-motion";
export default function Menu({ open, items }) {
  return (
    <motion.aside
      variants={asideVariants}
      initial="closed"
      animate={open && "open"}
      exit="closed"
      className="bg-black text-white  w-full  font-sans px-10 md:hidden pt-20">
      <motion.ul
        variants={stagger}
        className="flex flex-col justify-start overflow-hidden ">
        {items.map(({ route, url }, index) => {
          return (
            <motion.li
              key={index}
              variants={slideInLeft}
              className="menu-overlay-item text-white text-1xl  md:text-2xl  ">
              {route}
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.aside>
  );
}
