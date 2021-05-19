import styled from 'styled-components';
import bluesea from '../../images/bluesea.jpg';

export const Container = styled.div`
  font-size: 20px;
  background-color: rgba(255,255,255,0.5);
  margin-top: 80px;
  text-align: left;
  padding: 80px;
  padding-bottom: 100px;
`

export const ImageContainer = styled.div`
  margin: auto;
  padding: 50px;
`;

export const Background = styled.div`
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
