import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export function ChoreographerImage() {
  return (
    <div style={{ textAlign: "center" }}>
      <StaticImage
        imgStyle={{ width: "100%" }}
        style={{ maxWidth: 420 }}
        src="../../images/choreographer-two.jpg"
        alt="choreographer"
      />
    </div>
  )
}
