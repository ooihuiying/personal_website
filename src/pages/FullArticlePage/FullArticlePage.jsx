import React, { useEffect, useState } from 'react';
import PortalLayout from '../../layouts/PortalLayout';
import { Container, Background, ImageContainer } from './FullArticlePage.styles';
import { useLocation } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser';
import { Divider } from 'semantic-ui-react';
import LoadSpinner from '../../components/LoadSpinner/LoadSpinner';
import FirebaseWrapper from '../../api/connect-firebase';
import { DisqusComments } from '../../components/DiscuqComments/DiscuqComments';
/*
 * Wanted to display Disqus comments section for each article page.
 * However, somehow all the articles ended up displaying the same comments
 * even though I passed in a different Disqus config .....
 * Hence, I just removed it..and only display the Disqus comments section in the 
 * about page.
 */
const FullArticlePage = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchPost() {
      if (location.state !== undefined) {
        // (1) Derive data from the query input
        const data = location.state.post;
        setData(data);
        setLoading(false);
      } else {
        // (2) Derive data from the Database based on query url
        setLoading(true);
        const query_str = location.pathname.substring(1).split("/") // '/full_article' + pathname + '/' + id
        const pathname = query_str[1]
        const id = query_str[2]
        const db = FirebaseWrapper.ref(pathname + "/" + id)
        var data = await db.getSinglePost(id).then((post) => {
          if (post) {
            // contains {title, text, date, topImage, tag, id}
            return post
          }
        });
        setData(data);
        setLoading(false);
      }
    }
    fetchPost();
  }, []);

  return (
    <PortalLayout>
      <Background >
        {!loading ?
          <div>
            <Container>
              {data.tag !== undefined ? <a className="ui red tag label">{data.tag}</a> : <div />}
              <h1 style={{ 'textAlign': 'center' }} as='h2'>{ReactHtmlParser(data.title) || ""}</h1>
              {data.topImage ? (
                <ImageContainer>
                  <img
                    src={data.topImage}
                    alt="Image"
                    className="ui centered massive image"
                  />
                </ImageContainer>
              ) : (<div></div>)}
              <Divider horizontal>{data.date || ""}</Divider>
              {ReactHtmlParser(data.text || "")}
              {/* <div style={{ 'padding': "100px" }}>
                {data.tag !== "quotes-posts" ?
                  <DisqusComments post={data} url={"https://ooihuiying.github.io/personal_website/#" + location.pathname} />
                  : <div></div>
                }
              </div> */}
            </Container>
          </div>
          : <LoadSpinner />}
      </Background>
    </PortalLayout >
  );
};

export default FullArticlePage;
