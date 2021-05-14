import React from 'react';
import { Divider } from 'semantic-ui-react';

import { Container, ImageContainer, Background } from './Article.styles'

// post: {title, text, date, topImage}
export const Article = ({ post } = {}) => {
  return (
    <Background >
      <Container>
        <h1 as='h2'>{post.title || ""}</h1>
        {post.topImage ? (
          <ImageContainer>
            <img
              src={post.topImage}
              alt="Image"
              className="ui centered massive image"
            />
          </ImageContainer>
        ) : (<div></div>)}
        <Divider horizontal>{post.date || ""}</Divider>
        <div dangerouslySetInnerHTML={{ __html: post.text || "" }}></div>
      </Container>
    </Background>
  );
};
