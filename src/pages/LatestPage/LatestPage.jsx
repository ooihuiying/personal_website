import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid, Divider
} from 'semantic-ui-react';
import { Article } from '../../components/Article/Article';
import PortalLayout from '../../layouts/PortalLayout';
import { Timeline } from '../../components/Timeline/Timeline';
import style, { Container, ButtonWrapper } from './LatestPage.styles';
import { useErrorStatus } from '../../ErrorHandler';
import LoadSpinner from '../../components/LoadSpinner/LoadSpinner';
import { ExploreButton } from '../../components/ExploreButton/ExploreButton';
import FirebaseWrapper from '../../api/connect-firebase';

const LatestPage = ({ location: { pathname } } = {}) => {
  const latestPost = useRef([]);
  const history = useHistory();
  const [active, setActive] = useState();
  const [loading, setLoading] = useState(true);
  const { setErrorStatusCode } = useErrorStatus();

  useEffect(() => {
    async function fetchLatestPosts() {
      try {
        setLoading(true);
        var response = await FirebaseWrapper.ref('TOP10').getAllPosts().then((posts) => {
          if (posts) {
            // contains {title, text, date, topImage}
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
      {!loading && latestPost.current.length > 0 ? (
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
                <Article post={active} displayImage={false} />
                <ButtonWrapper>
                  <ExploreButton handleExploreButtonClick={handleExploreButtonClick} text={"Explore"} pointRight={true} />
                </ButtonWrapper>
              </Grid.Column>
              <Divider hidden />
            </Grid>
          </Container>
        </div>
      )
        : loading ? (
          <LoadSpinner />
        ) : <div>No Posts!</div>}
    </PortalLayout>
  );


};

export default LatestPage;
