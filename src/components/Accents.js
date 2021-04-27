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
          <li key="0"><img src={GitHub} alt="GitHub" /></li>
          <li key="2"><img src={LinkedIn} alt="LinkedIn" /></li>
        </ul>
      </BottomLine>

      <BottomLine className="bottom-line right">
        <p>hello@napacreativeco.com</p>
      </BottomLine>
    </div>
  );
}