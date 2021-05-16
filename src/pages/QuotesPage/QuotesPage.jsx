import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';
import PortalLayout from '../../layouts/PortalLayout';
import { QuoteCard } from '../../components/QuoteCard/QuoteCard';
import { EmptyQuoteCard } from '../../components/EmptyQuoteCard/EmptyQuoteCard';
import { NoPostHeader } from '../../components/NoPostHeader/NoPostHeader';
import style, { Background, PostsCard, Header } from './QuotesPage.styles.jsx';
import FirebaseWrapper from '../../api/connect-firebase';
import quoteImage from '../../images/pinkmountain.jpg';

const pathName = '/quotes-posts'
const db = FirebaseWrapper.ref(pathName)

const Quotes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const colorArray = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"]

  useEffect(() => {
    async function fetchQuotesPosts() {
      setLoading(true);
      var response = await db.getAllPosts().then((posts) => {
        if (posts) {
          // contains {title, text, date, topImage}
          return posts
        }
      });
      setData(response);
      setLoading(false);
    }
    fetchQuotesPosts();
  }, []);

  return (
    <PortalLayout >
      <div className="image">
        <Background image={quoteImage}>
          <PostsCard>
            {loading && data.length === 0 ? (
              <div>
                <div className="row" style={style.card}>
                  <Card.Group centered >
                    {[...Array(4)].map(() => (
                      <EmptyQuoteCard />
                    ))}
                  </Card.Group>
                </div>
              </div>
            ) : (!loading && data.length === 0) ? (
              <div>
                <Header>My Favourite Quotes</Header>
                <NoPostHeader style={style.text} />
              </div>
            ) : (
              <div>
                <Header>My Favourite Quotes</Header>
                <div className="row" style={style.card}>
                  <Card.Group centered >
                    {data.map((result, index) => (
                      <QuoteCard post={result} color={colorArray[index % (colorArray.length)]} />
                    ))}
                  </Card.Group>
                </div>
              </div>
            )}
          </PostsCard>
        </Background>
      </div>
    </PortalLayout>
  );
};

export default Quotes;
