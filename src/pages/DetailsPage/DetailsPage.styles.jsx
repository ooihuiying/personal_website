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

export const ButtonWrapper = styled.div`
  text-align: end;
`;

export default style;
