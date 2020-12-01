import React from "react"
import "../css/style.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from '../components/hero'
import AboutMe from '../components/aboutMe'
import RecentProjects from '../components/recentProject'
import ContactBlock from '../components/contactBlock'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero />

    <AboutMe />

    <RecentProjects/>

    <ContactBlock />

  </Layout>
)

export default IndexPage
