import theme from '../../config/theme';
import styled from 'styled-components';

export const SegmentStyle = {
  borderColor: theme.colours.maroon
};

export const ClickMore = styled.span`

  background-color: ${theme.colours.white};

  :hover {
    background-color: ${theme.colours.maroon};
    cursor: pointer;
  }
`;