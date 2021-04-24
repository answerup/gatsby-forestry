import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import indexStyles from "../styles/pages/index.module.scss"

export default function IndexPage() {
  return (
    <Layout page="home">
      <h1 className={indexStyles.title}>Latest blog</h1>
      <BlogList />
    </Layout>
  )
}