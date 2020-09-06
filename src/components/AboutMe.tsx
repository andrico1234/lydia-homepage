import React from "react"
import { motion, Variants } from "framer-motion"
import bioData from "../data/bio"

const containerVariants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delay: 2,
      duration: 0.4,
    },
  },
  hidden: {
    opacity: 0,
  },
}

export function AboutMe() {
  return (
    <motion.div variants={containerVariants} animate="visible" initial="hidden">
      {bioData.map(({ text, id }) => {
        return <React.Fragment key={id}>{text}</React.Fragment>
      })}
    </motion.div>
  )
}
