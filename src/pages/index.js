import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import indexStyles from "../styles/pages/index.module.scss"

export default function IndexPage() {
  return (
    <Layout>
      <h1 className={indexStyles.title}>
        <span>Latest blog</span>
      </h1>
      <BlogList />
    </Layout>
  )
}
