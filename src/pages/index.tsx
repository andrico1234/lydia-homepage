import React from "react"
import { FadeInHeading } from "../components/FadeInHeading"
import { Hero } from "../components/Home/Hero"
import { Chevron } from "../components/Chevron"
import { Experience } from "../components/Experience"
import { HomeLayout } from "../components/layouts/HomeLayout"

const IndexPage = () => (
  <HomeLayout>
    <FadeInHeading />
    <Hero />
    <Chevron />
    <Experience />
  </HomeLayout>
)

export default IndexPage
