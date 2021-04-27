import React from "react"
import "../css/style.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from '../components/Hero/Hero'
import AboutMe from '../components/About/About'
import Portfolio from '../components/Portfolio/Portfolio'
import RecentWork from '../components/Work/Work'
import ContactBlock from '../components/Contact/Contact'



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero />

    <Portfolio />

    <RecentWork />

    <AboutMe />

    <ContactBlock />

  </Layout>
)

export default IndexPage
