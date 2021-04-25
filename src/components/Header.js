import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/components/header.module.scss"

export default function Header({ title }) {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link to="/">
          {title}
        </Link>
      </h1>
      <nav
        className={headerStyles.header__nav}
        role="navigation"
        aria-label="main navigation"
      >
        <div>
          <Link
            to="/about"
            activeClassName={headerStyles.active}
          >
          About
          </Link>
          <Link
            to="/privacy"
            activeClassName={headerStyles.active}
          >
          Privacy
          </Link>
        </div>
      </nav>
    </header>
  )
}