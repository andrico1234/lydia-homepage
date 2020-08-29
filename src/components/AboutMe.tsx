import React from "react"
import { motion, Variants } from "framer-motion"

const containerVariants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",

      delay: 1,
      duration: 0.3,
      delayChildren: 5,
    },
  },
  hidden: {
    opacity: 0,
  },
}

const variants: Variants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
}

export function AboutMe() {
  return (
    <motion.div variants={containerVariants} animate="visible" initial="hidden">
      <motion.p variants={variants} initial="hidden" animate="visible">
        Hey <span role="img">😊</span>{" "}
      </motion.p>
      <motion.p variants={variants} initial="hidden" animate="visible">
        I'm Lydia, and I've been dancing for 5/6ths of my life.
      </motion.p>
      <motion.p variants={variants} initial="hidden" animate="visible">
        I got my degree at the Central School of Ballet and am performing and
        teaching as a Freelance Dancer
      </motion.p>
      <motion.p variants={variants} initial="hidden" animate="visible">
        I've performed at:
      </motion.p>
      <motion.ul variants={variants} initial="hidden" animate="visible">
        <li>A place</li>
        <li>Another place</li>
        <li>A third place</li>
      </motion.ul>
      <motion.p variants={variants} animate="visible" initial="hidden">
        And have taught Barre, HIIT, and Stretch classes at:
      </motion.p>
      <ul>
        <li>A place</li>
        <li>Another place</li>
        <li>A third place</li>
      </ul>
      <p>
        I'm always looking to try something new, so please{" "}
        <a style={{ color: "#090c08" }} href="">
          get in touch
        </a>{" "}
        if you have any interesting projects coming up
      </p>
      <p>
        You can also find me on{" "}
        <a style={{ color: "#090c08" }} href="">
          Instagram
        </a>
      </p>
    </motion.div>
  )
}
