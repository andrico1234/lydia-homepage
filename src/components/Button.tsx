import React from "react"
import styles from "./Button.module.css"

interface Props {
  to: string
  title: string
}

export function LinkButton(props: Props) {
  const { to, title } = props
  return (
    <a href={to} className={styles.LinkButton}>
      {title}
    </a>
  )
}
