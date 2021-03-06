import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const query = graphql`
  query HeaderQuery {
    file(relativePath: { eq: "insta-logo.png" }) {
      childImageSharp {
        fixed(width: 32) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`

export function SocialIcons() {
  const { file } = useStaticQuery(query)

  return (
    <div style={{ textAlign: "center", padding: "24px 0" }}>
      <a href="https://www.instagram.com/lydiamacx/">
        <Img imgStyle={{ width: "100%" }} fixed={file.childImageSharp.fixed} />
      </a>
    </div>
  )
}