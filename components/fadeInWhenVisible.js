import React, {useEffect} from 'react'
import { useAnimation, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default   function FadeInWhenVisible({ children,style }) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ margin: "70px" });
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    const defaultStyle = "py-12  project border-t-[.5px] border-offWhite border-opacity-5  flex flex-col justify-between  text-sm uppercase relative text-offWhite hover:text-brown  transition-colors duration-500 ease-in-out";
    const containerStyle = style != null ? style : defaultStyle;
    return (
      <motion.div
        className={containerStyle}
        ref={ref}
        animate={controls}
        initial="hidden"
        exit="exit"
        transition={{ duration: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 20 },
        }}>
        {children}
      </motion.div>
    );
  }
