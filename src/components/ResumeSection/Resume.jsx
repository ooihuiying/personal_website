import React, {useState} from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

export const Resume = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    function handleClick (e, titleProps){
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index
    
        setActiveIndex(newIndex);
    }

  return (
    <>
    <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <Icon name='dropdown' />
          July 2021-Mar 2023: Software Engineer II at Indeed.com 
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
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
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={handleClick}
        >
          <Icon name='dropdown' />
          May 2020-July 2020: Software Engineer Intern at Temasek Holdings
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
            <p>
                <li>Built API and UI for adding Feedback feature to mobile application for company internal usage with React-Native</li>
                <li>Classified companies into categories using machine learning models like Bert and Sci-learn for investment analysts' usage</li>
            </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={handleClick}
        >
          <Icon name='dropdown' />
          June 2019-Dec 2019:  Software Engineer Intern at IQAir-AirVisual
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
        <p>
            <li>Used JavaScript to perform Web Scraping on different websites for the collection of air quality data to be displayed on the
mobile AirVisual App</li>
            <li>Developed Kibana Plugin interfaces with React-Redux to help engineers to monitor and track and manage air quality metrics displayed on the app</li>
        </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={handleClick}
        >
          <Icon name='dropdown' />
          Aug 2018-Jan 2019: Part-time Tutor at Coding Lab
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
        <p>
            <li>Taught students from ages 7-16 computational thinking, Python language and Scratch programming</li>
            <li>Created Google Apps script to automate sign ups, class allocation and sending of lessons’ email notifications</li>
        </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={handleClick}
        >
          <Icon name='dropdown' />
          Aug 2017-Mar 2021: Student at National University of Singapore
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
        <p>
            <li>Graduated with a Bachelor of Computing in Computer Science degree</li>
            <li>Participated in 6-month long NUS Overseas College Program in Beijing where I exchanged at Peking University and interned at AirVisual</li>
        </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 5}
          index={5}
          onClick={handleClick}
        >
          <Icon name='dropdown' />
          Feb 2017-June 2017: Dental Assistant at Burlinson Dental Surgery 
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
        <p>
            <li>Assisted dentist in procedures such as scaling and polishing, dental filling and tooth extraction surgeries</li>
            <li>Handled clinic operational duties such as replenishing dental stocks, cleaning clinic and sterilising dental tools</li>
            <li>Performed customer support duties such as patients' appointment booking, payment management and answering enquiries</li>
        </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 6}
          index={6}
          onClick={handleClick}
        >
          <Icon name='dropdown' />
          Dec 2016-Jan 2017: Banquet Server 
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 6}>
        <p>
            <li>Worked at various hotels in Singapore for banquet events</li>
            <li>Served diners meals and attended to their requests during banquet</li>
            <li>Arranged tables and prepared culinaries</li>
        </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 7}
          index={7}
          onClick={handleClick}
        >
          <Icon name='dropdown' />
          2015-2016: Student at Victoria Junior College
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 7}>
        <p>
            <li>Studied Science Stream and graduated with the Singapore Cambridge A' Levels certificate</li>
            <li>Studied H2 Physics, Chemistry, Mathematics, Economics and H1 General Paper. (H2 being of higher difficulty)</li>
            <li>Member of Art club and Writers' circle</li>
        </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 8}
          index={8}
          onClick={handleClick}
        >
          <Icon name='dropdown' />
          2011-2014: Student at Nan Chiau High School
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 8}>
        <p>
            <li>Graduated with the Singapore Cambridge O' Levels certificate</li>
            <li>Studied Advanced Mathematics, Mathematics, Physics, Chemistry, Pure Geography, Combined Humanities (Social Studies and History), Higher Chinese (more advanced version of Chinese language), English</li>
            <li>Represented school for Basketball tournaments. My team achieved 2nd place in North zone and 8th place overall in the C' division of the 2012 Singapore Basketball Nationals</li>
            <li>Awarded the Bicultural (English and Mandarin) scholarship given to 12 students of my cohort by the Singapore Hokkien Huay Kuan association. With this scholarship, I participated in 2-week long student exchange trips to Suzhou Foreign Language School (Shanghai and Suzhou, 2012) and Sacred Heart Girls High school (Taiwan, 2013)</li>
            <li>Top student in cohort for combined humanities subject (Social studies and History)</li>
            <li>Selected as 1 out of 4 students to represent school in NUS Geography Challenge and obtained individual Silver medal</li>
        </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 9}
          index={9}
          onClick={handleClick}
        >
          <Icon name='dropdown' />
          2005-2010: Student at Chong Zheng Primary School 
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 9}>
        <p>
            <li>Graduated with a PSLE certificate</li>
            <li>Studied Mathematics, Science, English and Chinese</li>
            <li>Represented school for Netball tournaments</li>
        </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 10}
          index={10}
          onClick={handleClick}
        >
          <Icon name='dropdown' />
          11 Nov 1998
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 10}>
        <p>
            <li>I came into this world!</li>
        </p>
        </Accordion.Content>
      </Accordion>     
    </>
  );
};
