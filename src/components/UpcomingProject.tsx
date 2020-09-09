import React from "react"
import { LinkButton } from "./Button"
import useCycle from "../hooks/useCycle"
import { AnimatePresence, motion } from "framer-motion"

const titles = ["dance artist", "teacher", "choreographer"]

const variants = {
  enter: {
    y: 30,
    opacity: 0,
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    y: -30,
    opacity: 0,
  },
}

export function UpcomingProject() {
  const { currentValue, setNextValue } = useCycle(titles, 0)

  return (
    <div style={{ textAlign: "center", padding: "16px 0" }}>
      <h3
        style={{
          textAlign: "center",
          padding: "16px 0",
          margin: 0,
          fontSize: "min(5vw, 32px)",
        }}
      >
        Need a{" "}
        <AnimatePresence initial={false} exitBeforeEnter>
          <motion.span
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25 }}
            key={currentValue}
            style={{
              cursor: "pointer",
              textDecoration: "underline",
              display: "inline-block",
              width: "50%",
              maxWidth: "240px",
              textAlign: "center",
              padding: "16px 0",
            }}
            onClick={setNextValue}
          >
            {currentValue}
          </motion.span>
        </AnimatePresence>{" "}
        for an upcoming project?
      </h3>
      <LinkButton
        to="mailto://ljMacKenzie@hotmail.co.uk"
        title="Please get in touch"
      />
    </div>
  )
}
