import React from "react"
import { motion } from "framer-motion"

interface Props {
  style: React.CSSProperties
}

export function Chevron(props: Props) {
  return (
    <div style={props.style}>
      <motion.svg
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, delay: 1 },
        }}
        width={36}
        style={{
          fill: "var(--pink-7)",
        }}
        viewBox="0 0 407.437 407.437"
      >
        <path d="M386.258 91.567l-182.54 181.945L21.179 91.567 0 112.815 203.718 315.87l203.719-203.055z" />
      </motion.svg>
    </div>
  )
}
