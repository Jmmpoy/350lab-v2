import React from "react";
import Container from "@/components/container";
import AnimatedText from "@/components/animatedText";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import FadeInWhenVisible from "./fadeInWhenVisible";

export default function Process() {
  const dividerRef = useRef(null);

  // Suivre le scroll du divider
  const { scrollYProgress: dividerScrollProgress } = useScroll({
    target: dividerRef,
    offset: ["start end", "end start"],
  });

  // Transformer le scroll en largeur (de 100% à 30%)
  const dividerWidth = useTransform(
    dividerScrollProgress,
    [0.2, 0.8],
    ["100%", "30%"]
  );

  // Paragraphe d'introduction avec structure parts
  const introParts = [
    {
      text: "By understanding your brand's core values, developing ",
      color: "text-black",
    },
    { text: "creative concepts", color: "text-gray", italic: true },
    { text: ", and directing the ", color: "text-black" },
    { text: "design", color: "text-gray", italic: true },
    {
      text: ", each phase strengthens your brand's foundation and drives its ",
      color: "text-black",
    },
    { text: "strategic", color: "text-gray", italic: true },
    {
      text: " development. This ensures that your brand identity and digital presence are fully aligned, delivering impactful and lasting experiences.",
      color: "text-black",
    },
  ];

  // Variants pour l'animation du titre de section
  const dividerVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const statusVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: 0.5 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  const processes = [
    {
      id: 1,
      number: "P/001",
      titleParts: [{ text: "Research & Strategy", color: "text-black" }],
      descriptionParts: [
        {
          text: "Every project begins by understanding the essence of your ",
          color: "text-black",
        },
        { text: "brand", color: "text-gray", italic: true },
        { text: "—its ", color: "text-black" },
        { text: "values", color: "text-gray", italic: true },
        { text: ", ", color: "text-black" },
        { text: "audience", color: "text-gray", italic: true },
        { text: ", and ", color: "text-black" },
        { text: "goals", color: "text-gray", italic: true },
        { text: ". This foundation guides the ", color: "text-black" },
        {
          text: "strategic direction",
          color: "text-accent-orange",
          italic: true,
        },
        { text: ", ensuring all ", color: "text-black" },
        { text: "creative efforts", color: "text-gray", italic: true },
        { text: " are aligned with your ", color: "text-black" },
        { text: "vision", color: "text-gray", italic: true },
        { text: ".", color: "text-black" },
      ],
    },
    {
      id: 2,
      number: "P/002",
      titleParts: [{ text: "Concept Development", color: "text-black" }],
      descriptionParts: [
        { text: "With a clear direction in place, ", color: "text-black" },
        { text: "concepts", color: "text-gray", italic: true },
        { text: " are developed to translate ", color: "text-black" },
        { text: "insights", color: "text-gray", italic: true },
        { text: " into ", color: "text-black" },
        {
          text: "creative solutions",
          color: "text-accent-orange",
          italic: true,
        },
        { text: " that capture both the ", color: "text-black" },
        { text: "brand's identity", color: "text-gray", italic: true },
        { text: " and its ", color: "text-black" },
        { text: "digital presence", color: "text-gray", italic: true },
        { text: ".", color: "text-black" },
      ],
    },
    {
      id: 3,
      number: "P/003",
      titleParts: [{ text: "Design Direction", color: "text-black" }],
      descriptionParts: [
        { text: "The ", color: "text-black" },
        { text: "design", color: "text-accent-orange", italic: true },
        {
          text: " is then shaped and refined, ensuring it supports the brand's overall ",
          color: "text-black",
        },
        { text: "narrative", color: "text-gray", italic: true },
        { text: " and creates a consistent ", color: "text-black" },
        { text: "experience", color: "text-gray", italic: true },
        { text: " that operates seamlessly across all ", color: "text-black" },
        { text: "digital", color: "text-gray", italic: true },
        { text: " and ", color: "text-black" },
        { text: "physical platforms", color: "text-gray", italic: true },
        { text: ".", color: "text-black" },
      ],
    },
    {
      id: 4,
      number: "P/004",
      titleParts: [{ text: "Production & Execution", color: "text-black" }],
      descriptionParts: [
        { text: "With the ", color: "text-black" },
        { text: "design", color: "text-gray", italic: true },
        {
          text: " refined and aligned with your brand's ",
          color: "text-black",
        },
        { text: "narrative", color: "text-gray", italic: true },
        { text: ", it's seamlessly applied across ", color: "text-black" },
        { text: "digital", color: "text-gray", italic: true },
        { text: " and ", color: "text-black" },
        {
          text: "physical touchpoints",
          color: "text-accent-orange",
          italic: true,
        },
        { text: " to ensure a cohesive and consistent ", color: "text-black" },
        { text: "experience", color: "text-gray", italic: true },
        { text: ".", color: "text-black" },
      ],
    },
  ];

  // Composant pour animer un process item quand 30% est visible
  function AnimatedProcessItem({ process, index }) {
    const badgeRef = useRef(null);
    const [ref, inView] = useInView({
      threshold: 0.3, // Se déclenche quand 30% de l'élément est visible
      triggerOnce: true, // Ne se déclenche qu'une seule fois
    });

    // Suivre le scroll de l'élément badge
    const { scrollYProgress } = useScroll({
      target: badgeRef,
      offset: ["start end", "end start"], // Commence quand le badge entre, finit quand il sort
    });

    // Calculer la circonférence approximative d'un badge arrondi (2 * (largeur + hauteur) pour un rect arrondi)
    // Pour un badge de ~80px de large et 40px de haut : environ 240px
    const circumference = 240;

    // Transformer le scroll progress en strokeDashoffset (de circonférence à 0)
    const strokeDashoffset = useTransform(
      scrollYProgress,
      [0.2, 0.8],
      [circumference, 0]
    );

    useEffect(() => {
      console.log(`item ${process.id} is inView: ${inView}`);
    }, [inView, process.id]);

    return (
      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12"
      >
        {/* Numéro à gauche */}
        <div className=" md:col-start-2">
          <div ref={badgeRef} className="relative inline-block">
            {/* Badge sans bordure CSS */}
            <span className="text-sm font-neueRegular text-gray rounded-full px-4 py-2 inline-block relative z-10">
              {process.number}
            </span>
            {/* SVG animé qui dessine la bordure */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
            >
              <motion.rect
                x="0.5"
                y="0.5"
                width="99"
                height="39"
                rx="20"
                fill="none"
                stroke="rgba(137, 137, 137, 0.9)"
                strokeWidth="0.5"
                strokeDasharray={circumference}
                style={{
                  strokeDashoffset: strokeDashoffset,
                }}
              />
            </svg>
          </div>
        </div>

        {/* Contenu à droite */}
        <div className="md:col-start-3 md:col-span-2">
          <div className="border-l border-gray/20 pl-6 mb-6">
            <AnimatedText
              parts={process.titleParts}
              className="text-2xl md:text-3xl lg:text-4xl font-neueRegular tracking-tight"
              delay={0}
              shouldAnimate={inView}
            />
          </div>
          <div className="pl-6">
            <AnimatedText
              parts={process.descriptionParts}
              className="sectionVerySmallContent"
              delay={0.3}
              shouldAnimate={inView}
            />
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <Container extraClasses="Content-Container relative py-16 lg:pt-32">
      <motion.div className="flex flex-col" initial="hidden" animate="visible">
        {/* Section Title avec animation */}
        <div className="mb-8">
          <div className="flex items-center">
            <motion.div variants={statusVariants}>
              <span className="w-2 h-2 rounded-full bg-accent-red inline-block mr-4"></span>
            </motion.div>
            <motion.h3
              variants={titleVariants}
              className="sectionTitle text-black mb-0"
            >
              Approach
            </motion.h3>
          </div>
          <motion.hr
            ref={dividerRef}
            variants={dividerVariants}
            className="border-t border-gray mt-2"
            style={{ width: dividerWidth }}
          />
        </div>

        {/* Paragraphe d'introduction avec animation split text */}
        <div className="mb-16 lg:mb-24 w-full lg:w-2/4 lg:max-w-xl px-4 lg:px-0">
          <AnimatedText
            parts={introParts}
            className="sectionSmallContent"
            delay={0.8}
          />
        </div>

        <FadeInWhenVisible>
          <div className="space-y-24">
            {processes.map((process, index) => (
              <AnimatedProcessItem
                key={process.id}
                process={process}
                index={index}
              />
            ))}
          </div>
        </FadeInWhenVisible>
      </motion.div>
    </Container>
  );
}
