import React, { useState } from 'react'
import styled from 'styled-components'

import JSONData from '../../data/clients.json'

import ScrollTo from 'react-scroll-into-view'

const HeaderStyles = styled.header`
  width: 100%;
  padding: 0;
  .main-menu ul {
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    flex-wrap: nowrap;
    list-style: none;
    margin: 0;
  }
  .hamburger,
  .mobile-menu {
    display: none;
  }
  @media only screen and (max-width: 768px ) {
    .hamburger,
    .mobile-menu {
      display: block;
    }
  }
`;
const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 10px;
  width: 100%;
`;
const NavLinks = styled.li`
  margin-right: 20px;
  margin-bottom: 0;
  font-family: var(--title);
  a {
    text-decoration: none;›
    font-weight: 500;
  }
`;
const MobileMenu = styled.div`

`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: var(--title);
  font-weight: 600;
  padding-left: 20px;
  width: 50%;
  svg {
    margin-right: 12px;
    max-width: 20px;
  }
`;



export default function Header({ data }) {

  // Simple working Toggle
  const [menuState, openMenuState] = useState('none');
  const [menuStyleClass, changeMenuStyleClass] = useState('closed');
  const [menuName, changeMenuName] = useState('menu');

  const toggle = () => {
    openMenuState(!menuState);

    if(menuState === 'flex') {
      openMenuState('none');
      changeMenuName('menu');
      changeMenuStyleClass('closed');
    } else {
      openMenuState('flex');
      changeMenuName('close');
      changeMenuStyleClass('opened');
    }

  }

  return (

    <HeaderStyles>
      <HeaderRow>

        <LogoContainer>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
          hello@napacreativeco.com
        </LogoContainer> 

        <nav className="main-menu">
          <ul>
            {JSONData.navigation.map((data, index) => {
              return (
                <NavLinks key={data.label}>
                  <a href={data.link} title={data.label}>{data.label}</a>
                </NavLinks>
              )
            })}
          </ul>
        </nav>

        <button className="hamburger" onClick={toggle} style={{ zIndex: '99', position: 'absolute' }}>
          {menuName}
        </button>

      </HeaderRow>

      {/* Mobile Menu */}
      <MobileMenu className={menuStyleClass} style={{ display: menuState }}>

        <p>Logo</p>

        <ul>
          {JSONData.navigation.map((data, index) => {
            return (
              <li className="mobile-menu-link" key={data.label}>
                <ScrollTo selector={data.link}>
                  <p title={data.label}>{data.label}</p>
                </ScrollTo>
              </li>
            );
          })}
        </ul>

      </MobileMenu>
      {/* END: mobile */}

    </HeaderStyles>
  )
}




