import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { AboutMeHeading } from "../components/AboutMeHeading"
import { AboutMePicture } from "../components/AboutMePicture"
import { AboutMe } from "../components/AboutMe"

const AboutMePage = () => (
  <Layout>
    <SEO title="Experience" />
    <AboutMeHeading />
    <AboutMePicture />
    <AboutMe />
  </Layout>
)

export default AboutMePage
