import React from "react"
import { Link } from "gatsby"

import SocialLinks from "./SocialLinks"

import footerStyles from "../styles/components/footer.module.scss"

export default function Footer() {
  return (
    <div className={footerStyles.footer}>
      <div className={footerStyles.links}>
        <Link to="/about">About</Link>
        <span />
        <Link to="/privacy">Privacy</Link>
      </div>
      <SocialLinks />
    </div>
  )
}
