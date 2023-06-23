import React from 'react';
import { Container, Header, Divider, Icon, Segment } from 'semantic-ui-react';

export const Resume = ({ post } = {}) => {


  return (
    <>
    <Divider horizontal>
        <Header as='h2'>
        <Icon name='tag' />
           My History
        </Header>
    </Divider>        
    <Segment color='orange' tertiary>
        <Header>Indeed.com | Software Engineer II (July 2021- Mar 2023)</Header>
        <p>
            <li>Part of the Localisation Tools Team</li>
            <li>Independently implemented a multiple-component solution by enabling in-context translation previews through a Storybook add on, Jenkins, AWS S3, Spring boot Java and React Typescript</li>
            <li>Spearheaded design and implementation of a frontend UI and backend services for internal localisation project managers to edit, search and view history changes of translation strings across Indeed teams projects</li>
            <li>One of the main developer to build an in-house tool, involving micro services and frontend web, to replace Weblate wrapper maintenance costs for enabling outsourcing and syncing back of string translations between product teams codebases and XTM</li>
            <li>Provided technical support and collaborated with engineers in other teams to drive adoption of Localisation Tools team's tools</li>
            <li>Championed good software engineering practices in the team by encouraging the use of Merge Request templates and hosted software engineering design patterns study sessions</li>
            <li>Nurtured junior engineers through mentorship in one-on-one meeting sessions</li>
            <li>Contributed to the organisation by interviewing potential hire engineers/managers and represented Indeed at university recruitment events</li>
        </p>
    </Segment>
    <Segment color='pink' tertiary>
        <Header>Temasek Holdings | Software Engineer Intern (May-July 2020)</Header>
        <p>
            <li>Built API and UI for adding Feedback feature to mobile application for company internal usage with React-Native</li>
            <li>Classified companies into categories using machine learning models like Bert and Sci-learn for investment analysts' usage</li>
        </p>
    </Segment>
    <Segment color='purple' tertiary>
        <Header>IQAir-AirVisual | Software Engineer Intern (June-Dec 2019)</Header>
        <p>
            <li>Used JavaScript to perform Web Scraping on different websites for the collection of air quality data to be displayed on the
mobile AirVisual App</li>
            <li>Developed Kibana Plugin interfaces with React-Redux to help engineers to monitor and track and manage air quality metrics displayed on the app</li>
        </p>
    </Segment>
    <Segment color='blue' tertiary>
        <Header>Coding Lab | Part-time Tutor (Aug 2018-Jan 2019)</Header>
        <p>
            <li>Taught students from ages 7-16 computational thinking, Python language and Scratch programming</li>
            <li>Created Google Apps script to automate sign ups, class allocation and sending of lessons’ email notifications</li>
        </p>
    </Segment>
    <Segment color='green' tertiary>
        <Header>National University of Singapore | Bachelor of Computing in Computer Science (Aug 2017- Mar 2021)</Header>
    </Segment>
    <Segment color='teal' tertiary>
        <Header>Burlinson Dental Surgery | Dental Assistant (Feb-June 2017)</Header>
        <p>
            <li>Assisted dentist in procedures such as scaling and polishing, dental filling and tooth extraction surgeries</li>
            <li>Handled clinic operational duties such as replenishing dental stocks, cleaning clinic and sterilising dental tools</li>
            <li>Performed customer support duties such as patients' appointment booking, payment management and answering enquiries</li>
        </p>
    </Segment>
    <Segment color='brown' tertiary>
        <Header>Banquet Server (Dec 2016-Jan 2017)</Header>
        <p>
            <li>Worked at various hotels for banquet events</li>
            <li>Served diners meals</li>
            <li>Prepared tables and set culinaries</li>
        </p>
    </Segment>
    <Segment color='yellow' tertiary>
        <Header>Victoria Junior College | Singapore Cambridge A' Levels (2015-2016)</Header>
    </Segment>
    <Segment color='violet' tertiary>
        <Header>Nan Chiau High School | Singapore Cambridge O' Levels (2011-2014)</Header>
    </Segment>  
    <Segment color='grey' tertiary>
        <Header>Chong Zheng Primary School | PSLE (2005-2010)</Header>
    </Segment>     
    <Segment color='red' tertiary>
        <Header>I came into this world! (11 Nov 1998)</Header>
    </Segment> 
    </>
  );
};
