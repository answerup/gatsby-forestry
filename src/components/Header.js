import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import useHeader from "../static_queries/useHeader"
import headerStyles from "../styles/components/header.module.scss"
import SocialLinks from "./SocialLinks"

export default function Header({ title }) {
  const [showMenu, setShowMenu] = React.useState(false)
  const data = useHeader()
  return (
    <header className={headerStyles.header}>
      <Link to="/" className={headerStyles.logoLink}>
        <Img
          fluid={data.frontmatter.logo.childImageSharp.fluid}
          style={{ position: "absolute" }}
          alt={title}
        />
      </Link>
      <button
        onClick={() => setShowMenu(true)}
        className={headerStyles.openBtn}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>
      <nav
        className={`${headerStyles.header__nav} ${
          showMenu ? "" : headerStyles.hide
        }`}
        role="navigation"
        aria-label="main navigation"
      >
        <div className={headerStyles.closeBtnContainer}>
          <button onClick={() => setShowMenu(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className={headerStyles.menu}>
          <Link to="/" activeClassName={headerStyles.active}>
            Home
          </Link>
          <Link to="/about" activeClassName={headerStyles.active}>
            About
          </Link>
          <Link to="/privacy" activeClassName={headerStyles.active}>
            Privacy
          </Link>
        </div>
        <SocialLinks />
      </nav>
    </header>
  )
}
