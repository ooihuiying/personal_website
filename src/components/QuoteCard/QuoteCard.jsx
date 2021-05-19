import React from 'react';
import { Card } from 'semantic-ui-react';
import ReactHtmlParser from 'react-html-parser';

export const QuoteCard = ({ post } = {}) => {

  function getColor() {
    return "hsla(" + ~~(360 * Math.random()) + "," +
      "70%," +
      "80%,1)"
  }

  return (
    <Card raised={true} style={{ 'background-color': getColor() }} >
      <Card.Content>
        <Card.Header>{ReactHtmlParser(post.title)}</Card.Header>
        <Card.Meta>{post.date}</Card.Meta>
        <Card.Description>
          <div>{ReactHtmlParser(post.text || "")}</div>
        </Card.Description>
      </Card.Content>
    </Card>

  );
};
