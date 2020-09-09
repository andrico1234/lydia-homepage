import { Variants } from "framer-motion"

export const variants: Variants = {
  visible: {},
  hidden: {},
}

export const containerVariants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delay: 0.8,
      ease: "easeOut",
      duration: 0.8,
    },
  },
  hidden: {
    opacity: 0,
  },
}
