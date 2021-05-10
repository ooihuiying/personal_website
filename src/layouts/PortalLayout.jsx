import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { FaHome } from 'react-icons/fa';

import { PortalLayoutStyled, NavTitle, NavItem } from './PortalLayout.styles';

const PortalLayout = ({ children, pathname }) => {
  return (
    <PortalLayoutStyled>
      <div className="layout--main">
        <div className="layout--navbar">
          <div className="navbar--title">
            <NavTitle putColour>Hui Ying</NavTitle>
          </div>
          <div className="navbar--item">
            <NavItem selected={pathname === '/'} to="/">
              <FaHome />
            </NavItem>
            <NavItem selected={pathname === '/about'} to="/about">
              About Me
            </NavItem>
            <NavItem selected={pathname === '/tech-world'} to="/tech-world">
              Tech World
            </NavItem>
            <NavItem selected={pathname === '/book-reviews'} to="/book-reviews">
              Book Reviews
            </NavItem>
            <NavItem selected={pathname === '/chinese-culture'} to="/chinese-culture">
              Chinese Culture
            </NavItem>
            <NavItem selected={pathname === '/globe_trotting'} to="/globe_trotting">
              Globe Trotting
            </NavItem>
            <NavItem selected={pathname === '/quotes'} to="/quotes">
              Quotes
            </NavItem>
            <NavItem selected={pathname === '/reflections'} to="/reflections">
              Reflections
            </NavItem>
          </div>
        </div>
        <div className="layout--children">{children}</div>
      </div>
    </PortalLayoutStyled>
  );
};
export default PortalLayout;
