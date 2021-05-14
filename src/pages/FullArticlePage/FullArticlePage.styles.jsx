import styled from 'styled-components';
import bluesea from '../../images/bluesea.jpg';

export const Container = styled.div`
  background-color: rgba(255,255,255,0.5);
  font-size: 20px;
  font-family: cursive;
  width: calc(100% - 200px);
  margin: 100px;
  text-align: left;
  padding: 80px;
`

export const ImageContainer = styled.div`
  display: block;
  margin: auto;
`;


export const Background = styled.div`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  background-image: url('${bluesea}');;
  background-size: cover;
  background-attachment:fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  align-items: center;
`
