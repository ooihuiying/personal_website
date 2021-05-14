import React from 'react';
import { Divider, Header } from 'semantic-ui-react';

import { Container, ImageContainer, Background, SimpleContainer } from './Article.styles'

// post: {title, text, date, topImage}
export const Article = ({ post, displayImage } = {}) => {
  if (displayImage) {
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
  } else {
    return (
      <SimpleContainer>
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
      </SimpleContainer>
    );
  }
};
