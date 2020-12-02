import { Link } from "gatsby"
import React from 'react'
import Logo from './logo'
import './header.css'

import JSONData from "../data/clients.json"
import Hamburger from './hamburger'

import ScrollTo from "react-scroll-into-view";

export default function Header({ data }) {


    function handleClick() {

      var burger = document.getElementById('burger');
      var burgerBox = document.getElementById('burger-container');
      var menu = document.getElementById('mobile-menu');

      burger.classList.remove('is-active');
      menu.classList.remove('show-menu');
      menu.classList.add('hide-menu');
      setTimeout(function() { menu.style.display = "none"; }, 400);
      burgerBox.style.position = "relative";
      

    }

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

              <div id="mobile-menu" className="mobile-menu">
                <Logo />
                <ul>
                  {JSONData.navigation.map((data, index) => {
                      return <li className="mobile-menu-link"><ScrollTo onClick={handleClick} selector={data.link}><p title={data.label}>{data.label}</p></ScrollTo></li>
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




