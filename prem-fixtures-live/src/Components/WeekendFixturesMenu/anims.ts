const easeOutQuint = [0.22, 1, 0.36, 1];

export const weekendMenu = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.7, ease: [...easeOutQuint] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.7, ease: [...easeOutQuint] },
  },
};
