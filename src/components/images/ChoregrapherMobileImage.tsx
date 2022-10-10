import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export function ChoreographerMobileImage() {
  return (
    <div style={{ textAlign: "center" }}>
      <StaticImage
        imgStyle={{ width: "100%" }}
        style={{ maxWidth: 600 }}
        src="../../images/choreographer.jpg"
        alt="choreographer"
      />
    </div>
  )
}
