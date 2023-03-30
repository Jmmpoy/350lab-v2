import Container from "@/components/container";
import { motion } from "framer-motion";
import { delayedFade } from "@/helpers/transitions";
import ScrollToTop from "./ScrollToTop";
import Logo from "./header/logo";

export default function Footer() {
  const items = [
    {
      title: "350Lab Studio Ltd, Copyright 2023",
    },
  ];
  return (
    <motion.footer className="w-full">
      <Container>
        <motion.div
          className=" py-4 flex space-x-2 mt-8 mb-1  md:mb-0"
          variants={delayedFade}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {items.map((item, index) => {
            return (
              <motion.div key={index} className="flex ">
                <motion.p className="font-founders text-[12px] leading-tight self-center">
                  {item.title}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div className="DateWrapper self-center">
          <ScrollToTop />
        </motion.div>
      </Container>
    </motion.footer>
  );
}
