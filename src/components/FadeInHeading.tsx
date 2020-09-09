import React from "react"
import { motion } from "framer-motion"

export function FadeInHeading() {
  return (
    <header
      style={{ textAlign: "center", padding: "48px 0 24px", height: "160px" }}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "min(9vw, 74px)", margin: 0, fontWeight: 400 }}
      >
        Lydia MacKenzie
      </motion.h1>
    </header>
  )
}
