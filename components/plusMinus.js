import React, { useState } from "react";
import { motion } from "framer-motion";
//import { PlusIcon, MinusIcon } from './icons'; // Import des SVGs

const PlusMinusButton = ({toggleList, id}) => {
  const [isPlus, setIsPlus] = useState(true); // Etat initial : le bouton affiche le SVG "plus"

  const handleClick = () => {
    toggleList(id);
    setIsPlus(!isPlus); // Inverse l'état du bouton (SVG "plus" <-> SVG "moins")
  };

  const MinusIcon = () => {
    return(
        <svg
          class="w-10 h-10"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
        </svg>
    )
  }

  const PlusIcon = () => {
    return(
        <svg
          class="w-10 h-10"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
    )
  }

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.1 }} // Animation au survol
      whileTap={{ scale: 0.9 }} // Animation au clic
    >
      {isPlus ? (
        <PlusIcon/>
      ) : (
        <MinusIcon/>
      )}
    </motion.button>
  );
};

export default PlusMinusButton;
