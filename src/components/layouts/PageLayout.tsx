import React from "react"
import styles from "./layout.module.css"
import { motion } from "framer-motion"
import { AboutMePicture } from "../AboutMePicture"
import { AboutMeHeading } from "../AboutMeHeading"
import { UpcomingProject } from "../UpcomingProject"
import { SocialIcons } from "../SocialIcons"
import { Footer } from "../Footer"

console.log("styles", styles)

interface Props {
  imgSrc: string
  children: React.ReactNode
}

export function PageLayout(props: Props) {
  const { imgSrc, children } = props

  return (
    <div className={styles.wrapper}>
      <div className={styles.Layout}>
        <AboutMeHeading />
        <motion.p
          style={{ margin: 0 }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.8, delay: 2 },
          }}
        >
          Dance Artist. Teacher. Choreographer.
        </motion.p>
        <AboutMePicture imgSrc={imgSrc} />
        {children}
        <UpcomingProject />
        <SocialIcons />
        <Footer />
      </div>
    </div>
  )
}
