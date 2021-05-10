import React, { useState } from 'react';
import { FaAngleDoubleUp, FaAngleDoubleDown } from 'react-icons/fa';
import {
  TimelineWrapper,
  TimelineVerticalLine,
  TimelineDot,
  TimelineText,
  ArrowUp, ArrowDown
} from './Timeline.styles';
import theme from '../../config/theme';

// allPosts: {title, text, date, topImage}
export const Timeline = ({ allPosts, active, onClick } = {}) => {
  // Note that we will not display all latest posts at once.
  // At any point, there will only be 5 items showing in the timeline
  // Start and End are the Indexes of the latest posts that we will show
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);

  const displayPosts = allPosts.slice(start, end);

  return (
    <div>
      {start > 0
        ? (
          <ArrowUp onClick={() => {
            setStart(start - 1);
            setEnd(end - 1);
          }}
          >
            <FaAngleDoubleUp color={theme.colours.maroon} size={30} />
          </ArrowUp>
        )
        : ''}
      <TimelineVerticalLine>
        {displayPosts.map((item) => (
          <TimelineWrapper key={item.title} onClick={() => onClick(item)}>
            <TimelineDot
              onClick={() => onClick(item)}
              id={item}
              active={active && active.title === item.title}
            >
              <TimelineText>{item.date}</TimelineText>
            </TimelineDot>
          </TimelineWrapper>
        ))}
      </TimelineVerticalLine>
      {end < allPosts.length
        ? (
          <ArrowDown onClick={() => {
            setStart(start + 1);
            setEnd(end + 1);
          }}
          >
            <FaAngleDoubleDown color={theme.colours.maroon} size={30} />
          </ArrowDown>
        )
        : ''}
    </div>
  );
};
