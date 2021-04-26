import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"

import blogTemplateStyles from "../styles/templates/blog.module.scss"
import bodyStyles from "../styles/body.module.scss"

export default function Blog({ data }) {
  const { html, frontmatter } = data.markdownRemark
  return (
    <Layout title={frontmatter.title}>
      <article className={blogTemplateStyles.blog}>
        {frontmatter.heroImage && (
          <figure className={blogTemplateStyles.blog__hero}>
            <Img
              fluid={frontmatter.heroImage.childImageSharp.fluid}
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
      </article>
    </Layout>
  )
}

export const getPostData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        heroImage {
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
