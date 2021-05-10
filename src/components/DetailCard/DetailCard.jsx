import React from 'react';
import { useHistory } from 'react-router-dom';
import { Segment, Placeholder } from 'semantic-ui-react';
import { SegmentStyle, ClickMore } from './DetailCard.styles';

export const DetailCard = ({
  title, text, date, topImage
} = {}) => {
  const history = useHistory();

  const handleClick = async () => {
    const query = {
      title: title,
      text: text,
      date: date,
      topImage: topImage,
    };

    history.push({
      pathname: '/full_article',
      state: { post: query }
    });
  }

  return (title ? (
    <Segment style={SegmentStyle}>
      <div className="ui items">
        <div className="item">
          {topImage != null ? (
            <div className="image">
              <img
                src={topImage}
                alt="Image"
                width="200"
                height="121"
              />
            </div>
          ) : (<div />)}
          <div className="content">
            <div className="header">{title}</div>
            <div className="meta">{date}</div>
            <div className="description" dangerouslySetInnerHTML={{ __html: text.length > 1000 ? text.slice(0, 1000) : text || "" }}></div>
            <ClickMore className="meta" onClick={handleClick} >{"................. View More .................."}</ClickMore>
          </div>
        </div>
      </div>
    </Segment>

  ) : (
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
  ));
};
