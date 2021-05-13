import React, { useState } from "react";
import { Background, AboutHeader, AboutText, AboutCard } from "./AboutPage.styles";
import { Container, Segment, Button, Icon } from "semantic-ui-react"
import PortalLayout from '../../layouts/PortalLayout';
import ReactCardFlip from 'react-card-flip';

const AboutPage = ({ location: { pathname } = {} } = {}) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!isFlipped)
  }

  return (
    <PortalLayout pathname={pathname}>
      <div class="image">
        <Background>
          <AboutCard>
            <div class="content">
              <br />
              <h1>Hello, 你好!</h1>
              <br />
              <p> Welcome to my blog! </p>
              <p>My name is Hui Ying. I'm a Software engineer, earnest reader and writer with an overactive imagination.</p>
              <p> I don’t have the best language skills, but I do enjoy reading, writing and documenting things I have learned.
              Most of my written works here will also be on my medium account: @liverungrow. I plan to post my articles
              here and hopefully churn out useful and interesting articles for readers all over the world! I have many interests. </p>
              <p>Both the sciences and arts fascinate me and are an inextricable part of my life.
              The sciences are what makes things happen. Innovation and technology helps propel the world to the next stage of development.
              On the other hand, the arts (both humanities and literal art) help make life worth living. We can’t do without beautiful things
              or understanding of the world. </p>
              <p> Therefore, I hope to pursue my interests in both areas and be a well-rounded individual.</p>
            </div>
            <br />
            <br />
          </AboutCard>
          <Button color='linkedin' onClick={(e) => {
            e.preventDefault();
            window.location.href = 'https://www.linkedin.com/in/hui-ying-ooi';
          }}><Icon name='linkedin' />Connect on Linkedin</Button>
        </Background>
      </div>
    </PortalLayout >
  );
};

export default AboutPage;
