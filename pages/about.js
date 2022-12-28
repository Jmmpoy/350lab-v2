import { useRef } from "react";
import Layout from "@/components/layout";
import Header from "@/components/header/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import FancyLink from "@/components/fancyLink";
import { fade, delayedFade } from "@/helpers/transitions";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const presentation = [
    {
      id: 1,
      text: "Mpoy Jean-Marc est un développeur ",
    },

    {
      id: 2,
      text: "front-end basé en France et travaillant  ",
    },
    {
      id: 3,
      text: "dans l'industrie digitale depuis ",
    },
    {
      id: 4,
      text: " plus de 3 ans.",
    },
  ];
  const content = [
    {
      id: 0,
      text: "Passionné de design, il se spécialise",
    },
    {
      id: 1,
      text: "dans les expériences web avec un fort ",
    },
    {
      id: 2,
      text: "accent pour l'animation et les interactions",
    },
  ];
  const content2 = [
    {
      id: 3,
      text: "En tant que développeur, il a eu ",
    },
    {
      id: 4,
      text: "l'opportunité de travailler avec",
    },
    {
      id: 5,
      text: "un panel de clients dont Microsoft, ",
    },
    {
      id: 6,
      text: "Canal+ , Soundcharts et FilmoTv.",
    },
  ];

  const presentationEng = [
    {
      id: 1,
      text: "Mpoy Jean-Marc is a front-end",
    },

    {
      id: 2,
      text: "developer based in France, ",
    },
    {
      id: 3,
      text: "evolving his craft in the digital ",
    },
    {
      id: 4,
      text: "industry for more than 8 years.",
    },
  ];
  const contentEng = [
    {
      id: 0,
      text: "Passionate about design he speciales in ",
    },
    {
      id: 1,
      text: "web experiences with a strong focus on ",
    },
    {
      id: 2,
      text: " animation and interaction.",
    },
  ];
  const content2Eng = [
    {
      id: 3,
      text: "As a front end developer, he had the",
    },
    {
      id: 4,
      text: "opportunity to collaborate with a broad",
    },
    {
      id: 5,
      text: "range of clients that includes Microsoft, ",
    },
    {
      id: 6,
      text: " Canal+ , Soundcharts or FilmoTv.",
    },
  ];

  return (
    <Container extraClasses="Content-Container  h-screen py-12 overflow-auto  md:overflow-hidden">
      <NextSeo
        title="A Propos"
        description="Mpoy Jean-Marc est un développeur spécialisé dans le mouvement et l'interaction. En tant qu'indépendant, il travaille avec des entreprises, des agences, des startups et des particuliers."
      />
      <motion.div className="grid  h-full grid-cols-1   md:grid-cols-2 md:bg-blue-500 ">
        <motion.div className="text-sm font-founders  flex flex-col justify-center w-full md:col-start-2  md:m-0 ">
          <motion.div
            variants={delayedFade}
            initial="initial"
            animate="enter"
            exit="exit">
            {presentation.map((item, index) => {
              return (
                <p
                  key={index}
                  class="text-2xl sm:text-[1.6rem] font-neueRegular list-none max-w-lg mb-0">
                  {item.text}
                </p>
              );
            })}
          </motion.div>
          <div>
            <div className="mt-16 ">
              {content.map((item, index) => {
                return (
                  <motion.div className="overflow-hidden " key={index}>
                    <motion.li
                      initial={{ opacity: 0, y: `${40 * item.id}` }}
                      animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                          delay: `${0.1 * item.id}`,
                          duration: 1,
                          ease: "easeInOut",
                        },
                      }}
                      exit={{
                        y: 50,
                        opacity: 0,
                        transition: {
                          delay: `${0.1 * item.id}`,
                          duration: 0.4,
                          ease: "easeInOut",
                        },
                      }}
                      key={item.id}
                      className="text-[3.7vw] leading-[25px] xsm:text-[18px]  font-founders list-none sm:leading-7 sm:text-[18px]">
                      {item.text}
                    </motion.li>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-4 ">
              {content2.map((item, index) => {
                return (
                  <motion.div className="overflow-hidden " key={index}>
                    <motion.li
                      initial={{ opacity: 0, y: `${40 * item.id}` }}
                      animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                          delay: `${0.1 * item.id}`,
                          duration: 1,
                          ease: "easeInOut",
                        },
                      }}
                      exit={{
                        y: 50,
                        opacity: 0,
                        transition: {
                          delay: `${0.1 * item.id}`,
                          duration: 0.4,
                          ease: "easeInOut",
                        },
                      }}
                      key={item.id}
                      className="text-[3.7vw] leading-[25px] xsm:text-[18px]  font-founders list-none sm:leading-7 sm:text-[18px]">
                      {item.text}
                    </motion.li>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
}
