import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../config/theme';

export const PortalLayoutStyled = styled('div')`
  display: flex;
  height: 100%;
  width: 100%;

  .layout--main {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;

    .layout--navbar {
      padding-top: 50px;
      padding-bottom: 50px;
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 10%;
      align-items: center;
      position: fixed;
      z-index: 9999;
      background-color: ${theme.colours.white};

      .navbar--item {
        display: inline-flex;
        justify-content: space-between;
        //edit here to adjust the nav-item
        @media only screen and (max-width: ${theme.breakpoint.widescreen}) {
          padding-left: 700px;
        }
        @media only screen and (max-width: ${theme.breakpoint.desktop}) {
          padding-left: 450px;
        }
        @media only screen and (max-width: ${theme.breakpoint.tablet}) {
          padding-left: 350x;
        }
        @media only screen and (max-width: ${theme.breakpoint.mobile}) {
          padding-left: 10px;
        }
      }

      .navbar--title {
        display: inline-flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        height: 30px;
        padding-left: 80px;
      }
    }

    .layout--children {
      flex: 1 1 auto;
      margin-top: 150px;
      background-color: ${theme.colours.white};
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

export const NavTitle = styled.h1`
  font-size: 40px;
  color: ${({ putColour } = {}) =>
    putColour ? theme.colours.maroon : theme.colours.black};
`;
