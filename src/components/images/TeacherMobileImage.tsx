import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export function TeacherMobileImage() {
  return (
    <div style={{ textAlign: "center" }}>
      <StaticImage
        imgStyle={{ width: "100%" }}
        style={{ maxWidth: "600" }}
        src="../../images/teacher.jpg"
        alt="teacher"
      />
    </div>
  )
}
