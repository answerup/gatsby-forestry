import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import usePosts from "../static_queries/usePosts"
import blogTemplateStyles from "../styles/templates/blog.module.scss"
import bodyStyles from "../styles/body.module.scss"
import Img from "gatsby-image"

export default function Blog({ data }) {
  const { html, frontmatter, fields } = data.markdownRemark
  const allBlogData = usePosts()
  const nextSlug = getNextSlug(fields.slug)

  function getNextSlug(slug) {
    const allSlugs = allBlogData.map(blog => {
      return blog.node.fields.slug
    })
    const nextSlug = allSlugs[allSlugs.indexOf(slug) + 1]
    if (nextSlug !== undefined && nextSlug !== "") {
      return nextSlug
    } else {
      return allSlugs[0]
    }
  }

  return (
    <Layout>
      <article className={blogTemplateStyles.blog}>
        {frontmatter.hero_image && (
          <figure className={blogTemplateStyles.blog__hero}>
            <Img
              fluid={frontmatter.hero_image.childImageSharp.fluid}
              alt={frontmatter.title}
            />
          </figure>
        )}
        <div className={blogTemplateStyles.blog__info}>
          <h1>{frontmatter.title}</h1>
          <h3>{frontmatter.date}</h3>
        </div>
        <div
          className={bodyStyles.body}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className={blogTemplateStyles.blog__footer}>
          <Link title="“Next post”" to={`/${nextSlug}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </article>
    </Layout>
  )
}

export const getPostData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        hero_image {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`
