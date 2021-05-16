import { Grid } from 'semantic-ui-react';
import PortalLayout from '../../layouts/PortalLayout';
import { DetailCard } from '../../components/DetailCard/DetailCard';
import { EmptyDetailCard } from '../../components/EmptyDetailCard/EmptyDetailCard';
import { NoPostHeader } from '../../components/NoPostHeader/NoPostHeader';
import style, { ButtonWrapper, Background, PostsCard, Header } from './DetailsPage.styles';
import { ExploreButton } from '../../components/ExploreButton/ExploreButton';
import React, { useEffect, useState } from 'react';

const DetailsPage = ({ pathname, image, title, db }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchPosts() {
    setLoading(true)
    var response = await db.get10Posts().then((posts) => {
      if (posts) {
        // contains {title, text, date, topImage (optional), tag, id}
        return posts
      }
    });

    if (response.length > 0) {
      setData(response)
    } else {
      setData([])
    }

    setLoading(false)
  }

  async function fetchNextPosts() {
    setLoading(true)
    var response = await db.getNext10Posts().then((posts) => {
      if (posts) {
        // contains {title, text, date, topImage (optional), tag, id}
        return posts
      }
    });
    if (response.length > 0) {
      setData(response)
    }
    setLoading(false)
  }

  async function fetchPrevPosts() {
    setLoading(true)
    var response = await db.getPrev10Posts().then((posts) => {
      if (posts) {
        // contains {title, text, date, topImage (optional), tag, id}
        return posts
      }
    });
    if (response.length > 0) {
      setData(response)
    }
    setLoading(false)
  }

  const handlePrevButtonClick = async () => {
    fetchPrevPosts();
  }
  const handleNextButtonClick = async () => {
    fetchNextPosts();
  };

  useEffect(() => {
    // Trigger fetchPosts if the title changes
    fetchPosts();
  }, [title]);

  return (
    <PortalLayout>
      <div className="image">
        <Background image={image}>
          <br />
          <br />
          <PostsCard>
            <div>
              <Header>{title}</Header>
              {loading ? (
                <div>
                  <div className="row">
                    <Grid centered stackable columns={1}>
                      <Grid.Column width={10}>
                        {[...Array(10)].map(() => (
                          <EmptyDetailCard />
                        ))}
                      </Grid.Column>
                    </Grid>
                  </div>
                </div>
              ) : !loading && data.length > 0 ? (
                <div>
                  <div className="row">
                    <Grid centered stackable columns={1}>
                      <Grid.Column>
                        {data.map((result) => (
                          <DetailCard result={result} pathname={pathname} />
                        ))}
                      </Grid.Column>
                    </Grid>
                  </div>
                </div>
              ) : (
                <NoPostHeader style={style.text} />
              )}
              {data.length > 0 ? (
                <Grid centered stackable columns={2}>
                  <Grid.Row >
                    <ButtonWrapper>
                      <ExploreButton handleExploreButtonClick={handlePrevButtonClick} text={""} pointRight={false} />
                    </ButtonWrapper>
                    <ButtonWrapper>
                      <ExploreButton handleExploreButtonClick={handleNextButtonClick} text={""} pointRight={true} />
                    </ButtonWrapper>
                  </Grid.Row>
                </Grid>
              ) : (<div />)}
            </div>
          </PostsCard>
        </Background>
      </div>
    </PortalLayout >
  );
};

export default DetailsPage;
