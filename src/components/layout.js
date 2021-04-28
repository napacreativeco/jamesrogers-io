import React, { useEffect } from 'react'
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
const Preloader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fff;
  z-index: 9999;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: var(--title);
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

  useEffect(() => {
    const preLoader = document.querySelector(".preloader");

    setTimeout(() => {
      preLoader.style.display = "none"
    }, 2500);

  });

  return (
    <>
      <Headroom>
       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      </Headroom>

      <Preloader className="preloader">
        <p>Just a sec.</p>
        <img src="/7zxq.gif" alt="Just a sec..." style={{ width: '250px'}} />
      </Preloader>

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
