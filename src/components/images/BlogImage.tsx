import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export function BlogImage() {
  return (
    <div style={{ textAlign: "center" }}>
      <StaticImage
        imgStyle={{ width: "100%" }}
        src="../../images/blog.jpg"
        style={{ maxWidth: "600" }}
        alt="teacher"
      />
    </div>
  )
}
