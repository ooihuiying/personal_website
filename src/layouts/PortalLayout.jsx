import React from 'react';

import { PortalLayoutStyled, NavTitle, NavItem } from './PortalLayout.styles';

const PortalLayout = ({ children }) => {
  return (
    <PortalLayoutStyled>
      <div className="layout--main">
        <div className="layout--navbar">
          <div className="navbar--title" >
            <NavTitle to="/">Hui Ying</NavTitle>
          </div>
          <div className="navbar--item">
            <NavItem to="/experience">
              My Experience
           </NavItem>
            <NavItem to="/tech-world">
              Tech World
             </NavItem>
            <NavItem to="/book-reviews">
              Book Reviews
             </NavItem>
            {/* <NavItem to="/chinese-culture">
              Chinese Culture
             </NavItem> */} 
            {/* <NavItem to="/globe_trotting">
              Globe Trotting
            </NavItem> */}
            <NavItem to="/quotes">
              Quotes
             </NavItem>
            {/* <NavItem to="/reflections">
              Reflections
             </NavItem> */}
          </div>
        </div>
      </div>
      {children}
    </PortalLayoutStyled>

  );
};
export default PortalLayout;