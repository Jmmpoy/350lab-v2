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
import FadeInWhenVisible from "./fadeInWhenVisible";
export default function Contact() {
  const content = [
    {
      id: 1,
      text: "We're always interested to hear about new projects, so please feel free to reach out  below if you'd like to collaborate with us.",
    },
    
  ];

  return (
    <Container extraClasses="Content-Container relative py-12 lg:pt-48 overflow-hidden">
      <motion.div className="flex flex-col content-center h-full md:grid md:grid-cols-4">
        <motion.p
          variants={delayedFade}
          initial="initial"
          animate="enter"
          exit="exit"
          className="sectionTitle">
          Contact Us
        </motion.p>
        <motion.div className="sectionGrid">
          {content.map((item, index) => {
            const isFirst = item.id === 1 ? "mt-0" : "mt-8";
            return (
              <FadeInWhenVisible style="">
                <motion.h3
                  key={item.id}
                  className={`${isFirst} sectionContent`}>
                  {item.text}
                </motion.h3>
               <div className="flex">
                <motion.a href="mailto:Didier.mumengi@gmail.com" className={`${isFirst} underline font-founders font-bold uppercase  text-sm xsm:text-xl  md:text-2xl `}>Email us</motion.a>
                <Arrow size="w-4 w-4 xsm:w-6 w-6" style="self-center ml-4 rotate-[320deg]"/>
               </div>
              </FadeInWhenVisible>
            );
          })}
        </motion.div>
      </motion.div>
    </Container>
  );
}
