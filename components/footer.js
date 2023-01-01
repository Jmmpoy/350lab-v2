import Container from "@/components/container";
import { motion } from "framer-motion";
import { delayedFade } from "@/helpers/transitions";
import DateTime from "./dateTime";

export default function Footer() {
  const items = [{ title: "Inquiries", link: "mailto:jmmpoy@gmail.com" }];
  return (
    <motion.footer className="w-full fixed bottom-0  bg-black">
      <Container extraClasses="grid grid-cols-2">
        <motion.div
          className=" py-4 flex space-x-2 mb-1  md:mb-0"
          variants={delayedFade}
          initial="initial"
          animate="enter"
          exit="exit">
          {items.map((item, index) => {
            return (
              <>
                <motion.a
                  key={index}
                  href={item.link}
                  className="font-founders uppercase text-[16px]">
                  {item.title}
                </motion.a>
              </>
            );
          })}
        </motion.div>
        <motion.div className="DateWrapper self-center">
          <DateTime />
        </motion.div>
      </Container>
    </motion.footer>
  );
}
