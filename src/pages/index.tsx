import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FadeInHeading } from "../components/FadeInHeading"
import { SplitText } from "../components/SplitText"
import { MainPicture } from "../components/MainPicture"
import { Experience } from "../components/Experience"
import { Chevron } from "../components/Chevron"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FadeInHeading />
    <MainPicture />
    <SplitText />
    <Chevron />
    <Experience />
  </Layout>
)

export default IndexPage
