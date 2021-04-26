import React from "react"

import Layout from "../components/Layout"
import usePrivacy from "../static_queries/usePrivacy"

import aboutStyles from "../styles/pages/about.module.scss"
import bodyStyles from "../styles/body.module.scss"

export default function Privacy() {
  const { html } = usePrivacy()
  return (
    <Layout>
      <section className={aboutStyles.about}>
        <h1 className={aboutStyles.title}>
          <span>Privacy</span>
        </h1>
        <div
          className={bodyStyles.body}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>
    </Layout>
  )
}
