import React from "react"
import imgThreeSrc from "../images/gallery.jpg"
import { PageLayout } from "../components/layouts/PageLayout"
import { Gallery } from "../components/Page/Gallery"
import { graphql } from "gatsby"
import { GatsbyImageProps } from "gatsby-plugin-image"

interface Props {
  data: {
    allFile: {
      edges: {
        node: {
          name: string
          childImageSharp: {
            thumbnail: GatsbyImageProps["image"]
            full: GatsbyImageProps["image"]
          }
        }
      }[]
    }
  }
}

const GalleryPage = ({ data }: Props) => {
  const nodes = data.allFile.edges.map(({ node }) => node)

  const sortedImages = nodes.sort((a, b) => {
    if (a.name < b.name) {
      return -1
    }

    return 1
  })

  return (
    <PageLayout title="Gallery" imgSrc={imgThreeSrc}>
      <Gallery images={sortedImages} />
    </PageLayout>
  )
}

export default GalleryPage

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
      edges {
        node {
          name
          childImageSharp {
            thumbnail: gatsbyImageData(
              layout: CONSTRAINED
              width: 300
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
