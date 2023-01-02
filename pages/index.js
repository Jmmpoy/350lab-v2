import Layout from "@/components/layout";
import Hero from "@/components/hero";
import Content from "@/components/content";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

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
