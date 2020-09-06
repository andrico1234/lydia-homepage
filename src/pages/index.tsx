import React from "react"
import SEO from "../components/seo"
import { FadeInHeading } from "../components/FadeInHeading"
import { Hero } from "../components/Home/Hero"
import { Chevron } from "../components/Chevron"
import { ExperienceTwo } from "../components/ExperienceTwo"
import { HomeLayout } from "../components/layouts/HomeLayout"
import { UpcomingProject } from "../components/UpcomingProject"

const IndexPage = () => (
  <HomeLayout>
    <FadeInHeading />
    <Hero />
    {/* <Strapline /> */}
    <Chevron />
    <ExperienceTwo />
    {/* <Experience /> */}
    {/* link to instagram, get in touch */}
  </HomeLayout>
)

export default IndexPage
