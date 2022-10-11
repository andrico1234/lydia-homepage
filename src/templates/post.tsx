import * as React from "react"
import { graphql, Link } from "gatsby"
import { PostLayout } from "../components/layouts/PostLayout"
import ReactMarkdown from "react-markdown"

const Post = props => {
  const { post } = props.data.allHygraphData

  return (
    <PostLayout title="My Blog Posts">
      <header
        style={{
          textAlign: "center",
          padding: "48px 0 24px",
          height: "160px",
        }}
      >
        <Link
          to="/"
          style={{
            position: "relative",
            textDecoration: "none",
            color: "#090c08",
          }}
        >
          <h1>Lydia MacKenzie</h1>
        </Link>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "lighter",
            margin: 0,
            width: "100%",
            textAlign: "center",
          }}
        >
          {post.title}
        </h2>
      </header>
      <p>Date written: {post.date}</p>
      <ReactMarkdown>{post.content.markdown}</ReactMarkdown>
    </PostLayout>
  )
}

export default Post

export const query = graphql`
  query ($id: ID) {
    allHygraphData {
      post(where: { id: $id }) {
        id
        title
        slug
        date
        content {
          markdown
        }
      }
    }
  }
`
