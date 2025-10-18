import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Add the smooth behavior to go to top
export const goToTop = () => {
  document.documentElement.style.scrollBehavior = "smooth";
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  // reset scroll behavior after scrolling
  setTimeout(() => {
    document.documentElement.style.scrollBehavior = "auto";
  }, 1000);
};

export default function ScrollToTop() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <AnimatePresence>
      {scrollPosition > 100 && (
        <motion.button
          onClick={goToTop}
          className="fixed bottom-10 right-10 w-10 h-10 rounded-full bg-white border-[.5px] border-black/40 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gray/65 group"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
          exit={{ y: 100, opacity: 0, transition: { duration: 0.6 } }}
          whileHover={{
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-black group-hover:stroke-white transition-colors duration-300"
          >
            <path
              d="M12 19V5M12 5L5 12M12 5L19 12"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
