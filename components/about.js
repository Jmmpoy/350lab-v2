import Container from "@/components/container";
import AnimatedText from "@/components/animatedText";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function About() {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Détecter si on est sur mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Suivre le scroll de la section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Premier paragraphe : mouvement subtil vers la droite (de -30px à 30px) - désactivé sur mobile
  const content1X = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 0] : [-30, 30]
  );

  // Deuxième paragraphe : mouvement subtil vers la gauche (de 30px à -30px) - désactivé sur mobile
  const content2X = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 0] : [30, -30]
  );

  const aboutContent = [
    {
      id: 1,
      parts: [
        { text: "We're a creative studio combining ", color: "text-black" },
        { text: "design", color: "text-accent-orange", italic: true },
        { text: " and ", color: "text-black" },
        { text: "development", color: "text-accent-orange", italic: true },
        { text: " to build ", color: "text-black" },
        { text: " experiences", color: "text-gray", italic: true },
        { text: ".", color: "text-black" },
      ],
    },
  ];

  const aboutContent2 = [
    {
      id: 1,
      parts: [
        { text: "Founded by a team of ", color: "text-black" },
        { text: "designers", color: "text-gray", italic: true },
        { text: ", ", color: "text-black" },
        { text: "developers", color: "text-gray", italic: true },
        { text: ", and ", color: "text-black" },
        { text: "creatives", color: "text-gray", italic: true },
        { text: ", the Studio combines ", color: "text-black" },
        { text: "design thinking", color: "text-gray", italic: true },
        { text: " and ", color: "text-black" },
        { text: "technical expertise", color: "text-gray", italic: true },
        {
          text: " to build impactful digital experiences. Each founder contributes a distinct perspective — blending ",
          color: "text-black",
        },
        { text: "aesthetics", color: "text-gray", italic: true },
        { text: ", ", color: "text-black" },
        { text: "strategy", color: "text-gray", italic: true },
        { text: ", and ", color: "text-black" },
        { text: "technology", color: "text-gray", italic: true },
        {
          text: " into cohesive, purposeful design. Together, we craft ",
          color: "text-black",
        },
        { text: "experiences", color: "text-gray", italic: true },
        { text: " that move, engage, and perform.", color: "text-black" },
      ],
    },
  ];

  // Variants pour orchestrer l'animation
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

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

  const content1Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { duration: 0 },
    },
  };

  const content2Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { duration: 0 },
    },
  };

  return (
    <>
      <Container
        sectionId="About"
        extraClasses="Content-Container relative overflow-auto md:overflow-hidden bg-white pt-16 lg:pt-32 min-h-[calc(95vh-56px)] flex flex-col justify-center"
      >
        {/* Section Title avec animation */}
        <div className="mb-8">
          <div className="flex items-center">
            <motion.div
              variants={statusVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="w-2 h-2 rounded-full bg-accent-red inline-block mr-4"></span>
            </motion.div>
            <motion.h3
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="sectionTitle text-black mb-0"
            >
              About Us
            </motion.h3>
          </div>
          <motion.hr
            variants={dividerVariants}
            initial="hidden"
            animate="visible"
            className="border-t-[1px] border-gray/30 mt-2"
          />
        </div>
        <motion.div
          ref={sectionRef}
          className="flex flex-col justify-center mb-6 h-full"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="flex-1 flex flex-col justify-center">
            {/* Content 1 avec animation split text */}
            <motion.div
              variants={content1Variants}
              className="w-full lg:w-2/4"
              style={{ x: content1X }}
            >
              {aboutContent.map((item) => {
                const isFirst = item.id === 1 ? "mt-0" : "mt-8";
                return (
                  <AnimatedText
                    key={item.id}
                    parts={item.parts}
                    className={`${isFirst} aboutMainContent lg:max-w-5xl lg:tracking-wide leading-tight lg:leading-none text-center lg:text-left`}
                    delay={0.9}
                  />
                );
              })}
            </motion.div>

            {/* Content 2 avec animation split text */}
            <motion.div
              variants={content2Variants}
              className="mt-16 w-full lg:w-1/2 lg:max-w-3xl ml-0 lg:ml-[50%]"
              style={{ x: content2X }}
            >
              {aboutContent2.map((item, index) => {
                const isFirst = item.id === 1 ? "mt-0" : "mt-2";
                return (
                  <AnimatedText
                    key={item.id}
                    parts={item.parts}
                    className={`${isFirst} sectionSmallContent text-center lg:text-left`}
                    delay={0.9 + index * 0.5}
                  />
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </>
  );
}
