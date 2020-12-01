import { Link } from "gatsby"
import React from 'react'
import Logo from './logo'
import './header.css'

import JSONData from "../data/clients.json"
import Hamburger from './hamburger'


export default function Header({ data }) {

    return (

        <header>
          <div className="row">
            <div className="cell left">
              <Logo />
            </div>
            <div className="cell right">
              <div className="main-menu">
                <ul>
                  {JSONData.navigation.map((data, index) => {
                      return <li><a href={data.link} title={data.label}>{data.label}</a></li>
                  })}
                </ul>
              </div>

              <div id="burger-container">
                <Hamburger />
              </div>

              <div id="mobile-menu" class="mobile-menu">
                <Logo />
                <ul>
                  {JSONData.navigation.map((data, index) => {
                      return <li><a href={data.link} title={data.label}>{data.label}</a></li>
                  })}
                </ul>
                <Link to="/resume" className="button">Resume</Link>
              </div>

              <Link to="/resume" className="button resume-desktop">Resume</Link>
            </div>
          </div>
        </header>
      )
}




