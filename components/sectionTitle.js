import { motion } from "framer-motion";
import { delayedFade } from "@/helpers/transitions";
import StatusIndicator from "./statusIndicator";
export default function SectionTitle({
  title,
  className = "",
  divider = true,
}) {
  return (
    <div className={`mb-8 ${className}`}>
      <div className="flex items-center">
        <StatusIndicator variant="default" size="sm" />
        <motion.h3
          variants={delayedFade}
          initial="initial"
          animate="enter"
          exit="exit"
          className="sectionTitle text-black mb-0"
        >
          {title}
        </motion.h3>
      </div>
      {divider && <hr className="border-t-[1px] border-gray mt-2" />}
    </div>
  );
}
