import React from 'react';
import JSONData from "../../data/clients.json"
import styled from 'styled-components'

const WorkBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 50px;
  @media (max-width: 1500px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 767.98px) {
    grid-template-columns: 100%;
    padding: 40px 20px;
  }
`;
const Article = styled.div`
  margin-bottom: 50px;
  padding: 40px 10px;
  .links {
    display: flex;
    flex-direction: row;
  }
  a {
    font-family: var(--title);
    font-weight: 600;
    text-decoration: none;
  }

`;
const WorkImage = styled.div`
  min-height: 300px;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
  transition: all 0.4s;
  &:hover {
    box-shadow: none;
  }
`;
const HoverArrow = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  background: transparent;
  transition: all 0.4s;
  padding: 0px 20px 40px 0px;
  img {
    max-width: 50px;
    margin-top: 100px;
    background: #fff;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    padding: 10px;
    border-radius: 50px;
    margin: 20px;
  }
  &:hover {
    opacity: 1;
    padding: 0px 20px 0px 0px;
  }
`;
const Title = styled.p`
  font-size: 2rem;
  line-height: 0.9;
  font-weight: 600;
  letter-spacing: 0.8px;
  font-family: var(--title);
  margin-top: 18px;
  margin-bottom: 14px;
`;
const Description = styled.p`
  font-family: var(--body); 
  font-size: 1rem;
  line-height: 1.4;
`;
const LinkZone = styled.div`
  padding: 10px 0px;
  a {
    font-weight: 400;
    background: #9f9f9f;
    color: #ffffff;
    font-size: 0.8rem;
    padding: 4px 8px;
    border-radius: 4px;
    white-space: nowrap;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
  a:first-of-type {
    margin-right: 14px;
  }
`;
const Tags = styled.ul`
  &:before {
    content: 'Tags';
    margin-right: 14px;
    font-family: var(--title);
    font-weight: 600;
    font-size: 0.8rem;
  }
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 12px 0px;

  li {
    font-family: var(--title);
    font-weight: 600;
    font-size: 0.8rem;
    color: #777;
    margin-right: 20px;
    white-space: nowrap;
  }
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export default function RecentWork() {
  return (
    <section style={{ background: '#eaeaea', padding: '80px 80px' }}>

      <h2 style={{ fontFamily: 'var(--title)', marginBottom: '15px' }}>Case Studies</h2>
      <p style={{ fontFamily: 'var(--body) '}}>Read through a few of my Case Studies to see how I approach my projects</p>

      <WorkBlock>

        {JSONData.caseStudies.map((data, index) => {
          return (
            <Article key={index}>
              <WorkImage style={{ 
                          background: 'url(' + data.image + ')',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center center'}}>
                <HoverArrow>
                  <a href={data.link} title="Read more" target="_blank" rel="noreferrer">
                    <img src="/arrow-right-fill.svg" alt="Read more" />
                  </a>
                </HoverArrow>
              </WorkImage>
              <Title>
                <a href={data.link} title="Title">
                  {data.title}
                </a>
              </Title>
              
              <Description>
                {data.description}
              </Description>

              <Tags>
                {data.tags.map((node, index) => {
                  return (
                    <li key={index}>{node}</li>
                  );
                })}
              </Tags>

              <LinkZone>
                <a href={data.link} title="External Link" target="_blank" rel="noreferrer">
                  Read more
                </a>
              </LinkZone>

            </Article>
          );
        })}
      </WorkBlock>
    </section>
  )
}