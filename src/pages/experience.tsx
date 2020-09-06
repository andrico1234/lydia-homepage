import React from "react"
import SEO from "../components/seo"
import imgTwoSrc from "../images/contemp-two.png"
import { AboutMe } from "../components/Page/AboutMe"
import { PageLayout } from "../components/layouts/PageLayout"

const AboutMePage = () => (
  <PageLayout title="Experience" imgSrc={imgTwoSrc}>
    <AboutMe />
  </PageLayout>
)

export default AboutMePage
