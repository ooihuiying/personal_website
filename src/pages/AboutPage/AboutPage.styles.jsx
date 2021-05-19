import autumn from '../../images/autumn.jpg';
import styled from "styled-components";
import theme from '../../config/theme';

export const Background = styled.div`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  background-image: url('${autumn}');;
  background-size: cover;
  background-attachment:fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  align-items: center;
`

export const AboutCard = styled.div`
  background-color: rgba(255,255,255,0.5);
  font-size: 20px;
  width: calc(100% - 200px);
  margin: 100px;
  color: ${theme.colours.black};
  text-align: left;
  padding: 80px;
  min-width: 750px;
`