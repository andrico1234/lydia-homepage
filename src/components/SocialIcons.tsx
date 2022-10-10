import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export function SocialIcons() {
  return (
    <div style={{ textAlign: "center", padding: "24px 0" }}>
      <a href="https://www.instagram.com/lydiamacx/">
        <StaticImage
          imgStyle={{ width: "100%" }}
          width={32}
          src="../images/insta-logo.png"
          alt="instagram"
        />
      </a>
    </div>
  )
}
