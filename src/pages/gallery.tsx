import React from "react"
import SEO from "../components/seo"
import { AboutMe } from "../components/Page/AboutMe"
import imgThreeSrc from "../images/ballet-three.png"
import { PageLayout } from "../components/layouts/PageLayout"

const AboutMePage = () => (
  <PageLayout title="Gallery" imgSrc={imgThreeSrc}>
    <AboutMe />
  </PageLayout>
)

export default AboutMePage
