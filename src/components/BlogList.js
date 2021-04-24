import React from "react"
import { Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"
import blogListStyles from "../styles/components/bloglist.module.scss"
import Img from 'gatsby-image'

export default function BlogList() {
  const blogData = useBlogData()
  return (
    <section>
      <ul className={blogListStyles.list}>
        {blogData
          .filter(blog => blog.node.frontmatter.title !== "")
          .map(blog => {
            return (
              <li key={blog.node.fields.slug}>
                <Link to={`/blog/${blog.node.fields.slug}`} key={blog.node.id}>
                  <div className={blogListStyles.list__hero}>
                    <div className={blogListStyles.list__wrapper}>
                    <Img 
                      fluid={
                        blog.node.frontmatter.hero_image.childImageSharp.fluid
                      }
                      style={{ position: 'absolute' }}
                      alt={blog.node.frontmatter.title}
                    />
                    </div>
                  </div>
                  <div className={blogListStyles.list__info}>
                    <h2>{blog.node.frontmatter.title}</h2>
                    <h3>{blog.node.frontmatter.date}</h3>
                    <p>{blog.node.excerpt}</p>
                  </div>
                </Link>
              </li>
            )
          })}
      </ul>
    </section>
  )
}

