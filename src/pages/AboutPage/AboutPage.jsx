import React from "react";
import { Background, AboutCard } from "./AboutPage.styles";
import { Button, Icon, Image, Grid, Divider, Header } from "semantic-ui-react"
import PortalLayout from '../../layouts/PortalLayout';
import imagegirl from '../../images/huiying.JPG';
import { FaGlobeAsia } from 'react-icons/fa';
import { DisqusComments } from '../../components/DiscuqComments/DiscuqComments';

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
                }}><Icon name='linkedin' />My LinkedIn</Button>
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
                <p> Hello 你好, I am Hui Ying 慧颖.</p>
                <p> Welcome to my website! I created this website using React and JavaScript. This app is integrated with Google Firebase database and Cloudinary for storage.</p>
                <p>
                 I'm a software engineer. In my free time, I like to read, run, play sports, watch figure skating videos, listen to music (Chinese orchestra, piano, pop), draw, take photographs and travel!
                </p>
                <p>I really hope you will enjoy browsing my personal website. Feel free to leave a reaction or comment below!</p>
                <p>Have a nice day!</p>
              </Grid.Column>
            </Grid>
            <div style={{ 'padding': "100px" }}>
              <DisqusComments post={{
                "id": "123",
                "title": "About"
              }} url={"https://ooihuiying.github.io/personal_website/#"} />
          </div>
          </AboutCard>
        </Background>
      </div>
    </PortalLayout >
  );
};

export default AboutPage;
