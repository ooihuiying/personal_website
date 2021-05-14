import React, { useEffect, useState } from 'react';
import PortalLayout from '../../layouts/PortalLayout';
import { Container, Background, ImageContainer } from './FullArticlePage.styles';
import { useLocation } from 'react-router-dom'
import { Divider } from 'semantic-ui-react';

const FullArticlePage = () => {
  const location = useLocation();
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchPost() {
      const data = location.state.post; // User's query passed in here
      setData(data);
    }
    fetchPost();
  }, []);

  return (
    <PortalLayout pathname={"/full_article"}>
      <Background >
        <Container>
          <h1 as='h2'>{data.title || ""}</h1>
          {data.topImage ? (
            <ImageContainer>
              <img
                src={data.topImage}
                alt="Image"
                className="ui centered massive image"
              />
            </ImageContainer>
          ) : (<div></div>)}
          <Divider horizontal>{data.date || ""}</Divider>
          <div dangerouslySetInnerHTML={{ __html: data.text || "" }}></div>
        </Container>
      </Background>
    </PortalLayout >
  );
};

export default FullArticlePage;
