import { motion } from "framer-motion";

// Composant pour animer le texte mot par mot
export default function AnimatedText({
  parts,
  className,
  delay = 0,
  shouldAnimate = true,
}) {
  // Convertir les parts en mots individuels
  const words = [];
  parts.forEach((part, partIndex) => {
    const partWords = part.text.split(" ").filter((word) => word.length > 0);
    partWords.forEach((word, wordIndex) => {
      words.push({
        word: word,
        color: part.color,
        italic: part.italic,
      });
    });
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.h3
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
    >
      {words.map((item, index) => (
        <span
          key={index}
          className="inline-block"
          style={{ marginRight: "0.25em" }}
        >
          <motion.span
            variants={wordVariants}
            className={`inline-block ${item.color} ${
              item.italic ? "italic" : ""
            }`}
          >
            {item.word}
          </motion.span>
        </span>
      ))}
    </motion.h3>
  );
}
