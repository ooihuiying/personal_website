import React from 'react';
import {
  Header, Divider
} from 'semantic-ui-react';

import { Container, ImageContainer } from './Article.styles'

// post: {title, text, date, topImage}
export const Article = ({ post } = {}) => {
  return (
    <Container>
      <Header as='h2'>{post.title || ""}</Header>
      { post.topImage ? (
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
  );
};
