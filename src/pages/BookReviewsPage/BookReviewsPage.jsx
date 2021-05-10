import React, { useEffect, useState } from 'react';
import DetailsPage from '../DetailsPage/DetailsPage';
import FirebaseWrapper from '../../api/connect-firebase';
import self from '../../images/self.png';

const pathName = '/book-reviews-posts'
const db = FirebaseWrapper.ref(pathName)

const BookReviewsPage = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchPosts() {
    setLoading(true)
    var response = await db.get10Posts().then((posts) => {
      if (posts) {
        // contains {title, text, date, topImage}
        return posts
      }
    });
    if (response.length > 0) {
      setData(response)
    }
    setLoading(false)
  }

  async function fetchNextPosts() {
    setLoading(true)
    var response = await db.getNext10Posts().then((posts) => {
      if (posts) {
        // contains {title, text, date, topImage}
        return posts
      }
    });
    if (response.length > 0) {
      setData(response)
    }
    setLoading(false)
  }

  async function fetchPrevPosts() {
    setLoading(true)
    var response = await db.getPrev10Posts().then((posts) => {
      if (posts) {
        // contains {title, text, date, topImage}
        return posts
      }
    });
    if (response.length > 0) {
      setData(response)
    }
    setLoading(false)
  }

  const handlePrevButtonClick = async () => {
    fetchPrevPosts();
  }
  const handleNextButtonClick = async () => {
    fetchNextPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <DetailsPage pathName={pathName} data={data} handleNextButtonClick={handleNextButtonClick} handlePrevButtonClick={handlePrevButtonClick} loading={loading} image={self} title={"Book Reviews"} />
    </div>
  );
};

export default BookReviewsPage;
