import React from "react";
import Layout from "@/components/layout";
import About from "@/components/about";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/header/header";
import Process from "@/components/process";
import Philosophy from "@/components/philosophy";
import Capabilities from "@/components/capabilities";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { NextSeo } from "next-seo";
import { LazyMotion, domAnimation, m } from "framer-motion";
import ScrollFadeOverlay from "@/components/scrollFadeOverlay";

export default function Home() {
  return (
    <Layout class="relative no-scrollbar">
      <NextSeo
        title="350Lab© Studio - Brand, Direction & Development"
        description="350Lab is a creative studio with design and development expertise.
              We partner with brands by developing solutions through strategy &
              design."
      />
      <LazyMotion features={domAnimation}>
        <ScrollFadeOverlay />
        <m.div initial="initial" animate="enter" exit="exit">
          <Header />
          {/* <Hero />  */}
          <div id="about">
            <About />
          </div>
          <Process />

          <Philosophy />
          <div id="services">
            <Capabilities />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <Footer />
          <ScrollToTop />
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
