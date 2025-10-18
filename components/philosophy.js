import Container from "@/components/container";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import AnimatedText from "@/components/animatedText";

export default function Philosophy() {
  const sectionRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Suivre le scroll de la section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Premier paragraphe : se déplace vers la droite (de -100px à 100px)
  const paragraph1X = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  // Deuxième paragraphe : se déplace vers la gauche (de 100px à -100px)
  const paragraph2X = useTransform(scrollYProgress, [0, 1], [100, -100]);

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

  const philosophyItems = [
    {
      id: 1,
      parts: [
        {
          text: "We approach every project as a dialogue between ",
          color: "text-black",
        },
        { text: "design", color: "text-accent-orange", italic: true },
        { text: " and ", color: "text-black" },
        { text: "technology", color: "text-gray", italic: true },
        { text: " — where ", color: "text-black" },
        { text: "motion", color: "text-gray", italic: true },
        { text: " gives life to form, and ", color: "text-black" },
        { text: "code", color: "text-accent-orange", italic: true },
        { text: " gives structure to emotion.", color: "text-black" },
      ],
    },
    {
      id: 2,
      parts: [
        {
          text: "Our work is built around clarity, precision, and a touch of imperfection that makes it human.",
          color: "text-black",
        },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <Container extraClasses="relative z-10">
        <motion.div
          ref={ref}
          className="max-w-5xl mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Title avec animation */}
          <div className="mb-16">
            <div className="flex items-center justify-center">
              <motion.div variants={statusVariants}>
                <span className="w-2 h-2 rounded-full bg-accent-red inline-block mr-4"></span>
              </motion.div>
              <motion.h3
                variants={titleVariants}
                className="sectionTitle text-black mb-0"
              >
                Philosophy
              </motion.h3>
            </div>
            <motion.hr
              variants={dividerVariants}
              className="border-t-[1px] border-gray mt-2 mx-auto max-w-[100px]"
            />
          </div>

          {/* Contenu principal */}
          <div className="space-y-12">
            {philosophyItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="text-center"
                style={{
                  x: index === 0 ? paragraph1X : paragraph2X,
                }}
              >
                <AnimatedText
                  parts={item.parts}
                  className="sectionContent font-neueLight tracking-wide"
                  delay={0.8 + index * 0.5}
                  shouldAnimate={inView}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
