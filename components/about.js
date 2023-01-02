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
      text: "We're a creative studio with development and design expertise. We partner with brands by developing solutions through strategy & design.",
    },
    {
      id: 2,
      text: "We believe a great presentation evokes interest and drives business results far better than any saying can. Hence, we founded 350lab to help you persuade colleagues and clients by creating eye-opening presentations.",
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
    <Container extraClasses="Content-Container  h-[50vh] sm:h-[60vh] overflow-auto  md:overflow-hidden">
      <motion.div className="flex flex-col pt-16  h-full md:grid     md:grid-cols-2">
        <motion.p className="mb-12 text-base uppercase text-offWhite font-founders ">
          About Us
        </motion.p>
        <motion.div className="w-full md:col-start-2">
          {content.map((item, index) => {
            const isFirst = item.id === 1 ? "mt-0" : "mt-8";
            return (
              <FadeInWhenVisible>
                <motion.p
                  key={item.id}
                  className={`${isFirst} hero-font-size font-founders  max-w-[650px]  text-sm xsm:text-xl  md:text-2xl `}>
                  {item.text}
                </motion.p>
              </FadeInWhenVisible>
            );
          })}
        </motion.div>
      </motion.div>
    </Container>
  );
}
