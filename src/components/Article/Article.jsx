import React from 'react';
import { Divider, Header } from 'semantic-ui-react';
import bluesea from '../../images/bluesea.jpg';
import ReactHtmlParser from 'react-html-parser';
import { ImageContainer, SimpleContainer } from './Article.styles'
import { ExploreButton } from '../ExploreButton/ExploreButton'
import { useHistory } from 'react-router-dom';

// post: {title, text, date, topImage, tag}
// Accessed from the Latest Page
export const Article = ({ post } = {}) => {

  const history = useHistory();

  const handleClick = async () => {
    const query = {
      title: post.title,
      text: post.text,
      date: post.date,
      topImage: post.topImage,
      tag: post.tag,
      id: post.id
    };

    history.push({
      pathname: '/full_article/' + post.tag + '/' + post.id,
      state: { post: query }
    });
  }

  return (
    <SimpleContainer>
      <Header as='h2'>{ReactHtmlParser(post.title) || ""}</Header>
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
      <div>{post.text.length > 2000 ? ReactHtmlParser(post.text.slice(0, 2000)) : ReactHtmlParser(post.text) || ""}</div>
      <br></br>
      <ExploreButton handleExploreButtonClick={handleClick} text={"Read More"} pointRight={true} />
    </SimpleContainer>
  );
};
