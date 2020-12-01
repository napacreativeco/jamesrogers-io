import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import JSONData from "../data/clients.json"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page of "{data.site.siteMetadata.title} "</h1>
    <p>{data.site.siteMetadata.description}</p>
    <Link to="/">Go back to the homepage</Link>

    <ul>
      {JSONData.clients.map((data, index) => {
          return <li>{data.title}</li>
      })}
    </ul>

  </Layout>
)

export default SecondPage
