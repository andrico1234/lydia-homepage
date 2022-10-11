exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allHygraphData {
        posts {
          id
          slug
        }
      }
    }
  `)

  data.allHygraphData.posts.forEach(post => {
    const { slug, id } = post
    actions.createPage({
      path: `/blog/${slug}`,
      component: require.resolve(`./src/templates/post.tsx`),
      context: { slug: slug, id: id },
    })
  })
}
