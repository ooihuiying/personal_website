import styled from 'styled-components';

const style = {
  text: {
    textAlign: 'center',
  }
};

export const Header = styled.h1`
  text-align: center;
  background-color: rgba(255,255,255,0.5);
`
export const Background = styled.div`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  background-image: ${(props) => 'url(' + props.image + ')'};
  background-size: cover;
  background-attachment:fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  align-items: center;
`

export const PostsCard = styled.div`
  margin: 100px;
  text-align: left;
  padding: 80px;
  margin-right: auto;
  margin-left: auto;
 }
`

export const ButtonWrapper = styled.div`
  text-align: end;
`;

export default style;
