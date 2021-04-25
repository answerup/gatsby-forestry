import React from "react"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import aboutStyles from "../styles/pages/about.module.scss"
import bodyStyles from "../styles/body.module.scss"
import useAbout from "../static_queries/useAbout"

export default function About() {
  const { html, frontmatter } = useAbout()
  console.log(frontmatter)
  return (
    <Layout>
      <section className={aboutStyles.about}>
        <h1 className={aboutStyles.title}>
          <span>About</span>
        </h1>
        <div className={aboutStyles.info}>
          {frontmatter.image && (
            <div className={aboutStyles.wrapper}>
              <div className={aboutStyles.image}>
                <Img
                  fluid={frontmatter.image.childImageSharp.fluid}
                  style={{ position: "absolute" }}
                  alt={frontmatter.name}
                />
              </div>
            </div>
          )}
          <h1>{frontmatter.name}</h1>
          <h3>{frontmatter.tagline}</h3>
        </div>
        <div
          className={bodyStyles.body}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>
    </Layout>
  )
}
