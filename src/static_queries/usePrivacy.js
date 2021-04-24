import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: {keytype: {eq: "privacy"}}) {
        html
      }
    }
  `)
  return data.markdownRemark
}
