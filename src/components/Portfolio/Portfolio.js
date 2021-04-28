import React from 'react'
import styled from 'styled-components'
import JSONData from "../../data/clients.json"

const PortfolioSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 767.98px) {
    grid-template-columns: 1fr;
  }
`;
const PortfolioOverlay = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0;
  background: rgba(0,0,0,0.8);
  color: #eaeaea;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-family: var(--body);
  padding: 40px 20px;
  h3 {
    margin: 0px 0px 10px 0px;
  }
  transition: all 0.4s;
`;
const PortfolioItem = styled.article`
  height: 300px;
  width: 100%;
  position: relative;
  &:hover ${PortfolioOverlay} {
    opacity: 1;
  }
`;

export default function Portfolio() {
  return (
    <PortfolioSection>
      {JSONData.gallery.map((work, index) => {
        return (
          <PortfolioItem
            style={{ 
              background: 'url(' + work.image + ')',
              backgroundSize: 'cover',
              backgroundPosition: 'center center'
            }}
            key={index}>
            <PortfolioOverlay >
              <h3>{work.title}</h3>
              <p>{work.description}</p>
            </PortfolioOverlay>

          </PortfolioItem>
        )
      })}
    </PortfolioSection>
  )
}