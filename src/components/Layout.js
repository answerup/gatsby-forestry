import React from "react"
import Helmet from "react-helmet"

import Header from "./Header"
import Footer from "./Footer"
import useSiteMetadata from "../static_queries/useSiteMetadata"

import layoutStyles from "../styles/components/layout.module.scss"

export default function Layout({
  title: pageTitle,
  description: pageDescription,
  children,
}) {
  const { title, description } = useSiteMetadata()
  return (
    <section className={layoutStyles.layout}>
      <Helmet>
        <html lang="en" />
        <title>
          {pageTitle ? `${pageTitle} | ` : ""}
          {title}
        </title>
        <meta name="description" content={pageDescription && description} />
      </Helmet>
      <Header title={title} />
      <div className={layoutStyles.content}>{children}</div>
      <Footer />
    </section>
  )
}
