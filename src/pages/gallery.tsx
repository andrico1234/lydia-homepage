import React from "react"
import { AboutMe } from "../components/Page/AboutMe"
import imgThreeSrc from "../images/lydia-three.png"
import { PageLayout } from "../components/layouts/PageLayout"

const AboutMePage = () => (
  <PageLayout title="Gallery" imgSrc={imgThreeSrc}>
    <AboutMe />
  </PageLayout>
)

export default AboutMePage
