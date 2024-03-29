import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, HashRouter } from 'react-router-dom';
import ExperiencePage from './pages/ExperiencePage/ExperiencePage';
import AboutPage from './pages/AboutPage/AboutPage';
import QuotesPage from './pages/QuotesPage/QuotesPage';
import Error404 from './pages/ErrorPage/Error404';
import { ErrorHandler } from './ErrorHandler';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import FullArticlePage from './pages/FullArticlePage/FullArticlePage';
import book_reviews_img from '../src/images/flowers.jpg';
import chinese_img from '../src/images/hill.jpg';
import globe_img from '../src/images/trailer.jpg';
import compsci_img from '../src/images/bluemountains.jpg';
import reflect_img from '../src/images/reflect.jpg';
import FirebaseWrapper from '../src/api/connect-firebase';
import ReactGA from 'react-ga';

require("dotenv").config({ path: __dirname + "/.env" });
const cs_db = FirebaseWrapper.ref('/cs-posts')
const bk_db = FirebaseWrapper.ref('/book-reviews-posts')
const chi_db = FirebaseWrapper.ref('/chinese-culture-posts')
const gb_db = FirebaseWrapper.ref('/globe-trotting-posts')
const rf_db = FirebaseWrapper.ref('/reflection-posts')

const TRACKING_ID = process.env.FIREBASE_MEASUREMENT_ID;
ReactGA.initialize(TRACKING_ID);

// Important to only use Hashrouter. Cannot use Browserrouter for github page.
ReactDOM.render(
  <HashRouter >
    <ErrorHandler>
      <Switch>
        <Route exact path="/" ><AboutPage /></Route>
        <Route exact path="/experience"><ExperiencePage/></Route>
        <Route exact path="/tech-world"><DetailsPage pathname='/cs-posts' image={compsci_img} title='Tech World' db={cs_db} /></Route>
        <Route exact path="/books"><DetailsPage pathname='/book-reviews-posts' image={book_reviews_img} title='Books' db={bk_db} /></Route>
        <Route exact path="/chinese-culture"><DetailsPage pathname='/chinese-culture-posts' image={chinese_img} title='Chinese Culture' db={chi_db} /></Route>
        <Route exact path="/globe_trotting"><DetailsPage pathname='/globe-trotting-posts' image={globe_img} title='Globe Trotting' db={gb_db} /></Route>
        <Route exact path="/quotes"><QuotesPage /></Route>
        <Route exact path="/reflections"><DetailsPage pathname='/reflection-posts' image={reflect_img} title='Reflections' db={rf_db} /></Route>
        <Route path="/full_article"><FullArticlePage /></Route>
        <Route path="*" component={Error404} />
      </Switch>
    </ErrorHandler>
  </HashRouter>,
  document.getElementById('root')
);

/*
Quotes
Globe Trotting
Reflections
Chinese Culture
Book Reviews
Tech World
*/