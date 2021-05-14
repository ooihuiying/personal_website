import theme from '../../config/theme';
import styled from 'styled-components';

export const SegmentStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.7)'
};

export const ClickMore = styled.span`

  background-color: ${theme.colours.white};

  :hover {
    background-color: ${theme.colours.maroon};
    cursor: pointer;
  }
`;