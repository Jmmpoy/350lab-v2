import { motion } from "framer-motion";

export default function StatusIndicator({
  variant = "default",
  size = "md",
  className = "",
}) {
  const sizes = {
    sm: {
      container: "w-6 h-6",
      dot: "w-0.5 h-0.5",
      core: "w-2 h-2",
      outer: "w-4 h-4",
      mid: "w-3 h-3",
    },
    md: {
      container: "w-8 h-8",
      dot: "w-1 h-1",
      core: "w-2.5 h-2.5",
      outer: "w-6 h-6",
      mid: "w-4 h-4",
    },
    lg: {
      container: "w-10 h-10",
      dot: "w-1 h-1",
      core: "w-3 h-3",
      outer: "w-8 h-8",
      mid: "w-5 h-5",
    },
  };

  const s = sizes[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center ${s.container} ${className}`}
    >
      {/* Container des cercles concentriques */}
      <div className="relative flex items-center justify-center">
        {/* Onde externe (la plus grande) */}
        <motion.div
          className={`absolute ${s.outer} rounded-full border-2 border-accent-red`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.3],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        {/* Onde moyenne */}
        <motion.div
          className={`absolute ${s.mid} rounded-full bg-accent-red`}
          style={{ opacity: 0.25 }}
          animate={{
            scale: [1, 1.3],
            opacity: [0.25, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.4,
          }}
        />

        {/* Cercle central animé */}
        <motion.div
          className={`relative ${s.core} rounded-full bg-accent-red shadow-lg`}
          animate={{
            scale: [1, 1.15, 1],
            boxShadow: [
              "0 0 0 0px rgba(255, 0, 0, 0.4)",
              "0 0 0 8px rgba(255, 0, 0, 0)",
              "0 0 0 0px rgba(255, 0, 0, 0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
