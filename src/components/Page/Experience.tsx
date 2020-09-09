import React from "react"
import { motion } from "framer-motion"
import experience from "../../data/experience"
import { containerVariants } from "../../animations/variants"

export function Experience() {
  return (
    <motion.div variants={containerVariants} animate="visible" initial="hidden">
      {experience.map(({ title, items }) => {
        return (
          <>
            <h3>{title}</h3>
            <ul>
              {items.map((content, i) => {
                return <li key={i}>{content}</li>
              })}
            </ul>
          </>
        )
      })}
    </motion.div>
  )
}
