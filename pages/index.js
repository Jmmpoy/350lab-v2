import { useRef } from "react";
import Layout from "@/components/layout";
import Header from "@/components/header/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Content from "@/components/content";
import About from "pages/about";
import Footer from "@/components/footer";
import Container from "@/components/container";
import FancyLink from "@/components/fancyLink";
import { fade } from "@/helpers/transitions";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <Layout class="no-scrollbar">
      <NextSeo
        title="350lab"
        description="350Lab is a creative studio with design and development expertise.
              We partner with brands by developing solutions through strategy &
              design."
      />
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.09 }}
        containerRef={containerRef}
        watch={[]}>
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <div data-scroll-section>
            <LazyMotion features={domAnimation}>
              <m.div initial="initial" animate="enter" exit="exit">
                <Hero />
                <Content />
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  );
}
