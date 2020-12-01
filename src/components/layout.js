/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import Headroom from 'react-headroom'

import GitHub from '../images/github.svg'
import CodePen from '../images/codepen.svg'
import LinkedIn from '../images/linkedin.svg'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Headroom>
       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      </Headroom>

      <div id="page" className="page">
      
        <main>
          {children}
        </main>

        <div className="bottom-line left">
          <ul>
            <li><img src={GitHub} alt="GitHub" /></li>
            <li><img src={CodePen} alt="Codepen" /></li>
            <li><img src={LinkedIn} alt="LinkedIn" /></li>
          </ul>
        </div>

        <div className="bottom-line right">
         <p>hello@napacreativeco.com</p>
        </div>

      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
