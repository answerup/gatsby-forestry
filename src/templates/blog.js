import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import useBlogData from '../static_queries/useBlogData'
import blogTemplateStyles from "../styles/templates/blog.module.scss"
import bodyStyles from "../styles/body.module.scss"
import Img from 'gatsby-image'
import About from "../components/About"

export default function Blog(props) {
  const data = props.data.markdownRemark
  const allBlogData = useBlogData()
  const nextSlug = getNextSlug(data.fields.slug)

  function getNextSlug(slug) {
    const allSlugs = allBlogData.map(blog => {
      return blog.node.fields.slug
    })
    const nextSlug = allSlugs[allSlugs.indexOf(slug) + 1]
    if(nextSlug !== undefined && nextSlug !== '') {
      return nextSlug
    } else {
      return allSlugs[0]
    }
  }

  return (
    <Layout>
      <article className={blogTemplateStyles.blog}>
        <figure className={blogTemplateStyles.blog__hero}>
          <Img
            fluid={data.frontmatter.hero_image.childImageSharp.fluid}
            alt={data.frontmatter.title}
          />
        </figure>
        <div className={blogTemplateStyles.blog__info}>
          <h1>{data.frontmatter.title}</h1>
          <h3>{data.frontmatter.date}</h3>
        </div>
        <div
          className={bodyStyles.body}
          dangerouslySetInnerHTML={{ __html: data.html }}
        />
        <div className={blogTemplateStyles.blog__footer}>
          <Link to={`/blog/${nextSlug}`} className={blogTemplateStyles.footer__next}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </article>
      <About />
    </Layout>
  )
}

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
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
