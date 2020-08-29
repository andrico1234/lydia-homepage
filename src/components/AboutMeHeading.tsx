import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"

export function AboutMeHeading() {
  return (
    <header
      style={{
        textAlign: "center",
        padding: "48px 0 24px",
        height: "160px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        layout
        style={{ flex: 1, position: "relative" }}
        initial={{ x: 100 }}
        animate={{ x: "-166px" }}
        transition={{ ease: "easeInOut", delay: 0.8, duration: 1 }}
      >
        <Link
          to="/"
          style={{
            position: "relative",
            textDecoration: "none",
            color: "#090c08",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "fit-content",
              margin: "0 auto",
            }}
          >
            <motion.h1
              // layout
              initial={{ fontSize: "80px" }}
              animate={{ fontSize: "40px" }}
              transition={{ duration: 0.8 }}
              style={{ fontSize: "80px", margin: 0, fontWeight: "lighter" }}
            >
              LYDIA MACKENZIE
            </motion.h1>
            <motion.span
              initial={{
                width: "0",
              }}
              animate={{
                width: "306px",
                transition: { delay: 2, duration: 0.4, ease: "easeOut" },
              }}
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                content: " ",
                borderBottom: "1px solid #090c08",
              }}
            />
          </div>
        </Link>
      </motion.div>
      <motion.h1
        key="about-header"
        style={{
          fontSize: "40px",
          margin: 0,
          width: "200px",
          textAlign: "right",
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.8, delay: 0.8 },
        }}
      >
        About Me
      </motion.h1>
    </header>
  )
}
