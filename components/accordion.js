import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PlusMinusButton from "./plusMinus";

function Accordion({ i, id, name, services }) {
  const [expanded, setExpanded] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = (event) => {
    setExpanded(id);
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <div className="flex">
      <motion.h3
        initial={false}
        onClick={toggleList}
        className={`w-[90%]  text-4xl  sm:text-4xl md:text-6xl lg:text-8xl font-neueBold tracking-tight mb-0 uppercase  `}
      >
        {name}
      </motion.h3>
      <PlusMinusButton toggleList={toggleList} id={id}/>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.ul className="mt-16">
              {services.map((service) => {
                const isFirst = service.id === 1 ? "mt-0" : "mt-4";
                return <motion.li className={`${isFirst} text-base sm:text-xl md:text2-xl  text-offWhite font-founders`} key={service.id}>{service.name}</motion.li>;
              })}
            </motion.ul>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}

export default Accordion;
