import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'


const HeroStyles = styled.section`
  width: 100%;
  position: relative;
  padding: 120px 100px 120px 100px;
  @media only screen and (max-width: 768px ) {
    padding: 60px 0px;
  }
  .row {
    display: flex;
    flex-direction: column;
  }
  p {
    margin: 60px 0px 60px 0px;
    font-size: 1.2rem;
    max-width: 500px;
  }
  a.button {
    padding: 0px;
    border-top: 0px;
    border-right: 0px;
    border-bottom: 2px solid var(--main-accent);
    border-top: 0px;
    text-decoration: none;
    transition: all 0.3s;
  }
  a.button:hover {
    background: transparent;
    letter-spacing: 0.5px;
  }
`;

const HeroHeadline = styled.h1`
  font-size: 5rem;
  font-family: var(--title);
  span {
    color: var(--main-accent);
  }
  @media only screen and (max-width: 768px ) {
    font-size: 2rem;
  }
`;
const HeroDescription = styled.p`
  font-family: var(--body);
`;

const ContactLink = styled.span`
  font-family: var(--title);
  font-weight: 600;
  font-size: 1.2rem;
  text-decoration: none;
`;


export default function Hero() {

  return (
    <HeroStyles>
      <div className="hero" id="intro">
        <div className="row">
          <HeroHeadline>
            Web Development<span>.</span><br />
            Graphic Design<span>.</span><br />
            Branding<span>.</span>
          </HeroHeadline>

          <HeroDescription>
            I'm a front end developer based in Napa, California focused on creating exceptional websites and products for companies and friends alike.
          </HeroDescription>

          <Link to="#contact">
            <ContactLink>Contact me</ContactLink>
          </Link>

        </div>
      </div>
    </HeroStyles>
  )
}
