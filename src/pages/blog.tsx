import * as React from "react"
import { graphql, Link } from "gatsby"
import imgFourSrc from "../images/blog.jpg"

import Seo from "../components/seo"
import { PageLayout } from "../components/layouts/PageLayout"

const BlogPage = props => {
  const { posts } = props.data.allHygraphData
  return (
    <PageLayout imgSrc={imgFourSrc} title="My Blog Posts">
      <div>
        {posts.map(post => {
          return (
            <div>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </div>
          )
        })}
      </div>
    </PageLayout>
  )
}

export const query = graphql`
  {
    allHygraphData {
      posts {
        title
        slug
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage
