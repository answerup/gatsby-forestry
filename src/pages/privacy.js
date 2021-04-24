import React from "react"
import Layout from "../components/Layout"
import aboutStyles from "../styles/pages/about.module.scss"
import bodyStyles from "../styles/body.module.scss"
import usePrivacy from "../static_queries/usePrivacy"

export default function About() {
  const { html } = usePrivacy()
  return (
    <Layout page="about">
      <section className={aboutStyles.about}>
        <h1 className={aboutStyles.title}><span>Privacy</span></h1>
        <div
          className={bodyStyles.body}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>
    </Layout>
  )
}
