import React from "react"
import { PageLayout } from "../components/layouts/PageLayout"
import SEO from "../components/seo"
import { AboutMe } from "../components/AboutMe"
import imgSrc from "../images/lydia.png"

const AboutPage = () => (
  <PageLayout imgSrc={imgSrc}>
    <SEO title="About" />
    <AboutMe />
  </PageLayout>
)

export default AboutPage
