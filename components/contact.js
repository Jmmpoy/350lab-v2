import { useRef, useEffect } from "react";
import Layout from "@/components/layout";
import Header from "@/components/header/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import FancyLink from "@/components/fancyLink";
import { fade, delayedFade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Arrow from "./arrow";

export default function Contact() {
  const content = [
    {
      id: 1,
      text: "We're always interested to hear about new projects, so please feel free to reach out  below if you'd like to collaborate with us.",
    },
    
  ];

  function FadeInWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ margin: "70px" });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        exit="exit"
        transition={{ duration: 0.9, ease: "easeInOut" }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 50 },
        }}>
        {children}
      </motion.div>
    );
  }
  return (
    <Container extraClasses="Content-Container border-solid border-t-[2px] border-offWhite border-opacity-5 relative py-12 lg:pt-48 overflow-hidden">
      <motion.div className="flex flex-col content-center h-full md:grid md:grid-cols-4">
        <motion.p
          variants={delayedFade}
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 text-xl uppercase text-offWhite font-founders  underline-offset-4 ">
          Contact Us
        </motion.p>
        <motion.div className="md:col-start-2 md:col-span-3 lg:col-span-2">
          {content.map((item, index) => {
            const isFirst = item.id === 1 ? "mt-0" : "mt-8";
            return (
              <FadeInWhenVisible>
                <motion.h3
                  key={item.id}
                  className={`${isFirst} hero-font-size font-founders    text-2xl  sm:text-3xl  md:text-5xl `}>
                  {item.text}
                </motion.h3>
               <div className="flex">
                <motion.a href="mailto:Didier.mumengi@gmail.com" className={`${isFirst} font-founders font-bold uppercase  text-sm xsm:text-xl  md:text-2xl `}>Email us</motion.a>
                <Arrow size="w-8 w-8" style="self-center ml-4 rotate-[320deg]"/>
               </div>
              </FadeInWhenVisible>
            );
          })}
        </motion.div>
      </motion.div>
    </Container>
  );
}
