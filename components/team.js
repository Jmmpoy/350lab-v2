import React, { useEffect, useState } from "react";
import Container from "./container";

import { useAnimation, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { delayedFade } from "@/helpers/transitions";
import Accordion from "./accordion";
import FadeInWhenVisible from "./fadeInWhenVisible";
export default function Team(){
  const [expanded, setExpanded] = useState(0);
  const team = [
    {
      id: 1,
      name: "Francisco Mambo",
      position: "Partner & COO"
    },
    {
      id: 2,
      name: "Olivier Mumengi",
      position: "Partner & CEO"
    },
    {
      id: 3,
      name: "Jean-Marc Mpoy",
      position: "Partner & CTO"
    },
    {
      id: 4,
      name: "Didier Jr Mumengi",
      position: "Partner & CEO"
    },
  ];


  return (
    <Container extraClasses="Content-Container pb-12 lg:pb-16">
      <motion.ul className="h-full mt-24">
        {team.map((member, index, i) => {
          return (
            <FadeInWhenVisible key={member.id}>
              <div className="flex flex-col xsm:flex-row">
              <p className={`w-full xsm:w-[70%]   text-2xl  sm:text-4xl md:text-5xl lg:text-6xl font-neueBold tracking-tight mb-0 uppercase  `}>{member.name}</p>
              <p className={`flex-grow text-sm  xsm:text-sm sm:text-xl md:text-xl lg:text-2xl font-neue tracking-tight mb-0 uppercase self-start xsm:self-center `}>{member.position}</p>
              </div>
            </FadeInWhenVisible>
          );
        })}
      </motion.ul>
    </Container>
  );
}
