import React from "react"
import BalletTwo from "../images/ballet-two.png"
import { useInView } from "react-intersection-observer"
import { AnimatePresence, motion } from "framer-motion"

export function ExperienceTwo() {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
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
    threshold: 0.8,
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      style={{ height: "350px", flex: "1 0 370px", padding: "16px", maxWidth: '420px' }}
    >
      <AnimatePresence>
        {inView && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          >
            <h2
              style={{
                alignItems: "center",
                fontSize: "28px",
              }}
            >
              {title}
            </h2>
            <div
              style={{
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
