import * as React from "react"
import { graphql, Link } from "gatsby"
import { PostLayout } from "../components/layouts/PostLayout"

const Post = props => {
  console.log(props)
  const { post } = props.data.allHygraphData

  return (
    <PostLayout title="My Blog Posts">
      
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
        content {
          markdown
        }
      }
    }
  }
`
