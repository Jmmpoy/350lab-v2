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

export default function About() {
  const content = [
    {
      id: 1,
      text: "We're a creative studio with development and design expertise. We partner with brands by developing solutions through strategy and design.",
    },
    {
      id: 2,
      text: "We believe a great presentation evokes interest and drives business results far better than any saying can.",
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
    <Container extraClasses="Content-Container relative  overflow-auto  md:overflow-hidden ">
      <motion.div className="flex flex-col content-center py-16 h-full md:grid  md:grid-cols-4">
        <motion.p
          variants={delayedFade}
          initial="initial"
          animate="enter"
          exit="exit"
          className="sectionTitle">
          About Us
        </motion.p>
        <motion.div className="sectionGrid">
          {content.map((item, index) => {
            const isFirst = item.id === 1 ? "mt-0" : "mt-8";
            return (
              <FadeInWhenVisible key={item.id}>
                <motion.h3
                  className={`${isFirst} sectionContent`}>
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
