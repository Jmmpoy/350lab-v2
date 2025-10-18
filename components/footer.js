import Container from "@/components/container";
import { motion } from "framer-motion";
import { delayedFade } from "@/helpers/transitions";
import ScrollToTop from "./ScrollToTop";

export default function Footer() {
  const items = [
    {
      title: "@2025",
    },
    {
      title: "350Lab",
    },
  ];
  return (
    <Container>
      <motion.div
        className="flex justify-between space-x-2 mt-8 py-4 mb-1  md:mb-0"
        variants={delayedFade}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <motion.h3 className="sectionVerySmallContent font-neueLight text-sm  text-black mb-0">
          @2025
        </motion.h3>
        <motion.h3 className="sectionVerySmallContent font-neueLight text-sm  text-black mb-0">
          350Lab Studio Ltd
        </motion.h3>
      </motion.div>
      <motion.div className="DateWrapper self-center">
        <ScrollToTop />
      </motion.div>
    </Container>
  );
}
