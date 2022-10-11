import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import imgOneSrc from "../../images/about.jpg"
import imgTwoSrc from "../../images/experience.jpg"
import imgThreeSrc from "../../images/gallery.jpg"
import imgFourSrc from "../../images/blog.jpg"
import * as styles from "./HeroImage.module.css"

const images = [imgOneSrc, imgFourSrc, imgThreeSrc, imgTwoSrc]

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
  const [height, setHeight] = useState(500)
  const currentImage = images[currentIndex]

  function updateHeight() {
    const img = document.getElementById("hero-image")

    const newHeight = img.clientWidth

    if (height === newHeight) return

    if (newHeight === 0) {
      const docWidth = window.innerWidth
      const sidePadding = 48
      const margin = docWidth * 0.05
      const windowBoundaries = docWidth - sidePadding - margin

      return setHeight(Math.min(windowBoundaries, 500))
    }

    return setHeight(newHeight)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.2 } }}
      style={{ height }}
      id="hero-image"
      className={styles.HeroImage}
    >
      <Link to={`/${activeId}`}>
        <AnimatePresence initial={false} exitBeforeEnter>
          <motion.img
            variants={variants}
            onAnimationComplete={updateHeight}
            initial="enter"
            animate="center"
            exit="exit"
            className={styles.image}
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
