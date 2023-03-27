import React, { useEffect, useState } from "react";
import Container from "./container";
import { motion } from "framer-motion";
import { delayedFade } from "@/helpers/transitions";
import Accordion from "./accordion";
import FadeInWhenVisible from "./fadeInWhenVisible";
export default function Services(){
  const services = [
    {
      id: 1,
      name: "Creative Direction",
      services: [
        { id: 1, name: "Brand Strategy" },
        { id: 2, name: "Campaign Development" },
        { id: 3, name: "Creative Concepting" },
      ],
    },
    {
      id: 2,
      name: "Digital Design",
      services: [
        { id: 1, name: "Web Design" },
        { id: 2, name: "UI/UX Design" },
        { id: 3, name: "Mobile App Design" },
      ],
    },
    {
      id: 3,
      name: "Brand Identity",
      services: [
        { id: 1, name: "Logo Design" },
        { id: 2, name: "Brand Guidelines" },
        { id: 3, name: "Visual Identity" },
      ],
    },
    {
      id: 4,
      name: "Development",
      services: [
        { id: 1, name: "Web Development" },
        { id: 2, name: "Mobile App Development" },
        { id: 3, name: "Custom Software Development" },
      ],
    },
  ];

  return (
    <Container extraClasses="Content-Container py-12 lg:py-32">
      <motion.p
        variants={delayedFade}
        initial="initial"
        animate="enter"
        exit="exit"
        className="sectionTitle"
      >
        Services
      </motion.p>
      <motion.ul className="h-full mt-24">
        {services.map((service, index, i) => {
          return (
            <FadeInWhenVisible key={service.id}>
              <Accordion
              id={service.id}
              name={service.name}
              services={service.services}
            />
            </FadeInWhenVisible>
          );
        })}
      </motion.ul>
    </Container>
  );
}
