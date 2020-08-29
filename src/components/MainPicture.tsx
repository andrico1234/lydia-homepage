import React from "react"
import imgSrc from "../images/lydia.png"
import { motion } from "framer-motion"
import { Link } from "gatsby"

export function MainPicture() {
  return (
    <div
      style={{
        textAlign: "center",
        width: "400px",
        height: "400px",
        margin: "24px auto",
      }}
    >
      <Link to="/about-me">
        <motion.img
          initial={{ opacity: 0 }}
          style={{ cursor: "pointer", margin: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.2 } }}
          whileHover={{
            scale: 1.1,
          }}
          transition={{ duration: 0.3 }}
          width={400}
          src={imgSrc}
        />
      </Link>
    </div>
  )
}
