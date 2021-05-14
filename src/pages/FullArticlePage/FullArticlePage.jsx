import React, { useEffect, useState } from 'react';
import PortalLayout from '../../layouts/PortalLayout';
import { Container } from './FullArticlePage.styles';
import { useLocation } from 'react-router-dom'
import { Article } from '../../components/Article/Article';

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
      <Container>
        <Article post={data} displayImage={true} />
      </Container>
    </PortalLayout>
  );
};

export default FullArticlePage;
