import { useRef } from "react";
import Layout from "@/components/layout";
import Header from "@/components/header/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import FancyLink from "@/components/fancyLink";
import { fade, delayedFade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Container extraClasses="Content-Container  h-screen py-12 overflow-auto  md:overflow-hidden">
      <NextSeo
        title="About"
        description="350Lab is a creative studio with design and development expertise.
              We partner with brands by developing solutions through strategy &
              design."
      />
      <motion.div className="grid  h-full grid-cols-1   md:grid-cols-2 md:bg-blue-500 ">
        <motion.div className="text-sm font-founders  flex flex-col justify-center w-full md:col-start-2  md:m-0 ">
          <motion.div
            variants={fade}
            initial="initial"
            animate="enter"
            exit="exit">
            <motion.p className="hero-font-size font-founders  max-w-[650px]  text-sm xsm:text-2xl  sm:text-4xl  md:text-4xl ">
              350Lab is a creative company with development and design
              expertise. We partner with brands by developing solutions through
              strategy & design.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </Container>
  );
}
