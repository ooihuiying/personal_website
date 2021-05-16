import React from 'react';
import { Card } from 'semantic-ui-react';

export const QuoteCard = ({
  post, color
} = {}) => {
  return (
    <Card raised={true} color={color} >
      <Card.Content>
        <Card.Header>{post.title}</Card.Header>
        <Card.Meta>{post.date}</Card.Meta>
        <Card.Description>
          <div dangerouslySetInnerHTML={{ __html: post.text || "" }}></div>
        </Card.Description>
      </Card.Content>
    </Card>

  );
};
