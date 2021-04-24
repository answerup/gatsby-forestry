import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'
import useAbout from "../static_queries/useAbout"
import aboutStyles from "../styles/components/about.module.scss"

export default function BlogList() {
  const { frontmatter } = useAbout()
  return (
    <Link title={`“${frontmatter.name}”`} to="/about" className={aboutStyles.about}>
      <div className={aboutStyles.image}>
        <Img 
          fluid={frontmatter.image.childImageSharp.fluid}
          style={{ position: 'absolute' }}
          alt={frontmatter.name}
        />
      </div>
      <div className={aboutStyles.info}>
        <h2>{frontmatter.name}</h2>
        <h3>{frontmatter.tagline}</h3>
      </div>
    </Link>
  )
}
