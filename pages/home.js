import React from 'react'
import Layout from "@/components/layout";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import TeamText from "@/components/teamText";
import Team from "@/components/team";
import Contact from "@/components/contact";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Header from "@/components/header/header";
import { NextSeo } from "next-seo";
import { LazyMotion, domAnimation, m } from "framer-motion";

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
        <m.div initial="initial" animate="enter" exit="exit">
          <Header />
          <Hero />
          <About />
          <Services />
          <TeamText />
          <Team />
          <Contact />
          <Footer/>
          <ScrollToTop />
        </m.div>
      </LazyMotion>
    </Layout>
  )
}
