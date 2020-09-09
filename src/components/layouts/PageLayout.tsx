import React from "react"
import styles from "./layout.module.css"
import { motion } from "framer-motion"
import { AboutMePicture } from "../Page/AboutMePicture"
import { AboutMeHeading } from "../Page/AboutMeHeading"
import { UpcomingProject } from "../UpcomingProject"
import { SocialIcons } from "../SocialIcons"
import { Footer } from "../Footer"
import SEO from "../seo"

interface Props {
  imgSrc: string
  children: React.ReactNode
  title: string
}

export function PageLayout(props: Props) {
  const { imgSrc, children, title } = props

  return (
    <div className={styles.wrapper}>
      <SEO title={title} />
      <div className={styles.Layout}>
        <AboutMeHeading title={title} />
        <motion.p
          style={{ margin: 0, height: "30px" }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.8, delay: 0.8, ease: "easeOut" },
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
