import React from 'react';
import { Segment, Placeholder } from 'semantic-ui-react';
import { SegmentStyle } from './EmptyDetailCard.styles';

export const EmptyDetailCard = () => {
  return (
    <Segment style={SegmentStyle}>
      <div className="ui items">
        <div className="item">
          <div className="image">
            <Placeholder>
              <Placeholder.Image />
            </Placeholder>
          </div>
          <div className="content">
            <Placeholder>
              <Placeholder.Line length="full" />
              <Placeholder.Line length="very long" />
              <Placeholder.Line length="long" />
              <Placeholder.Line length="medium" />
            </Placeholder>
          </div>
        </div>
      </div>
    </Segment>
  );
};
