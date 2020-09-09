import React from "react"
import { motion } from "framer-motion"
import bioData from "../../data/bio"
import { containerVariants } from '../../animations/variants';

export function AboutMe() {
  return (
    <motion.div variants={containerVariants} animate="visible" initial="hidden">
      {bioData.map(({ text, id }) => {
        return <React.Fragment key={id}>{text}</React.Fragment>
      })}
    </motion.div>
  )
}
