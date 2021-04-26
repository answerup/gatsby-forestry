import React from "react"
import { Link } from "gatsby"

import usePosts from "../static_queries/usePosts"

import blogListStyles from "../styles/components/bloglist.module.scss"

export default function BlogList() {
  const blogData = usePosts()
  return (
    <section>
      {blogData.length ? (
        <div className={blogListStyles.wrapper}>
          <ul className={blogListStyles.list}>
            {blogData.map(blog => (
              <li key={blog.node.id}>
                <h2>
                  <Link to={`/${blog.node.fields.slug}`}>
                    {blog.node.frontmatter.title}
                  </Link>
                </h2>
                <h3>{blog.node.frontmatter.date}</h3>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={blogListStyles.noPost}>
          <h3>[No post]</h3>
        </div>
      )}
    </section>
  )
}
