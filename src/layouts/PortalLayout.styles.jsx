import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../config/theme';

export const PortalLayoutStyled = styled('div')`
  height: 100%;
  width: 100%;

  .layout--main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .layout--navbar {
      padding-top: 50px;
      padding-bottom: 50px;
      padding-right: 50px;
      padding-left: 50px;
      width: 100%;
      height: 10%;
      align-items: center;
      position: fixed;
      z-index: 9999;
      background-color: ${theme.colours.white};
      display: flex;
      justify-content: space-between;

      .navbar--item {
        display: inline-flex;
        justify-content: space-between;
      }

      .navbar--title {
        display: inline-flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        height: 30px;
      }
    }

    .layout--children {
      flex: 1 1 auto;
      margin-top: 150px;
      background-color: ${theme.colours.white};
      text-align: center;
    }
  }
`;

export const NavItem = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colours.maroon};
  text-decoration: ${({ selected }) => (selected ? 'underline' : 'none')};
  padding: 0px 0px 0px 40px;

  :hover {
    color: ${theme.colours.maroon};
    opacity: 0.8;
  }
`;

export const NavTitle = styled(Link)`
  font-size: 40px;
  font-weight: bold;
  color: ${theme.colours.maroon};
`;
