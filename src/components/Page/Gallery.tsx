import React, { useMemo } from "react"
import { motion } from "framer-motion"
import { containerVariants } from "../../animations/variants"
import Img, { FluidObject } from "gatsby-image"
import useWindow from "../../hooks/useWindow"

interface Image {
  thumbnail: FluidObject
  full: FluidObject
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
  const { images } = props

  const galleryColumns = getGalleryColumns(width)

  const imageColumns = useMemo(
    () => generateImageColumns(images, galleryColumns),
    [images, galleryColumns]
  )

  return <ImageGallery imageColumns={imageColumns} />
}

interface GalleryProps {
  imageColumns: Image[][]
}

function ImageGallery(props: GalleryProps) {
  console.log('props.imageColumns', props.imageColumns);
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
            {col.map(image => {
              return (
                <div
                  style={{
                    flexBasis: "300px",
                    margin: "24px 16px",
                  }}
                >
                  <Img imgStyle={{ width: "100%" }} fluid={image.thumbnail} />
                </div>
              )
            })}
          </motion.div>
        )
      })}
    </div>
  )
}
