import { useState, useEffect } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  easeInOut,
} from "framer-motion";

export default function ScrollFadeOverlay() {
  const [windowHeight, setWindowHeight] = useState(0);
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  // Fade out progressivement entre 0 et 100vh de scroll
  const opacity = useTransform(scrollY, [0, windowHeight / 3], [1, 0]);

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 0, filter: "blur(0px)" }}
      transition={{ duration: 1, ease: easeInOut, delay: 1.5 }}
      style={{ opacity }}
      className="fixed inset-0 pointer-events-none z-50 flex items-end justify-center"
    >
      {/* Scroll indicator */}
      <div className="flex flex-col items-center">
        <h3 className="text-black text-[10px] font-ibm uppercase">
          Scroll to Explore
        </h3>
        {/* Container gris de la barre */}
        <div className="relative w-[1px] h-16 bg-gray-300">
          {/* Barre noire animée qui se déplace */}
          <motion.div
            className="absolute top-0 w-full bg-black"
            animate={{
              height: ["30%", "60%", "30%"],
              y: ["0%", "40%", "0%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
