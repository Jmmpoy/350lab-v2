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

  const hours24 = date.getHours();
  const hours12 = hours24 % 12 || 12;
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const period = hours24 >= 12 ? "pm" : "am";

  return (
    <motion.div
      variants={delayedFade}
      initial="initial"
      animate="enter"
      exit="exit"
      className="DateWrapper self-center"
    >
      <motion.li className="list-none text-xs font-neueRegular flex items-center">
        <span>{hours12.toString().padStart(2, "0")}</span>
        <span className="animate-blink mx-[2px]">:</span>
        <span>{minutes}</span>
        <span className="ml-1 uppercase">{period}</span>
      </motion.li>
    </motion.div>
  );
}

export default DateTime;
