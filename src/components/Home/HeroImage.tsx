import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import imgOneSrc from "../../images/about.jpg"
import imgTwoSrc from "../../images/lydia-two.png"
import imgThreeSrc from "../../images/gallery.jpg"
import styles from "./HeroImage.module.css"

const images = [imgOneSrc, imgTwoSrc, imgThreeSrc]

const variants = {
  enter: {
    x: 100,
    opacity: 0,
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    x: -100,
    opacity: 0,
  },
}

interface Props {
  currentIndex: number
  activeId: string
}

export function HeroImage(props: Props) {
  const { currentIndex, activeId } = props
  const [height, setHeight] = useState(0)
  const currentImage = images[currentIndex]

  useEffect(() => {
    const img = document.getElementById("hero-image")

    setHeight(img.clientWidth)
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.2 } }}
      style={{ height }}
      className={styles.HeroImage}
    >
      <Link to={`/${activeId}`}>
        <AnimatePresence initial={false} exitBeforeEnter>
          <motion.img
            id="hero-image"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className={styles.image}
            whileHover={{
              scale: 1.05,
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            width="100%"
            key={currentImage}
            src={currentImage}
          />
        </AnimatePresence>
      </Link>
    </motion.div>
  )
}
