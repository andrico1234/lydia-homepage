import React from "react"
import * as styles from "./layout.module.css"
import { Footer } from "../Footer"
import SEO from "../seo"

interface Props {
  children: React.ReactNode
  title: string
}

export function PostLayout(props: Props) {
  const { children, title } = props

  return (
    <div className={styles.wrapper}>
      <SEO title={title} />
      <div className={styles.Layout}>
        {children}
        <Footer />
      </div>
    </div>
  )
}
