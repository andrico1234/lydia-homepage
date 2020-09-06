import React from "react"
import { motion } from "framer-motion"

interface Props {
  imgSrc: string
}

export function AboutMePicture(props: Props) {
  const { imgSrc } = props

  return (
    <motion.div
      style={{
        textAlign: "center",
        height: "400px",
        width: "100%",
        margin: "24px auto",
        overflow: "hidden",
      }}
    >
      <motion.img
        initial={{ scale: 1.1 }}
        style={{ margin: 0, width: "100%" }}
        animate={{
          scale: 1.0,
          transition: { duration: 1.2, ease: "easeInOut" },
        }}
        src={imgSrc}
      />
    </motion.div>
  )
}
