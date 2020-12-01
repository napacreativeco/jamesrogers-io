import React from 'react'
import { Link } from 'gatsby'
import Selfie from '../images/selfie.jpg'

export default function AboutMe() {
  return (
    <div className="about">
      <div className="row" style={{ marginBottom: '100px' }}>
        <h2 className="title">About Me</h2>
      </div>
      <div className="row">
        <div className="cell left">
          
          <p>My name is <strong>James Adam Rogers</strong>. I’m a graphic designer and web developer living in Napa. In the daytime, I work on websites and packaging for my company <Link to="https://www.napacreativeco.com">Napa Creative Co</Link>. At night, I work on personal projects and produce music.</p>
          
          <p>My recent projects have included these technologies:</p>

          <table>
            <tr>
              <td><p>HTML5</p></td>
              <td><p>CSS3 / SCSS</p></td>
              <td><p>JS / jQuery</p></td>
            </tr>
            <tr>
              <td><p>React</p></td>
              <td><p>PHP / Wordpress</p></td> 
              <td><p>Illustrator / Photoshop</p></td> 
            </tr>  
          </table>       

        </div>
        <div className="cell right">
          <div className="wrapper">
            <img src={Selfie} alt="James Rogers" />
          </div>
        </div>
      </div> 
    </div>
  )
}