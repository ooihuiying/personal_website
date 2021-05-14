import theme from '../../config/theme';
import styled from 'styled-components';

const style = {
  filterbarStyle: {
    marginBottom: '20px'
  },

  detailCardBorderStyle: {
    borderColor: theme.colours.maroon
  },

  paginationStyle: {
    marginTop: '20px'
  },

  text: {
    textAlign: 'center'
  },

  image: {
    paddingLeft: '100px',
    paddingRight: '100px',
    paddingBottom: '50px',
  },
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
  width: calc(100% - 200px);
  margin: 100px;
  text-align: left;
  padding: 80px;
`

export const ButtonWrapper = styled.div`
  text-align: end;
`;

export default style;
