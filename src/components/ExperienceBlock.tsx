import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import useWindow from "../hooks/useWindow"
import { useInView } from "react-intersection-observer"
import * as styles from "./ExperienceBlock.module.css"

interface ExperienceBlockProps {
  title: string
  img: React.ReactNode
  description: React.ReactNode
  reverse?: boolean
}

export function ExperienceBlock(props: ExperienceBlockProps) {
  const { title, description, img, reverse } = props
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <div ref={ref} className={styles.ExperienceBlock}>
      <AnimatePresence>
        {inView && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            className={`${styles.ExperienceBlock__block} ${
              reverse && styles.ExperienceBlock__block_reverse
            }`}
          >
            <div className={styles.ExperienceBlock__textWrapper}>
              <h2>{title}</h2>
              {description}
            </div>
            <div className={styles.ExperienceBlock__imageWrapper}>{img}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
