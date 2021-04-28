import React from 'react'
import GitHub from '../images/github.svg'
import LinkedIn from '../images/linkedin.svg'
import styled from 'styled-components'

const BottomLine = styled.div`
  font-family: var(--title);
`;

export default function Accents() {
  return (
    <div>
      <BottomLine className="bottom-line left">
        <ul>
          <li key="0">
            <a href="https://github.com/napacreativeco" title="GitHub" target="_blank" rel="noreferrer">
              <img src={GitHub} alt="GitHub" />
            </a>
          </li>
          <li key="2">
            <a href="https://www.linkedin.com/in/jamesadamrogers/" title="LinkedIn" rel="noreferrer">
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </BottomLine>

      <BottomLine className="bottom-line right">
        <p>hello@napacreativeco.com</p>
      </BottomLine>
    </div>
  );
}