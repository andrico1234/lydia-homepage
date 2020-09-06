import React from "react"
import SEO from "../components/seo"
import imgTwoSrc from "../images/contemp-two.png"
import { AboutMe } from "../components/AboutMe"
import { PageLayout } from "../components/layouts/PageLayout"

const AboutMePage = () => (
  <PageLayout imgSrc={imgTwoSrc}>
    <SEO title="Experience" />
    <AboutMe />
  </PageLayout>
)

export default AboutMePage
