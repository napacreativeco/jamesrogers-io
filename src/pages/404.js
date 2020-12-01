import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
      <div><h1>404: Not Found</h1></div>
      <div><p>You just hit a route that doesn&#39;t exist... the sadness.</p></div>
    </div>
  </Layout>
)

export default NotFoundPage
