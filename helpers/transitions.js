export const fade = {
  initial: { opacity: 0, filter: "blur(10px)" },
  enter: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] },
  },
};

export const delayedFade = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1], delay: 0.8 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] },
  },
};

export const stagger = {
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

export const slideInLeft = {
  closed: {
    x: "-100%",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.79, 0.14, 0.15, 0.86],
    },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.46, 0.03, 0.52, 0.96],
    },
  },
};

//hero
export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 2,
      staggerChildren: 0,
      delayChildren: 0.2,
    },
  },
};

//INTRO
export const LogoReveal = {
  hidden: {
    y: 300,
    opacity: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    y: 0,
    opacity: 1,
    fill: "rgba(255, 255, 255, 1)",
    transition: {
      delay: 0.2,
      duration: 1.2,
      ease: [0.77, 0, 0.18, 1],
    },
  },
};
