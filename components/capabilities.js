import { useRef } from "react";
import Container from "@/components/container";
import AnimatedText from "@/components/animatedText";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Capabilities() {
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

  const capabilities = [
    {
      id: 1,
      number: "C/001",
      titleParts: [
        { text: "Digital ", color: "text-[#1A1A1A]" },
        { text: "Design", color: "text-accent-orange" },
      ],
      services: [
        "UI/UX",
        "Websites",
        "Apps",
        "Product Design",
        "Design Systems",
        "E-Commerce",
      ],
      descriptionParts: [
        {
          text: "At 350Lab, websites are designed and developed to suit your business needs, whether it's a user-friendly solution you can manage yourself or a more robust platform for long-term growth. The process adapts to your budget and goals, ensuring the right tools are used to create a site that performs, converts, and grows with the brand. Every project is driven by thoughtful UI/UX design, ensuring the website not only looks great but is intuitive, accessible, and provides a seamless experience across all devices.",
          color: "text-black",
        },
      ],
    },
    {
      id: 2,
      number: "C/002",
      titleParts: [
        { text: "Brand ", color: "text-[#1A1A1A]" },
        { text: "Identity", color: "text-accent-orange" },
      ],
      services: [
        "Logo Design",
        "Visual Identity",
        "Brand Guidelines",
        "Typography",
        "Color Palette",
        "Brand Strategy",
      ],
      descriptionParts: [
        {
          text: "We create cohesive brand identities that communicate your values and resonate with your audience. From logo design to comprehensive brand guidelines, every element is crafted to ensure consistency across all touchpoints. Our approach combines strategic thinking with creative execution to build memorable brands that stand out in the market.",
          color: "text-black",
        },
      ],
    },
    {
      id: 3,
      number: "C/003",
      titleParts: [{ text: "Development", color: "text-[#1A1A1A]" }],
      services: [
        "Web Development",
        "Mobile Apps",
        "E-Commerce",
        "Custom Solutions",
        "API Integration",
        "CMS Development",
      ],
      descriptionParts: [
        {
          text: "Our development services transform designs into high-performance digital products. We build scalable, secure, and maintainable solutions using modern technologies. Whether it's a custom web application, mobile app, or e-commerce platform, we ensure every line of code is optimized for performance and user experience.",
          color: "text-black",
        },
      ],
    },
  ];

  const projects = [
    { id: 1, number: "1.0", name: "Project Alpha", category: "Web Design" },
    { id: 2, number: "2.0", name: "Project Beta", category: "Branding" },
    { id: 3, number: "3.0", name: "Project Gamma", category: "Development" },
  ];

  // Composant pour animer chaque capability
  function AnimatedCapabilityItem({ capability, index }) {
    const badgeRef = useRef(null);
    const [ref, inView] = useInView({
      threshold: 0.3,
      triggerOnce: true,
    });

    // Suivre le scroll de l'élément badge pour changer le background
    const { scrollYProgress } = useScroll({
      target: badgeRef,
      offset: ["start end", "end start"],
    });

    // Transformer le scroll en backgroundColor (de blanc à noir)
    const backgroundColor = useTransform(
      scrollYProgress,
      [0.2, 0.5],
      ["rgba(255, 255, 255, 1)", "rgba(0, 0, 0, 0.8)"]
    );

    const textColor = useTransform(
      scrollYProgress,
      [0.2, 0.5],
      ["rgba(0, 0, 0, 1)", "rgba(255, 255, 255, 1)"]
    );

    return (
      <motion.div ref={ref} className="space-y-12">
        {/* En-tête avec numéro et titre */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-start-1">
            <span className="text-sm font-neueRegular text-gray">
              {capability.number}
            </span>
          </div>
          <div className="md:col-start-2">
            <div className="flex items-center self-center">
              <span className="w-2 h-2 rounded-full bg-black/80 mr-4 flex-shrink-0"></span>
              <motion.h3
                ref={badgeRef}
                className="text-xs font-mono uppercase mb-0 tracking-tight font-semibold px-3 py-2.5 rounded-md"
                style={{
                  backgroundColor: backgroundColor,
                  color: textColor,
                }}
              >
                {capability.titleParts.map((part, idx) => (
                  <span key={idx}>{part.text}</span>
                ))}
              </motion.h3>
            </div>
          </div>
          {/* Liste des services */}
          <div className="md:col-start-3 md:col-span-2">
            <ul>
              {capability.services.map((service, serviceIndex) => (
                <li
                  key={serviceIndex}
                  className="text-xs font-mono text-black uppercase font-semibold"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Description */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-start-3 md:col-span-2">
            <AnimatedText
              parts={capability.descriptionParts}
              className="sectionVerySmallContent"
              delay={0}
              shouldAnimate={inView}
            />
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <Container
      sectionId="Services"
      extraClasses="Content-Container relative py-16 lg:py-32"
    >
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
              Capabilities (B/001)
            </motion.h3>
          </div>
          <motion.hr
            ref={dividerRef}
            variants={dividerVariants}
            className="border-t-[1px] border-gray mt-2"
            style={{ width: dividerWidth }}
          />
        </div>

        <div className="space-y-32 lg:space-y-40">
          {capabilities.map((capability, index) => (
            <AnimatedCapabilityItem
              key={capability.id}
              capability={capability}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </Container>
  );
}
