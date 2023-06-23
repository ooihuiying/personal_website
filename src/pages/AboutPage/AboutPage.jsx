import React from "react";
import { Background, AboutCard } from "./AboutPage.styles";
import { Button, Icon, Image, Grid, Divider, Header } from "semantic-ui-react"
import PortalLayout from '../../layouts/PortalLayout';
import imagegirl from '../../images/huiying.JPG';
import { FaGlobeAsia } from 'react-icons/fa';
import {Resume} from '../../components/ResumeSection/Resume';

const AboutPage = () => {

  return (
    <PortalLayout>
      <div className="image">
        <Background>
          <br />
          <br />
          <AboutCard>
            <Grid >
              <Grid.Column width={4}>
                <Image src={imagegirl} size='small'/>
                <h2><FaGlobeAsia color="maroon" />{" Singapore"}</h2>
                <Button color='linkedin' onClick={(e) => {
                  e.preventDefault();
                  window.location.href = 'https://www.linkedin.com/in/hui-ying-ooi';
                }}><Icon name='linkedin' />My Linkedin</Button>
                <br></br>
                <br></br>
                <Button color='red' onClick={(e) => {
                  e.preventDefault();
                  window.location.href = 'https://drive.google.com/file/d/1oT0asRybl7qmKRakRGC3-EbN5kUnhLjA/view?usp=sharing';
                }}><Icon name='book' />Resume Pdf</Button>
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
                  window.location.href = 'https://liverungrow11.wordpress.com/';
                }}><Icon name='wordpress' />Running Blog</Button>
              </Grid.Column>
              <Grid.Column width={12}>
                <h1>About Me</h1>
                <br />
                <p> Hello 你好, I am Hui Ying.</p>
                <p> Welcome to my website! I created this website using React and JavaScript. This app is integrated with Google Firebase database.</p>
                <p>
                The intention of this website is to serve as a repository of articles, which i hope to write, in the areas of topics that
                i am interested in. 
                While I don’t have the best language skills, I do enjoy reading, writing and documenting things I have learned.
                </p>
                <p>I really hope you will enjoy reading my articles in this website.</p>
                <p>Have a nice day!</p>
              </Grid.Column>
            </Grid>
            <br></br>
            <br></br>
            <Resume/>
          </AboutCard>
        </Background>
      </div>
    </PortalLayout >
  );
};

export default AboutPage;
