import React, { useState, useEffect, useRef } from 'react';
import {
  Grid
} from 'semantic-ui-react';
import { Article } from '../../components/Article/Article';
import PortalLayout from '../../layouts/PortalLayout';
import { Timeline } from '../../components/Timeline/Timeline';
import style from './LatestPage.styles';
import { useErrorStatus } from '../../ErrorHandler';
import { NoPostHeader } from '../../components/NoPostHeader/NoPostHeader';
import LoadSpinner from '../../components/LoadSpinner/LoadSpinner';
import FirebaseWrapper from '../../api/connect-firebase';

const LatestPage = ({ pathname }) => {

  const latestPost = useRef([]);
  const [active, setActive] = useState();
  const [loading, setLoading] = useState(true);
  const { setErrorStatusCode } = useErrorStatus();

  useEffect(() => {
    async function fetchLatestPosts() {
      try {
        setLoading(true);
        var response = await FirebaseWrapper.ref(pathname).getAllPosts().then((posts) => {
          if (posts) {
            // contains {title, text, date, topImage (optional), tag, id}
            return posts
          }
        });
        latestPost.current = response
        setActive(latestPost.current[0])
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
      {!loading && latestPost.current.length > 0 ? (
        <div style={style.main}>
          <Grid>
            <Grid.Column width={4}>
              <Timeline
                allPosts={latestPost.current}
                active={active}
                onClick={handleTimelineChange}
              />
            </Grid.Column>
            <Grid.Column width={11}>
              <Article post={active} />
            </Grid.Column>
          </Grid>
        </div>
      )
        : loading ? (
          <LoadSpinner />
        ) : <NoPostHeader />}
    </PortalLayout>
  );
};

export default LatestPage;
