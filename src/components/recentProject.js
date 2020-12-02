import React from 'react'
import BigArrow from '../images/fat-arrow-right.svg'
import GitHub from '../images/github-blk.svg'
import JSONData from "../data/clients.json"



export default function RecentProjects() {

  return (
    <div className="recent-projects" id="projects">
      <div className="row" style={{ marginBottom: '100px' }}>
      <h2 className="title">Recent Projects</h2>
      </div>
      <div className="row">
        {JSONData.projects.map((data, index) => {
          return (
            <div className="cell" style={{overflow: 'hidden'}}>

              <div className="main-image" style={{ background: 'url(' + data.image + ')', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
              </div>

              <div className="info" style={{ padding: '20px' }}>
                <a href={data.link} title={data.title} style={{ textDecoration: 'none' }}>
                  <h3 >{data.title}</h3>
                </a>

                <ul>{data.tags.map((node) => {
                  return <li>{node}</li>
                })}</ul>

                <p> {data.description} </p>
              </div>

              <div className="button">
                <a href={data.link} title="External Link">
                  <img src={BigArrow} alt={data.title} />
                </a>
                <a href={data.gitHub} title="GitHub" >
                  <img src={GitHub} alt="GitHub" />
                </a>
              </div>

            </div>
          )
        })}
      </div> 
    </div>
  )
}
