export const navVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
  closed: {
    opacity: 0,
    y: -20,
    transition: { type: "spring", stiffness: 100 },
  },
};
