import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { delayedFade } from "@/helpers/transitions";

function DateTime() {
  let time = new Date().toLocaleString();
  let [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  return (
    <motion.div
      variants={delayedFade}
      initial="initial"
      animate="enter"
      exit="exit"
      className="DateWrapper self-center">
      <motion.li className="list-none uppercase text-base font-founders  ">
        {date.toLocaleTimeString()}
      </motion.li>
    </motion.div>
  );
}

export default DateTime;
