import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const query = graphql`
  query {
    file(relativePath: { eq: "teacher.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 420) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export function TeacherImage() {
  const { file } = useStaticQuery(query)

  console.log("file", file)

  return (
    <div style={{ textAlign: "center" }}>
      <Img imgStyle={{ width: "100%" }} fluid={file.childImageSharp.fluid} />
    </div>
  )
}
