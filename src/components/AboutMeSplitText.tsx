import React from "react"
import { motion } from "framer-motion"

export function AboutMeSplitText() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div style={{ overflow: "hidden" }}>
          <motion.h2
            initial={{
              opacity: 1,
              y: 25,
            }}
            animate={{
              opacity: 0,
              height: 0,
              transition: { ease: "linear", duration: 0.8 },
            }}
            layout
            style={{
              fontSize: "60px",
              margin: 0,
            }}
          >
            Ballet
          </motion.h2>
        </div>
        <motion.div style={{ overflow: "hidden" }}>
          <motion.h2
            initial={{ opacity: 1, y: -25 }}
            layout
            style={{
              fontSize: "60px",
              margin: 0,
            }}
            animate={{
              opacity: 0,
              height: 0,
              transition: { ease: "linear", duration: 0.8 },
            }}
          >
            Contemporary
          </motion.h2>
        </motion.div>
      </div>
    </>
  )
}
