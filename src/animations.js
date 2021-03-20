export const slideIn = {
  hidden: {
    opacity: 0,
    x: "-500px",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.85,
      },
    },
  },
};

export const popup = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    y: "500px",
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.75,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.75,
      },
    },
  },
};

export const navAnim = {
  hidden: {
    opacity: 0,
    y: "-100px",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.75,
      },
    },
  },
};
