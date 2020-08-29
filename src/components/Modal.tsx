import React from "react"
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"
import BalletOne from "../images/ballet-one.png"
import styles from "../styles/Modal.module.css"

interface Props {
  isVisible: boolean
  setVisibility: (isVisible: boolean) => void
}

export function Modal(props: Props) {
  const { setVisibility, isVisible } = props

  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            onPointerDown={e => {
              if ((e.target as HTMLDivElement).id === "overlay") {
                return setVisibility(false)
              }
            }}
            id="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.UploadJourney__wrapper}
          >
            <motion.div
              className={styles.UploadJourney}
              animate={{ y: "-50%", x: "-50%" }}
              initial={{ y: "-35%", x: "-50%" }}
              exit={{ y: "-65%" }}
              transition={{ ease: "easeOut" }}
            >
              <div style={{ maxWidth: "900px" }}>
                <h1>Photo</h1>
                <img src={BalletOne} style={{ maxWidth: "900px" }} />
                <p>Taken with xyz at 1st January 1970</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}
