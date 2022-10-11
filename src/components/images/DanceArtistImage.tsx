import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export function DanceArtistImage() {
  return (
    <div style={{ textAlign: "center" }}>
      <StaticImage
        imgStyle={{ width: "100%" }}
        style={{ maxWidth: 600 }}
        src="../../images/dance-artist.jpg"
        alt="dance artist"
      />
    </div>
  )
}
