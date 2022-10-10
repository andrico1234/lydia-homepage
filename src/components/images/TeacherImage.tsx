import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export function TeacherImage() {
  return (
    <div style={{ textAlign: "center" }}>
      <StaticImage
        imgStyle={{ width: "100%" }}
        src="../../images/teacher-two.jpg"
        style={{ maxWidth: "420" }}
        alt="teacher"
      />
    </div>
  )
}
