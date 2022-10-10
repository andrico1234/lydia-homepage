import React, { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { containerVariants } from "../../animations/variants"
import { GatsbyImage, GatsbyImageProps, getImage } from "gatsby-plugin-image"
import useWindow from "../../hooks/useWindow"
import { useInView } from "react-intersection-observer"
import { Modal } from "../Modal"

interface Image {
  name: string
  childImageSharp: {
    thumbnail: GatsbyImageProps["image"]
    full: GatsbyImageProps["image"]
  }
}

interface Props {
  images: Image[]
}

function getGalleryColumns(width: number) {
  if (width <= 600) {
    return 1
  }

  if (width <= 960) {
    return 2
  }

  return 3
}

function generateImageColumns(images: Image[], columnCount: number): Image[][] {
  const imageColumns = images.reduce((acc, curr, i) => {
    const columnToAddImageTo = i % columnCount

    if (!acc[columnToAddImageTo]) {
      acc[columnToAddImageTo] = []
    }

    acc[columnToAddImageTo].push(curr)

    return acc
  }, [])

  return imageColumns
}

export function Gallery(props: Props) {
  const { width } = useWindow()
  const [selectedImage, setSelectedImage] = useState(-1)
  const { images } = props

  const imageList = images.map(({ name }) => name)

  const galleryColumns = getGalleryColumns(width)

  const imageColumns = useMemo(
    () => generateImageColumns(images, galleryColumns),
    [images, galleryColumns]
  )

  return (
    <>
      <Modal
        selectedImage={images[selectedImage]?.childImageSharp?.full ?? null}
        closeModal={() => setSelectedImage(-1)}
      />
      <ImageGallery
        imageList={imageList}
        imageColumns={imageColumns}
        openModal={setSelectedImage}
      />
    </>
  )
}

interface GalleryProps {
  imageColumns: Image[][]
  imageList: string[]
  openModal: (index: number) => void
}

function ImageGallery(props: GalleryProps) {
  function openModal(src: string) {
    const indexOfModal = props.imageList.indexOf(src)

    props.openModal(indexOfModal)
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {props.imageColumns.map((col, i) => {
        return (
          <motion.div
            key={i}
            variants={containerVariants}
            animate="visible"
            initial="hidden"
            style={{
              flexBasis: "300px",
            }}
          >
            {col.map((image, j) => {
              return (
                <Image
                  key={j}
                  thumbnail={image.childImageSharp.full}
                  column={i}
                  openModal={() => openModal(image.name)}
                />
              )
            })}
          </motion.div>
        )
      })}
    </div>
  )
}

interface ImageProps {
  thumbnail: GatsbyImageProps["image"]
  column: number
  openModal: () => void
}

function Image(props: ImageProps) {
  const threshold = 0.5 + 0.15 * props.column

  const image = getImage(props.thumbnail)

  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  })

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      ref={ref}
      onClick={props.openModal}
      style={{
        padding: "8px",
      }}
    >
      <GatsbyImage
        imgStyle={{
          width: "100%",
          opacity: inView ? 1 : 0,
          cursor: "pointer",
          transition: "opacity 0.3s ease-out",
        }}
        image={image!}
        alt="aasa"
      />
    </motion.div>
  )
}
