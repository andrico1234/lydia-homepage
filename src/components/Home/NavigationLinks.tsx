import React from "react"
import classnames from "classnames"
import * as styles from "./NavigationLinks.module.css"
import { motion, AnimatePresence } from "framer-motion"

interface Props {
  activeId: string
  links: string[]
  onClickLink: (id: string) => void
  isFadingOut: boolean
}

export function NavigationLinks(props: Props) {
  const { activeId, links, onClickLink, isFadingOut } = props
  return (
    <AnimatePresence>
      <div
        style={{
          height: "30px",
        }}
      >
        {!isFadingOut && (
          <motion.div className={styles.NavigationLinks}>
            {links.map((link, i) => {
              return (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    flex: i === 1 ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  onClick={() => onClickLink(link)}
                  key={link}
                  className={styles.link}
                >
                  <motion.p
                    whileHover={{
                      scale: 1.2,
                    }}
                    className={classnames(styles.text, {
                      [styles.text_active]: link === activeId,
                    })}
                  >
                    {link}
                  </motion.p>
                </motion.span>
              )
            })}
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  )
}
