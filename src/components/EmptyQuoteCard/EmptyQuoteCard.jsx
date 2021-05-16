import React from 'react';
import { Placeholder, Card } from 'semantic-ui-react';

export const EmptyQuoteCard = () => {
  return (
    <Card raised={true}>
      <Card.Content>
        <Placeholder>
          <Placeholder.Line length="full" />
          <Placeholder.Line length="very long" />
          <Placeholder.Line length="long" />
          <Placeholder.Line length="medium" />
        </Placeholder>
      </Card.Content>
    </Card>
  );
};
