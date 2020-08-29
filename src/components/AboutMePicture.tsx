import React from "react"
import imgSrc from "../images/lydia.png"
import { motion } from "framer-motion"

export function AboutMePicture() {
  return (
    <div
      style={{
        textAlign: "center",
        width: "400px",
        height: "400px",
        margin: "24px auto",
      }}
    >
      <motion.img
        initial={{ scale: 1.1 }}
        style={{ margin: 0 }}
        animate={{ scale: 1.0, transition: { duration: 0.3 } }}
        width={400}
        src={imgSrc}
      />
    </div>
  )
}
