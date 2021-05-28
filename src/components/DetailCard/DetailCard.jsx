import React from 'react';
import { useHistory } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import { SegmentStyle } from './DetailCard.styles';
import ReactHtmlParser from 'react-html-parser';
import { ExploreButton } from '../ExploreButton/ExploreButton'

export const DetailCard = ({
  result, pathname
} = {}) => {
  const history = useHistory();

  const handleClick = async () => {
    const query = {
      title: result.title,
      text: result.text,
      date: result.date,
      topImage: result.topImage,
      tag: result.tag,
      id: result.id
    };
    history.push({
      pathname: '/full_article' + pathname + '/' + result.id,
      state: { post: query }
    });
  }

  return (
    <Segment style={SegmentStyle}>
      <div className="ui items">
        <div className="item">
          {result.topImage != null ? (
            <div className="image">
              <img
                src={result.topImage}
                alt="Image"
                width="200"
                height="121"
              />
            </div>
          ) : (<div />)}
          <div className="content">
            <div className="header">{ReactHtmlParser(result.title)}</div>
            <div className="meta">{result.date}</div>
            <div>{result.text.length > 500 ? ReactHtmlParser(result.text.slice(0, 500) + " ......") : ReactHtmlParser(result.text + " ......") || ""}</div>
            <br></br>
            <ExploreButton handleExploreButtonClick={handleClick} text={"Read More"} pointRight={true} />
          </div>
        </div>
      </div>
    </Segment>

  );
};
