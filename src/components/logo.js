import { Link, useStaticQuery, graphql } from "gatsby"
import React from 'react'


export default function Logo({ data }) {

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
            
              <Link to="/" className="logo">{query.site.siteMetadata.title}</Link>
        
      )
}




