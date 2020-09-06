import React from "react"
import { PageLayout } from "../components/layouts/PageLayout"
import { AboutMe } from "../components/Page/AboutMe"
import imgSrc from "../images/lydia.png"

const AboutPage = () => (
  <PageLayout title="About" imgSrc={imgSrc}>
    <AboutMe />
  </PageLayout>
)

export default AboutPage
