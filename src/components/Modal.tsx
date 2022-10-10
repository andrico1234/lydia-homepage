import React, { useEffect } from "react"
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"
import * as styles from "../styles/Modal.module.css"
import { Loader } from "./Loader"
import { GatsbyImage, GatsbyImageProps } from "gatsby-plugin-image"

interface Props {
  selectedImage: GatsbyImageProps['image'] | null
  closeModal: () => void
}

export function Modal(props: Props) {
  const { selectedImage, closeModal } = props

  useEffect(() => {
    const html = document.querySelector("html")

    if (!html) return

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
                <GatsbyImage
                  style={{ margin: "1rem", maxHeight: "90vh" }}
                  imgStyle={{
                    width: "100%",
                    objectFit: "contain",
                  }}
                  image={props.selectedImage}
                  alt=""
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}
