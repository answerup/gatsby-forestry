import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import notFoundStyles from '../styles/pages/404.module.scss'

export default function NotFound() {
    return (
        <Layout page="404">
            <div className={notFoundStyles.notFound__container}>
                <h1>404 | Not found</h1>
                <Link to="/">
                    <h3>Sorry, couldn't find that page.</h3>
                </Link>
            </div>
        </Layout>
    )
}