import React from "react";
import Link from "next/link";

import Image from "next/image";
import { useRouter } from "next/router";
import Container from "../../components/container";
import data from "../../api.js";
import { motion } from "framer-motion";
import { delayedFade, fade } from "@/helpers/transitions";

export default function Project({ project }) {
  const Title = ({
    animateDelay,
    animateDuration,
    exitDelay,
    exitDuration,
    classes,
  }) => {
    return (
      <span className="flex flex-col  overflow-hidden">
        <motion.p
          initial={{ y: 100 }}
          animate={{
            y: 0,
            transition: {
              delay: animateDelay,
              duration: animateDuration,
              ease: "easeInOut",
            },
          }}
          exit={{
            y: 100,
            transition: {
              delay: exitDelay,
              duration: exitDuration,
              ease: "easeInOut",
            },
          }}
          className="text-5xl xsm:text-6xl sm:text-7xl md:text-8xl font-neueRegular tracking-tight ">
          {project.name}
        </motion.p>
      </span>
    );
  };

  const ProjectInfos = ({ titleStyle, contentStyle }) => {
    return (
      <motion.ul className=" mt-9 md:mt-3  grid md:grid-cols-2  overflow-hidden">
        <motion.li className="flex flex-col justify-evenly">
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: 40 }}
              animate={{
                y: 0,
                transition: {
                  delay: 1,
                  duration: 1.5,
                  ease: "easeInOut",
                },
              }}
              exit={{
                y: 100,
                transition: {
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                },
              }}
              className={titleStyle}>
              Rôle
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: 40 }}
              animate={{
                y: 0,
                transition: {
                  delay: 1.5,
                  duration: 1.5,
                  ease: "easeInOut",
                },
              }}
              exit={{
                y: 100,
                transition: {
                  delay: 0.7,
                  duration: 0.8,
                  ease: "easeInOut",
                },
              }}
              className={contentStyle}>
              {project.role}
            </motion.p>
          </div>
        </motion.li>
        <motion.li className="flex flex-col justify-evenly">
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: 40 }}
              animate={{
                y: 0,
                transition: {
                  delay: 1,
                  duration: 1.5,
                  ease: "easeInOut",
                },
              }}
              exit={{
                y: 100,
                transition: {
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                },
              }}
              className={titleStyle}>
              Année
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: 40 }}
              animate={{
                y: 0,
                transition: {
                  delay: 1.5,
                  duration: 1.5,
                  ease: "easeInOut",
                },
              }}
              exit={{
                y: 100,
                transition: {
                  delay: 0.7,
                  duration: 0.8,
                  ease: "easeInOut",
                },
              }}
              className={contentStyle}>
              {project.year}
            </motion.p>
          </div>
        </motion.li>
      </motion.ul>
    );
  };

  const Description = () => {
    return (
      <motion.div
        variants={fade}
        initial="initial"
        animate="enter"
        exit="exit"
        className="mt-9 md:mt-40">
        {/* Description */}
        <motion.div className="mb-8">
          {project.description.map((item, index) => {
            const isGray = item.id === 3 ? "text-gray" : "text-black";
            return (
              <div key={index} className="overflow-hidden">
                <motion.p
                  initial={{ y: `${40 * item.id}` }}
                  animate={{
                    y: 0,
                    transition: {
                      delay: `${0.2 * item.id}`,
                      duration: 1.5,
                      ease: "easeInOut",
                    },
                  }}
                  exit={{
                    y: 100,
                    transition: {
                      delay: `${0.1 * item.id}`,
                      duration: 0.8,
                      ease: "easeInOut",
                    },
                  }}
                  key={item.id}
                  class="text-[3vw] sm:text-xl  md:text-2xl font-foundersLight">
                  {item.text}
                </motion.p>
              </div>
            );
          })}
        </motion.div>
        <div className="flex ">
          <a className="underline font-foundersLight" href={project.link}>
            Visiter le site
          </a>
          <div className="flex flex-col justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 700 700"
              fill="#000"
              stroke="currentColor"
              class="w-4 h-4">
              <path d="m280 105v35h185.25l-285.13 285.13 24.746 24.746 285.13-285.13v185.25h35v-245z" />
            </svg>
          </div>
        </div>
      </motion.div>
    );
  };

  const ProjectImages = ({ image, secondaryImage }) => {
    return (
      <motion.div
        variants={fade}
        initial="initial"
        animate="enter"
        exit="exit"
        className="image-container min-h-[420px] mt-52 mx-auto  py-20 px-12  flex flex-col  gap-y-32  justify-center bg-black sm: gap-x-20 md:flex-row md:p-24 ">
        <motion.div className="basis-full project-image-card ">
          <Image
            src={image}
            blurDataURL={image.blurDataURL}
            placeholder="blur"
            alt={project.name}
            class=" min-w-[320px]  image basis-full"
          />
        </motion.div>

        <motion.div className="basis-full project-image-card ">
          {secondaryImage && (
            <Image
              src={secondaryImage}
              blurDataURL={secondaryImage.blurDataURL}
              placeholder="blur"
              alt={project.name}
              class=" min-w-[320px]  image "
            />
          )}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <Container extraClasses="Content-Container relative  h-screen py-12 overflow-auto   ">
      <motion.div className="flex flex-col  overflow-hidden   mt-12 mb-12 md:grid md:grid-cols-2   md:mt-36">
        <Title
          animateDelay="0.2"
          animateDuration="1.5"
          exitDelay=".7"
          exitDuration="1"
          classes="text-5xl xsm:text-6xl sm:text-7xl font-foundersLight tracking-tight"
        />
        <ProjectInfos
          titleStyle="text-sm text-gray "
          contentStyle="text-xl font-foundersLight "
        />
      </motion.div>

      <Description />
      <ProjectImages
        image={project.primaryImage}
        secondaryImage={project.secondaryImage}
      />
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const projects = data.filter((p) => p.id.toString() === params.id);
  return {
    props: { project: projects[0] },
  };
}

export async function getStaticPaths() {
  const paths = data.map((project) => ({
    params: { id: project.id.toString() },
  }));
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}
