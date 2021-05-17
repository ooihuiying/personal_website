import React from 'react';
import { Card } from 'semantic-ui-react';
import ReactHtmlParser from 'react-html-parser';

export const QuoteCard = ({
  post, color
} = {}) => {
  return (
    <Card raised={true} color={color} >
      <Card.Content>
        <Card.Header>{post.title}</Card.Header>
        <Card.Meta>{post.date}</Card.Meta>
        <Card.Description>
          <div>{ReactHtmlParser(post.text || "")}</div>
        </Card.Description>
      </Card.Content>
    </Card>

  );
};
