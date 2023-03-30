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
import FadeInWhenVisible from "./fadeInWhenVisible";
export default function TeamText() {
  const content = [
    {
      id: 1,
      text: "We understand that ideas comes from everywhere and expect everyone to bring their own perspectives to the table.",
    },
    
  ];

  
  return (
    <Container extraClasses="Content-Container  pt-8 sm:pt-32 relative overflow-hidden">
      <motion.div className="flex flex-col content-center h-full md:grid md:grid-cols-4">
        <motion.p
          variants={delayedFade}
          initial="initial"
          animate="enter"
          exit="exit"
          className="sectionTitle">
          Meet Our Team
        </motion.p>
        <motion.div className="md:col-start-2 md:col-span-3 lg:col-span-2">
          {content.map((item, index) => {
            const isFirst = item.id === 1 ? "mt-0" : "mt-8";
            return (
              <FadeInWhenVisible key={item.id} style="">
                <motion.h3
                  className={`${isFirst} hero-font-size font-founders    text-2xl  sm:text-3xl  md:text-5xl `}>
                  {item.text}
                </motion.h3>
              </FadeInWhenVisible>
            );
          })}
        </motion.div>
      </motion.div>
    </Container>
  );
}
