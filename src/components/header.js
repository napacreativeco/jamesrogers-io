import { Link, useStaticQuery, graphql } from "gatsby"
import React from 'react'

import JSONData from "../data/clients.json"
import Hamburger from './hamburger'


export default function Header({ data }) {

    const query = useStaticQuery(graphql`
      query TitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }`
    )
    return (

        <header>
          <div className="row">
            <div className="cell left">
              <Link to="/" className="logo">{query.site.siteMetadata.title}</Link>
            </div>
            <div className="cell right">
              <div className="main-menu">
                <ul>
                  {JSONData.navigation.map((data, index) => {
                      return <li><a href={data.link} title={data.label}>{data.label}</a></li>
                  })}
                </ul>
              </div>

              <div class="mobile-menu">
              <h2 className="title">{query.site.siteMetadata.title}</h2>
                <ul>
                  {JSONData.navigation.map((data, index) => {
                      return <li><a href={data.link} title={data.label}>{data.label}</a></li>
                  })}
                </ul>
                <Link to="/resume" className="button">Resume</Link>
              </div>

              <Link to="/resume" className="button">Resume</Link>
            </div>
          </div>
        </header>
      )
}




