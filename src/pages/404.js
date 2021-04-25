import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import notFoundStyles from "../styles/pages/404.module.scss"

export default function NotFound() {
  return (
    <Layout>
      <div className={notFoundStyles.notFound__container}>
        <h1>404 | Not found</h1>
        <Link title="“Back to home”" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </Link>
      </div>
    </Layout>
  )
}
