import React from 'react';
import { Divider, Header } from 'semantic-ui-react';
import bluesea from '../../images/bluesea.jpg';
import ReactHtmlParser from 'react-html-parser';
import { ImageContainer, SimpleContainer } from './Article.styles'

// post: {title, text, date, topImage, tag}
// Accessed from the Latest Page
export const Article = ({ post } = {}) => {
  return (
    <SimpleContainer>
      <Header as='h2'>{post.title || ""}</Header>
      <a className="ui red tag label">{post.tag}</a>
      <br />
      <br />
      <ImageContainer>
        <img
          src={post.topImage || bluesea}
          alt="Image"
          className="ui centered massive image"
        />
      </ImageContainer>
      <Divider horizontal>{post.date || ""}</Divider>
      <div>{ReactHtmlParser(post.text || "")}</div>
    </SimpleContainer>
  );
};
