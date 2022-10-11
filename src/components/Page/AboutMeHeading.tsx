import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"

interface Props {
  title: string
}

export function AboutMeHeading(props: Props) {
  const { title } = props

  return (
    <header
      style={{
        textAlign: "center",
        padding: "48px 0 24px",
        height: "160px",
      }}
    >
      <Link
        to="/"
        style={{
          position: "relative",
          textDecoration: "none",
          color: "#090c08",
        }}
      >
        <motion.div
          layout
          style={{
            position: "relative",
            minWidth: "300px",
            margin: "0 auto",
          }}
        >
          <motion.h1
            layout
            initial={{ fontSize: "min(10vw, 74px)" }}
            animate={{ fontSize: "min(10vw, 39px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            Lydia MacKenzie
          </motion.h1>
          <motion.span
            initial={{
              width: "0",
            }}
            animate={{
              width: "100%",
              transition: { delay: 1.6, duration: 0.4, ease: "easeOut" },
            }}
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              content: " ",
              borderBottom: "1px solid #090c08",
            }}
          />
        </motion.div>
      </Link>

      <motion.h2
        key="about-header"
        style={{
          fontSize: "24px",
          fontWeight: "lighter",
          margin: 0,
          width: "100%",
          textAlign: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.8, delay: 0.8, ease: "easeOut" },
        }}
      >
        {title}
      </motion.h2>
    </header>
  )
}
