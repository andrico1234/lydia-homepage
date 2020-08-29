import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <header style={{ textAlign: "center", padding: "48px 0 24px" }}>
      <h1>There's nothing here to see</h1>
    </header>
    <p>
      But since you'd to know a little more about me, I'll give you a sneak peak
      into what I'm probably dancing to{" "}
      <a
        style={{ color: "#090c08" }}
        href="https://www.youtube.com/watch?v=aXgSHL7efKg"
      >
        right now
      </a>
      .
    </p>
    <p>
      Or you can head back to my{" "}
      <Link to="/" style={{ color: "#090c08" }}>
        {" "}
        home page{" "}
      </Link>
    </p>
  </Layout>
)

export default NotFoundPage
