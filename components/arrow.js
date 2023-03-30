import React from 'react'
import {motion} from "framer-motion"
import { delayedFade } from '@/helpers/transitions'
export default function Arrow({style, size}) {
  return (
    <motion.div
        variants={delayedFade}
        initial="initial"
        animate="enter"
        exit="exit"
        className={style}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={size}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </motion.div>
  )
}
