import React from "react"
import { FadeInHeading } from "../components/FadeInHeading"
import { Hero } from "../components/Home/Hero"
import { Chevron } from "../components/Chevron"
import { Experience } from "../components/Experience"
import { HomeLayout } from "../components/layouts/HomeLayout"
import { Testimonials } from "../components/Testimonials"

const IndexPage = () => (
  <HomeLayout>
    <FadeInHeading />
    <Hero />
    <Chevron
      style={{
        textAlign: "center",
        margin: "40px 16px",
      }}
    />
    <Experience />
    <Testimonials />
  </HomeLayout>
)

export default IndexPage
