import React from 'react';
import { Divider, Header } from 'semantic-ui-react';
import bluesea from '../../images/bluesea.jpg';
import { ImageContainer, SimpleContainer } from './Article.styles'

// post: {title, text, date, topImage}
// Accessed from the Latest Page
export const Article = ({ post } = {}) => {
  return (
    <SimpleContainer>
      <Header as='h2'>{post.title || ""}</Header>
      <ImageContainer>
        <img
          src={post.topImage || bluesea}
          alt="Image"
          className="ui centered massive image"
        />
      </ImageContainer>
      <Divider horizontal>{post.date || ""}</Divider>
      <div dangerouslySetInnerHTML={{ __html: post.text || "" }}></div>
    </SimpleContainer>
  );
};
