import React, { useState, useEffect } from 'react';
import PortalLayout from '../../layouts/PortalLayout';
import { Timeline } from '../../components/Timeline/Timeline';
import {ExperiencePageContainer, TimelineContainer, EventDisplayContainer, style} from './ExperiencePage.styles';
import { useErrorStatus } from '../../ErrorHandler';
import { NoPostHeader } from '../../components/NoPostHeader/NoPostHeader';
import LoadSpinner from '../../components/LoadSpinner/LoadSpinner';
import experienceJson from '../../config/experience.json'
import { TimelineEventDisplay } from '../../components/TimelineEventDisplay/TimelineEventDisplay';

const ExperiencePage = () => {

  const [allEvents, setAllEvents] = useState([]); 
  const [active, setActive] = useState();
  const [loading, setLoading] = useState(true);
  const { setErrorStatusCode } = useErrorStatus();

  useEffect(() => {
    async function fetchLatestPosts() {
      try {
        setLoading(true);
        setAllEvents(experienceJson.experiences);
        setActive(experienceJson.experiences[0])
        setLoading(false)
      } catch (e) {
        // Show error message
        setErrorStatusCode(400);
      }
    }
    fetchLatestPosts();
  }, [setErrorStatusCode]);

  const handleTimelineChange = (activeItem) => {
    setActive(activeItem);
  };

  return (
    <PortalLayout>
      {!loading && allEvents.length > 0 ? (
        <ExperiencePageContainer style={style.main}>
          <TimelineContainer>
            <Timeline
              allPosts={allEvents}
              active={active}
              onClick={handleTimelineChange}
            />
          </TimelineContainer>
          <EventDisplayContainer>
            <TimelineEventDisplay active={active} />
          </EventDisplayContainer>
        </ExperiencePageContainer>
      ) : loading ? (
        <LoadSpinner />
      ) : (
        <NoPostHeader />
      )}
    </PortalLayout>
  );
};

export default ExperiencePage;
