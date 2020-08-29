import React, { useEffect, useState } from "react"
import {
  motion,
  AnimatePresence,
  useViewportScroll,
  useTransform,
} from "framer-motion"

export function SplitText() {
  const { scrollYProgress } = useViewportScroll()
  const [hasLoaded, setLoadedState] = useState(false)
  const [hasPassedLimit, setPassedLimitState] = useState(false)
  const yPosTopText = useTransform(scrollYProgress, [0.05, 0.25], [25, 0])
  const yPosBottomText = useTransform(scrollYProgress, [0.05, 0.25], [-25, 0])

  useEffect(() => {
    setTimeout(() => {
      setLoadedState(true)
    }, 1600)
  }, [])

  useEffect(() => {
    scrollYProgress.onChange(progress => {
      if (progress >= 0.25 && !hasPassedLimit) {
        return setPassedLimitState(true)
      }

      if (progress < 0.25 && hasPassedLimit) {
        return setPassedLimitState(false)
      }
    })
  })

  return (
    <AnimatePresence exitBeforeEnter>
      <div style={{ textAlign: "center" }}>
        <div style={{ overflow: "hidden" }}>
          <motion.h2
            exit={{ opacity: 0 }}
            layout
            style={{
              fontSize: "60px",
              margin: 0,
              y: hasLoaded ? yPosTopText : 80,
              x: hasPassedLimit ? -200 : 0,
            }}
            animate={{
              y: 25,
              transition: { ease: "linear", duration: 0.8, delay: 0.8 },
            }}
            transition={{ duration: 0.8 }}
          >
            Ballet
          </motion.h2>
        </div>
        <motion.div style={{ overflow: "hidden" }}>
          <motion.h2
            exit={{ opacity: 0 }}
            layout
            style={{
              fontSize: "60px",
              margin: 0,
              y: hasLoaded ? yPosBottomText : -80,
              x: hasPassedLimit ? 200 : 0,
            }}
            animate={{
              y: -25,
              transition: { ease: "linear", duration: 0.8, delay: 0.8 },
            }}
            transition={{ duration: 0.8 }}
          >
            Contemporary
          </motion.h2>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
