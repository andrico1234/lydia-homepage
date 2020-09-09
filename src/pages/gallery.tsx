import React from "react"
import imgThreeSrc from "../images/gallery.jpg"
import { PageLayout } from "../components/layouts/PageLayout"
import { Gallery } from "../components/Page/Gallery"
import { graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

interface Props {
  data: {
    allFile: {
      edges: {
        node: {
          childImageSharp: {
            thumbnail: FluidObject & { originalName: string }
            full: FluidObject
          }
        }
      }[]
    }
  }
}

const GalleryPage = ({ data }: Props) => {
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp)
  const sortedImages = images.sort((a, b) => {
    if (a.thumbnail.originalName < b.thumbnail.originalName) {
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
          childImageSharp {
            thumbnail: fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_noBase64
              originalName
            }
            full: fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`
