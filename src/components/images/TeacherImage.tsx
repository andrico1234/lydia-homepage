import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export function TeacherImage() {
  return (
    <div style={{ textAlign: "center" }}>
      <StaticImage
        imgStyle={{ width: "100%" }}
        src="../../images/teacher.jpg"
        style={{ maxWidth: 600 }}
        alt="teacher"
      />
    </div>
  )
}
