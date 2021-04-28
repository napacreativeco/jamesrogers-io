import React from 'react'
import CircleSelfie from '../../images/circle-selfie.png'

import styled from 'styled-components'

const AboutUs = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 100px 0px;
`;
const AboutImage = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 80%;
    max-width: 300px;
    height: auto;
  }
  @media only screen and (max-width: 768px ) {
    img {
      width: 120px;
      height: 120px;
    }
  }
`;
const Headline = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-family: var(--title);
`;
const AMDescription = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px 20%;
  text-align: center;
  font-size: 1rem;
  font-family: var(--body);
  font-weight: 300;
  span {
    padding: 5px 0px;
    border: 0;
  }
  @media only screen and (max-width: 768px) {
    padding: 20px 5%;
  }
`;
const Technologies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin-top: 40px;
`;
const TechItem = styled.li`
  font-family: var(--title);
  font-size: 0.9rem;
  background: #eaeaea;
  margin: 10px;
  padding: 10px 20px;
  border-radius: 25px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;



export default function AboutMe() {
  return (
    <AboutUs id="about">

      <AboutImage>
        <img src={CircleSelfie} alt="James Rogers" />
      </AboutImage>

      <Headline>
        <h1>About Me</h1>
      </Headline>

      <AMDescription>
        <p>My name is <strong>James Adam Rogers</strong>. I’m a graphic designer and web developer living in Napa. In the daytime, I work on websites and packaging for my company <a href="https://www.napacreativeco.com" title="Napa Creative Co.">Napa Creative Co</a>. At night, I work on personal projects and produce music.
        <span />
        My recent projects have included these technologies:</p>

        <Technologies>
          <TechItem>HTML5</TechItem>
          <TechItem>CSS3</TechItem>
          <TechItem>SCSS</TechItem>
          <TechItem>CSS Next</TechItem>
          <TechItem>React</TechItem>
          <TechItem>Next.JS</TechItem>
          <TechItem>Vanilla JavaScript</TechItem>
          <TechItem>jQuery</TechItem>
          <TechItem>PHP</TechItem>
          <TechItem>Wordpress</TechItem>
          <TechItem>Illustrator</TechItem>
          <TechItem>Photoshop</TechItem>
          <TechItem>AfterEffects</TechItem>
          <TechItem>InDesign</TechItem> 
        </Technologies> 

      </AMDescription>

    </AboutUs>
  )
}