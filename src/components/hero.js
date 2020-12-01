import React from "react"
import { Link } from 'gatsby'


export default function Hero() {

  return (
    <div className="hero" id="home">
      <div className="row">

              <h1>Web Developer<span>.</span><br />
              Graphic Designer<span>.</span><br />
              Branding<span>.</span></h1>

              <p>I'm a front end developer based in Napa, CA focused on creating exceptional websites and products for companies and friends alike. </p>

              <div>
                <Link to="/contact" className="button">Contact me</Link>
              </div>
      </div>
    </div>
  )
}
