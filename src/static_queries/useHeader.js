import { graphql, useStaticQuery } from "gatsby"

export default function useHeader() {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { keytype: { eq: "header" } }) {
        frontmatter {
          logo {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          links {
            twitter
            facebook
            instagram
            youtube
            github
          }
        }
      }
    }
  `)
  return data.markdownRemark
}
