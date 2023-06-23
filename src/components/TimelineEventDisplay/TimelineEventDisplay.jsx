import React from 'react';
import {SimpleContainer} from './TimelineEventDisplay.styles';

export const TimelineEventDisplay = ({ active } = {}) => {
  return (
    <SimpleContainer>
    <h1>{active.title}</h1>
    <h3>{active.date}</h3>
    {active.data.map((entry) => {
        return <li>{entry}</li>
    })}
    </SimpleContainer>
  );
};
