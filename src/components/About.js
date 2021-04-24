import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'
import useAuthorInfo from "../static_queries/useAuthorInfo"
import aboutStyles from "../styles/components/about.module.scss"

export default function BlogList() {
  const { frontmatter } = useAuthorInfo()
  return (
    <Link to="/about" className={aboutStyles.about}>
      <div className={aboutStyles.image}>
        <Img 
          fluid={frontmatter.image.childImageSharp.fluid}
          style={{ position: 'absolute' }}
          alt={frontmatter.name}
        />
      </div>
      <div className={aboutStyles.info}>
        <h2>{frontmatter.name}</h2>
        <h4>{frontmatter.tagline}</h4>
      </div>
    </Link>
  )
}
