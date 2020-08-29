import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FadeInHeading } from "../components/FadeInHeading"
import { MainPicture } from "../components/MainPicture"
import { Experience } from "../components/Experience"
import { Chevron } from "../components/Chevron"
import { Strapline } from "../components/Strapline"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FadeInHeading />
    <MainPicture />
    <Strapline />
    <Chevron />
    <Experience />
  </Layout>
)

export default IndexPage
