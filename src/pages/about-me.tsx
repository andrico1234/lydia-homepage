import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { AboutMeHeading } from "../components/AboutMeHeading"
import { AboutMePicture } from "../components/AboutMePicture"
import { AboutMeSplitText } from "../components/AboutMeSplitText"
import { AboutMe } from "../components/AboutMe"

const AboutMePage = () => (
  <Layout>
    <SEO title="About me" />
    <AboutMeHeading />
    <AboutMePicture />
    <AboutMeSplitText />
    <AboutMe />
  </Layout>
)

export default AboutMePage
