import { graphql, useStaticQuery } from "gatsby"

export default function usePosts() {
  const data = useStaticQuery(graphql`
    query getBlogData {
      allMarkdownRemark(
        filter: { frontmatter: { keytype: { eq: null } } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "MMMM Do, YYYY")
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return data.allMarkdownRemark.edges
}
