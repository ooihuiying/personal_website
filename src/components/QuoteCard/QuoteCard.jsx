import React from 'react';
import { Placeholder, Card } from 'semantic-ui-react';

export const QuoteCard = ({
  post, color
} = {}) => {
  return (post ? (
    <Card raised={true} color={color} >
      <Card.Content>
        <Card.Header>{post.title}</Card.Header>
        <Card.Meta>{post.date}</Card.Meta>
        <Card.Description>
          <div dangerouslySetInnerHTML={{ __html: post.text || "" }}></div>
        </Card.Description>
      </Card.Content>
    </Card>

  ) : (
      <Card raised={true} color={color} >
        <Card.Content>
          <Placeholder>
            <Placeholder.Line length="full" />
            <Placeholder.Line length="very long" />
            <Placeholder.Line length="long" />
            <Placeholder.Line length="medium" />
          </Placeholder>
        </Card.Content>
      </Card>
    ));
};
