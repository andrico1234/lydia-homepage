import React from "react"
import BalletTwo from "../images/ballet-two.png"
import { useInView } from "react-intersection-observer"
import { AnimatePresence, motion } from "framer-motion"

export function ExperienceTwo() {
  return (
    <div>
      <ExperienceBlock title="Dance Artist" imgSrc={BalletTwo} />
      <ExperienceBlock title="Teacher" reverse imgSrc={BalletTwo} />
      <ExperienceBlock title="Choreographer" imgSrc={BalletTwo} />
    </div>
  )
}

interface ExperienceBlockProps {
  title: string
  reverse?: boolean
  imgSrc: string
}

function ExperienceBlock(props: ExperienceBlockProps) {
  const { title, reverse, imgSrc } = props
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  })

  return (
    <div ref={ref} style={{ height: "350px" }}>
      <AnimatePresence>
        {inView && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            style={{
              display: "flex",
              flexDirection: reverse ? "row-reverse" : "row",
              padding: "32px 0",
            }}
          >
            <h2
              style={{
                flex: "1 1 150px",
                alignItems: "center",
                fontSize: "32px",
                display: "flex",
                justifyContent: reverse ? "flex-end" : "flex-start",
              }}
            >
              {title}
            </h2>
            <div
              style={{
                flex: "1 1 150px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img width="100%" src={imgSrc} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
