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
      <motion.img style={{ margin: 0, width: "100%" }} src={imgSrc} />
    </motion.div>
  )
}
