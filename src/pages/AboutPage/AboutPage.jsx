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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <AboutCard>
            <div class="content">
              <br />
              <h1>About Me</h1>
              <br />
              <p> Hello, I am Hui Ying. I'm a Software engineer, earnest reader and writer with an overactive imagination. I am an avid runner and I enjoy
              being in nature!
              </p>
              <p>I have recently graduated from the National University of Singapore with a degree in Computer Science.</p>
              <p> I don’t have the best language skills, but I do enjoy reading, writing and documenting things I have learned.
              The intention of this website is to serve as a repository of articles which i hope to write in the areas of topics that
              i am interested in. Prior to creating this website, most of my written works were published on my medium account: @liverungrow. I
              will continue to update both platforms so that it is easily accessible. </p>
              <p>I really hope you will enjoy my articles, have a nice day!</p>
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
