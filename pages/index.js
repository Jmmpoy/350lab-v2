import Layout from "@/components/layout";
import Hero from "@/components/hero";
import About from "@/components/about";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import Container from "@/components/container";
import Services from "@/components/services";
import Separator from "@/components/separator";
import TeamText from "@/components/teamText";
import Team from "@/components/team";
import Contact from '@/components/contact';
import ScrollToTop from "@/components/ScrollToTop";
export default function Home() {
  return (
    <Layout class="relative no-scrollbar">
      <NextSeo
        title="350lab"
        description="350Lab is a creative studio with design and development expertise.
              We partner with brands by developing solutions through strategy &
              design."
      />
      <LazyMotion features={domAnimation}>
        <m.div initial="initial" animate="enter" exit="exit">
          <Hero />
          <About />
          <Services />
          <TeamText/>
          <Team/>
          <Contact/>
          <ScrollToTop/>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
