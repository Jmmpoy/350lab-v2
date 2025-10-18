import Container from "@/components/container";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import AnimatedText from "./animatedText";
import Arrow from "./arrow";

export default function Contact() {
  const dividerRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Suivre le scroll du divider
  const { scrollYProgress: dividerScrollProgress } = useScroll({
    target: dividerRef,
    offset: ["start end", "end start"],
  });

  // Transformer le scroll en largeur (de 100% à 30%)
  const dividerWidth = useTransform(
    dividerScrollProgress,
    [0.2, 0.8],
    ["100%", "50%"]
  );

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

  const content = [
    {
      id: 1,
      parts: [
        { text: "We're always interested to hear about ", color: "text-black" },
        { text: "new projects", color: "text-gray", italic: true },
        {
          text: ", so please feel free to reach out below if you'd like to ",
          color: "text-black",
        },
        { text: "collaborate", color: "text-accent-orange", italic: true },
        { text: " with us.", color: "text-black" },
      ],
    },
  ];

  return (
    <Container extraClasses="Content-Container relative py-16 lg:py-32 overflow-hidden">
      <motion.div
        ref={ref}
        className="flex flex-col"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Title avec animation */}
        <div className="mb-16">
          <div className="flex items-center">
            <motion.div variants={statusVariants}>
              <span className="w-2 h-2 rounded-full bg-accent-red inline-block mr-4"></span>
            </motion.div>
            <motion.h3
              variants={titleVariants}
              className="sectionTitle text-black mb-0"
            >
              Contact Us
            </motion.h3>
          </div>
          <motion.hr
            ref={dividerRef}
            variants={dividerVariants}
            className="border-t-[1px] border-gray mt-2"
            style={{ width: dividerWidth }}
          />
        </div>

        {/* Contenu */}
        <div className="md:grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            {content.map((item) => {
              const isFirst = item.id === 1 ? "mt-0" : "mt-8";
              return (
                <div key={item.id}>
                  <AnimatedText
                    parts={item.parts}
                    className={`${isFirst} sectionContent font-neueLight tracking-wide mb-8`}
                    delay={0.8}
                    shouldAnimate={inView}
                  />
                  <motion.div
                    className="group flex space-x-2 items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    <div className="text-black group-hover:text-accent-orange transition-colors duration-300">
                      <Arrow size="w-8 h-8 xsm:w-8 h-8" style="self-center" />
                    </div>
                    <a
                      href="mailto:Didier.mumengi@gmail.com"
                      className="relative cursor-pointer inline-block"
                    >
                      <span className="hero-font-size font-neueLight text-2xl sm:text-3xl text-black font-semibold group-hover:text-accent-orange transition-colors duration-300">
                        let's have a talk
                      </span>
                      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-accent-orange transition-all duration-300 ease-out group-hover:w-full"></span>
                    </a>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </Container>
  );
}
