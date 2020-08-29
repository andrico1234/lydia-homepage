import React from "react"
import imgSrc from "../images/lydia.png"
import { motion } from "framer-motion"

export function AboutMePicture() {
  return (
    <motion.div
      initial={{ width: 400 }}
      animate={{ width: 836, transition: { duration: 0.8, ease: "easeOut" } }}
      style={{
        textAlign: "center",
        height: "400px",
        margin: "24px auto",
        overflow: "hidden",
      }}
    >
      <motion.img
        initial={{ scale: 1.1, width: 400 }}
        style={{ margin: 0 }}
        animate={{
          scale: 1.0,
          y: -160,
          transition: { duration: 1.2, ease: "easeOut" },
          width: 836,
        }}
        src={imgSrc}
      />
    </motion.div>
  )
}
