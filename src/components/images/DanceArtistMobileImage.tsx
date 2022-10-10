import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export function DanceArtistMobileImage() {
  return (
    <div style={{ textAlign: "center" }}>
      <StaticImage
        imgStyle={{ width: "100%" }}
        src="../../images/dance-artist.jpg"
        style={{ maxWidth: "600" }}
        alt="dance artist"
      />
    </div>
  )
}
