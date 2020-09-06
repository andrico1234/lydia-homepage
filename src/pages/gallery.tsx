import React from "react"
import SEO from "../components/seo"
import { AboutMe } from "../components/AboutMe"
import imgThreeSrc from "../images/ballet-three.png"
import { PageLayout } from "../components/layouts/PageLayout"

const AboutMePage = () => (
  <PageLayout imgSrc={imgThreeSrc}>
    <SEO title="Experience" />
    <AboutMe />
  </PageLayout>
)

export default AboutMePage
