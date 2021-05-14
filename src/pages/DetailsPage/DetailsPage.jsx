import React from 'react';
import { Grid } from 'semantic-ui-react';
import PortalLayout from '../../layouts/PortalLayout';
import { DetailCard } from '../../components/DetailCard/DetailCard';
import style, { ButtonWrapper, Background, PostsCard, Header } from './DetailsPage.styles';
import { ExploreButton } from '../../components/ExploreButton/ExploreButton';

const DetailsPage = ({ pathname, data, handleNextButtonClick, handlePrevButtonClick, loading, image, title }) => {
  return (
    <PortalLayout pathname={pathname}>
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
                          <DetailCard />
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
                          <DetailCard title={result.title} text={result.text} date={result.date} topImage={result.topImage} />
                        ))}
                      </Grid.Column>
                    </Grid>
                  </div>
                </div>
              ) : (
                <h1 style={style.text}>{"No Post Yet!"}</h1>
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
