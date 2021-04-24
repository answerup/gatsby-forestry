import React from "react"
import Img from 'gatsby-image'
import Layout from "../components/Layout"
import aboutStyles from "../styles/pages/about.module.scss"
import bodyStyles from "../styles/body.module.scss"
import useAuthorInfo from "../static_queries/useAuthorInfo"

export default function About() {
  const { html, frontmatter } = useAuthorInfo()
  return (
    <Layout page="about">
      <section className={aboutStyles.about}>
        <h1 className={aboutStyles.title}><span>About</span></h1>
        <div className={aboutStyles.info}>
          <div className={aboutStyles.wrapper}>
            <div className={aboutStyles.image}>
              <Img 
                fluid={frontmatter.image.childImageSharp.fluid}
                style={{ position: 'absolute' }}
                alt={frontmatter.name}
              />
            </div>
          </div>
          <h1>{frontmatter.name}</h1>
          <h4>{frontmatter.tagline}</h4>
        </div>
        <div
          className={bodyStyles.body}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>
    </Layout>
  )
}