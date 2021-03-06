import React from "react";
import { Background, AboutCard } from "./AboutPage.styles";
import { Button, Icon, Image, Grid } from "semantic-ui-react"
import PortalLayout from '../../layouts/PortalLayout';
import imagegirl from '../../images/cheongsam.jpg';
import { FaGlobeAsia } from 'react-icons/fa';
const AboutPage = () => {

  return (
    <PortalLayout>
      <div className="image">
        <Background>
          <br />
          <br />
          <AboutCard>
            <Grid >
              <Grid.Column width={3}>
                <Image src={imagegirl} size='small' circular />
                <h2><FaGlobeAsia color="maroon" />{" Singapore"}</h2>
                <Button color='linkedin' onClick={(e) => {
                  e.preventDefault();
                  window.location.href = 'https://www.linkedin.com/in/hui-ying-ooi';
                }}><Icon name='linkedin' />My Linkedin</Button>
                <br></br>
                <br></br>
                <Button color='black' onClick={(e) => {
                  e.preventDefault();
                  window.location.href = 'https://github.com/ooihuiying';
                }}><Icon name='github' />My GitHub</Button>
                <br></br>
                <br></br>
                <Button color='purple' onClick={(e) => {
                  e.preventDefault();
                  window.location.href = 'https://medium.com/@liverungrow';
                }}><Icon name='medium' />My Medium</Button>
              </Grid.Column>
              <Grid.Column width={12}>
                <h1>About Me</h1>
                <br />
                <p> Hello 你好, I am Hui Ying. I'm a software engineer, earnest reader and writer with an overactive imagination. I am also an avid runner and I enjoy
                  being in nature! </p>
                <p>I have recently graduated from the National University of Singapore with a degree in Computer Science.</p>
                <p>While I don’t have the best language skills, I do enjoy reading, writing and documenting things I have learned.
                The intention of this website is to serve as a repository of articles, which i hope to write, in the areas of topics that
                i am interested in. </p>
                <p>I really hope you will enjoy reading my articles in this website.</p>
                <p>Have a nice day!</p>
              </Grid.Column>
            </Grid>
          </AboutCard>
        </Background>
      </div>
    </PortalLayout >
  );
};

export default AboutPage;
