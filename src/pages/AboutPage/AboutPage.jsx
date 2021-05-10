import React from 'react';
import { Grid, Button, Icon, GridRow, Image } from 'semantic-ui-react';
import PortalLayout from '../../layouts/PortalLayout';
import { AboutHeader, AboutText, HighlightText } from './AboutPage.styles';
import imagegirl from '../../images/imagegirl.jpg';

const AboutPage = ({ location: { pathname } = {} } = {}) => {
  return (
    <PortalLayout pathname={pathname}>
      <Grid container columns={1}>
        <Grid.Row>
          <Image src={imagegirl} size='medium' circular />
        </Grid.Row>
        <Grid.Row>
          <AboutHeader>
            My name is Hui Ying.
          </AboutHeader>
        </Grid.Row>
        <Grid.Row>
          <AboutText>
            I am currently residing in <HighlightText>Singapore</HighlightText>. I majored in Computer Science at the National University of Singapore and graduated in May 2021. I will be working as a full time software engineer after graduation.
          </AboutText>
        </Grid.Row>
        <Grid.Row>
          <AboutText>
            I don’t have the best language skills, but I do enjoy <HighlightText>reading, writing and documenting</HighlightText> things I have learned. Previously, most of my written works are on my medium account . However, I have decided to transition to using WordPress as I get to have my own domain and can customise how I want to present my articles. I plan to continue my writing journey here and hopefully churn out useful and interesting articles for readers all over the world!
          </AboutText>
        </Grid.Row>
        <Grid.Row>
          <AboutText>
            I have many interests. Both the sciences and arts fascinate me and are an inextricable part of my life. The sciences are what makes things happen. Innovation and technology helps propel the world to the next stage of development. On the other hand, the arts (both humanities and literal art) help make life worth living. We can’t do without beautiful things or understanding of the world. Therefore, I hope to pursue my interests in both areas and be a well-rounded individual.
          </AboutText>
        </Grid.Row>
        <Grid.Row>
          <AboutText>
            Thank you for reading! You can reach me at my email <HighlightText>huiyingooi1@gmail.com</HighlightText>
          </AboutText>
        </Grid.Row>
        <GridRow>
          <Button color='linkedin' onClick={(e) => {
            e.preventDefault();
            window.location.href = 'https://www.linkedin.com/in/hui-ying-ooi';
          }}><Icon name='linkedin' />Connect on Linkedin</Button>
        </GridRow>
      </Grid>
    </PortalLayout>
  );
};

export default AboutPage;
