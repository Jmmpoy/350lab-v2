import { motion } from "framer-motion";

export default function RecordingIndicator({ size = "md", className = "" }) {
  const sizes = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  return (
    <div className={`relative ${sizes[size]} ${className}`}>
      {/* Point noir en haut à gauche */}
      <motion.div
        className="absolute top-0 left-0 w-1.5 h-1.5 bg-black rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      />

      {/* Container central */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Cercle externe pulsant (grande onde) */}
        <motion.div
          className="absolute w-12 h-12 rounded-full bg-accent-red opacity-20"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Cercle moyen pulsant */}
        <motion.div
          className="absolute w-8 h-8 rounded-full bg-accent-red opacity-30"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />

        {/* Cercle central rouge (point principal) */}
        <motion.div
          className="relative w-5 h-5 rounded-full bg-accent-red"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Petit trait noir en bas à droite */}
      <motion.div
        className="absolute bottom-0 right-0 w-2 h-0.5 bg-black rounded-full"
        style={{ transform: "rotate(-45deg)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      />
    </div>
  );
}


