import React from "react"
import { useViewportScroll, useTransform, motion } from "framer-motion"
import { ExperienceImage } from "./ExperienceImage"
import { BalletExperience } from "./BalletExperience"
import { ContemporaryExperience } from "./ContemporaryExperience"

export function Experience() {
  const { scrollYProgress } = useViewportScroll()
  const leftHeight = useTransform(scrollYProgress, [0.15, 0.95], [0, 1200])
  const rightHeight = useTransform(scrollYProgress, [0.25, 1], [0, 1200])

  return (
    <div
      style={{
        height: "1200px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div style={{ margin: "0 auto", position: "relative", flex: 1 }}>
        <div style={{ height: "80px" }} />
        <motion.div
          initial={{ height: 0 }}
          style={{
            top: 0,
            border: "1px solid #FFB1BB",
            position: "absolute",
            left: "50%",
            height: leftHeight,
          }}
        />
        <BalletExperience />
      </div>
      <div style={{ margin: "0 auto", position: "relative", flex: 1 }}>
        <div style={{ height: "220px" }} />
        <motion.div
          style={{
            top: 0,
            position: "absolute",
            left: "50%",
            border: "1px solid #BAA58D",
            height: rightHeight,
          }}
        />
        <ContemporaryExperience />
      </div>
    </div>
  )
}
