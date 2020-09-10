import React from "react"
import imgTwoSrc from "../images/experience.jpg"
import { PageLayout } from "../components/layouts/PageLayout"
import { Experience } from "../components/Page/Experience"

const AboutMePage = () => (
  <PageLayout title="Experience" imgSrc={imgTwoSrc}>
    <Experience />
  </PageLayout>
)

export default AboutMePage
