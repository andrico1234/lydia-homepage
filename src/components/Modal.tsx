import React, { useEffect } from "react"
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"
import styles from "../styles/Modal.module.css"
import { Loader } from "./Loader"
import Img, { FluidObject } from "gatsby-image"

interface Props {
  selectedImage: FluidObject | null
  closeModal: () => void
}

export function Modal(props: Props) {
  const { selectedImage, closeModal } = props

  const html = document.querySelector("html")

  useEffect(() => {
    selectedImage
      ? (html.style.overflow = "hidden")
      : (html.style.overflow = "visible")
  }, [selectedImage])

  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            onPointerUp={e => {
              e.stopPropagation()
              return closeModal()
            }}
            id="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.Modal__wrapper}
          >
            <motion.div
              className={styles.Modal}
              animate={{ y: "-50%", x: "-50%" }}
              initial={{ y: "-45%", x: "-50%" }}
              exit={{ y: "-55%" }}
              transition={{ ease: "easeOut" }}
              style={{ width: "90%", textAlign: "center" }}
            >
              <div style={{ width: "100%", position: "relative" }}>
                <Loader />
                <Img
                  style={{ margin: "1rem", maxHeight: "90vh" }}
                  imgStyle={{
                    width: "100%",
                    objectFit: "contain",
                  }}
                  fluid={props.selectedImage}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}
