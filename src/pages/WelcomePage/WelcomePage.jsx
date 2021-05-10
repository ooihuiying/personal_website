import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid, Divider
} from 'semantic-ui-react';
import { Article } from '../../components/Article/Article';
import PortalLayout from '../../layouts/PortalLayout';
import { Timeline } from '../../components/Timeline/Timeline';
import style, { Container, ButtonWrapper } from './WelcomePage.styles';
import { useErrorStatus } from '../../ErrorHandler';
import LoadSpinner from '../../components/LoadSpinner/LoadSpinner';
import { ExploreButton } from '../../components/ExploreButton/ExploreButton';
import FirebaseWrapper from '../../api/connect-firebase';

const WelcomePage = ({ location: { pathname } } = {}) => {
  const latestPost = useRef([]);
  const history = useHistory();
  const [active, setActive] = useState();
  const { setErrorStatusCode } = useErrorStatus();

  useEffect(() => {
    async function fetchLatestPosts() {
      try {
        var response = await FirebaseWrapper.ref('cs-posts').getAllPosts().then((posts) => {
          if (posts) {
            // contains {title, text, date, topImage}
            return posts
          }
        });
        latestPost.current = response
        setActive(latestPost.current[0])
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

  const handleExploreButtonClick = async () => {
    const query = {
      title: active.title,
      text: active.text,
      date: active.date,
      topImage: active.topImage,
    };

    history.push({
      pathname: '/full_article',
      state: { post: query }
    });
  };

  return (
    <PortalLayout pathname={pathname}>
      {latestPost.current.length > 0 ? (
        <div style={style.main}>
          <Container>
            <Grid container columns={2}>
              <Grid.Column>
                <Timeline
                  allPosts={latestPost.current}
                  active={active}
                  onClick={handleTimelineChange}
                />
              </Grid.Column>
              <Grid.Column >
                <Article post={active} />
                <ButtonWrapper>
                  <ExploreButton handleExploreButtonClick={handleExploreButtonClick} text={"Explore"} pointRight={true} />
                </ButtonWrapper>
              </Grid.Column>
              <Divider hidden />
            </Grid>
          </Container>
        </div>
      )
        : (
          <LoadSpinner />
        )}
    </PortalLayout>
  );
};

export default WelcomePage;
