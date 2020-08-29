import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface Props {
  src: string
  description: string
}

export function ExperienceImage(props: Props) {
  const { src, description } = props
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  })

  return (
    <div
      style={{ height: "280px", width: "300px", transform: "scale(1)" }}
      ref={ref}
    >
      {inView && (
        <motion.div
          className="ExperienceImage"
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 },
          }}
          whileHover={{
            scale: 1.1,
          }}
          transition={{ duration: 0.3 }}
          style={{
            width: "300px",
            height: "200px",
            background: "white",
          }}
        >
          <img src={src} style={{ margin: 0 }} />
          <motion.p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              margin: 0,
              position: "relative",
              bottom: "47px",
              height: "40px",
              backgroundColor: "#090c08",
            }}
          >
            {description}
          </motion.p>
        </motion.div>
      )}
    </div>
  )
}
