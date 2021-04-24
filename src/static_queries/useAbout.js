import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {keytype: {eq: "about"}}) {
        html
        frontmatter {
          name
          tagline
          image {
            childImageSharp {
              fluid( maxWidth: 800 ) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return data.markdownRemark
}
