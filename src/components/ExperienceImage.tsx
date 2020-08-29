import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface Props {
  src: string
  description: string
  onClick?: () => void
}

export function ExperienceImage(props: Props) {
  const { src, description, onClick } = props
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  })

  return (
    <div
      style={{ height: "200px", width: "250px", transform: "scale(1)" }}
      ref={ref}
    >
      {inView && (
        <motion.div
          onTap={() => {
            if (onClick) {
              onClick()
            }
          }}
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
            width: "250px",
            background: "white",
          }}
        >
          <img src={src} style={{ margin: 0, maxWidth: "100%" }} />
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
