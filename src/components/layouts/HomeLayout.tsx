import React from "react"
import { Footer } from "../Footer"
import styles from "./layout.module.css"
import { UpcomingProject } from "../UpcomingProject"

export function HomeLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.Layout}>
        {children}
        <UpcomingProject />
        <Footer />
      </div>
    </div>
  )
}
