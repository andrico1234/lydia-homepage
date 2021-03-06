import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const query = graphql`
  query {
    file(relativePath: { eq: "dance-artist.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export function DanceArtistMobileImage() {
  const { file } = useStaticQuery(query)

  return (
    <div style={{ textAlign: "center" }}>
      <Img imgStyle={{ width: "100%" }} fluid={file.childImageSharp.fluid} />
    </div>
  )
}
