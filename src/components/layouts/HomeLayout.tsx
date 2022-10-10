import React from "react"
import { Footer } from "../Footer"
import * as styles from "./layout.module.css"
import { UpcomingProject } from "../UpcomingProject"
import SEO from "../seo"
import { SocialIcons } from "../SocialIcons"

export function HomeLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <SEO title="Home" />
      <div className={styles.Layout}>
        {children}
        <UpcomingProject />
        <SocialIcons />
        <Footer />
      </div>
    </div>
  )
}
