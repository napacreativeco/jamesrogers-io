/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './Header/Header.js'
import Accents from './Accents'
import styled from 'styled-components'
import Headroom from 'react-headroom'


const MainContent = styled.div`
  @media (min-width: 2000px) {
    max-width: 1800px;
    margin: 0px auto 0px auto;
  }
`;
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

      
      <MainContent>
        {children}
      </MainContent>

        <Accents />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
