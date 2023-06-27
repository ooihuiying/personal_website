import styled from 'styled-components';
import skater from '../../images/skater_solo.jpg';

export const style = {
  main: {
    height: '100vh',
    backgroundColor: 'white',
    paddingTop: '200px',
  }
};

export const ExperiencePageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: white;
  background-image: url('${skater}');
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 200px;
  margin-right: 50px;
`;

export const TimelineContainer = styled.div`
  flex: 1;
`;

export const EventDisplayContainer = styled.div`
  flex: 3;
  padding-right: 100px;
`;
