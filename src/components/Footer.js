import { Link } from "gatsby"
import React from "react"
import footerStyles from "../styles/components/footer.module.scss"
import SocialLinks from "./SocialLinks"

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
