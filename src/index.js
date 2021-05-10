import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, HashRouter } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import QuotesPage from './pages/QuotesPage/QuotesPage';
import GlobeTrottingPage from './pages/GlobeTrottingPage/GlobeTrottingPage';
import Error404 from './pages/ErrorPage/Error404';
import { ErrorHandler } from './ErrorHandler';
import ReflectionsPage from './pages/ReflectionsPage/ReflectionsPage';
import TechWorldPage from './pages/TechWorldPage/TechWorldPage';
import BookReviewsPage from './pages/BookReviewsPage/BookReviewsPage';
import ChineseCulturePage from './pages/ChineseCulturePage/ChineseCulturePage';
import FullArticlePage from './pages/FullArticlePage/FullArticlePage';
require("dotenv").config({ path: __dirname + "/.env" });

console.log("Welcome Page")
console.log(process.env.PUBLIC_URL)
ReactDOM.render(
  <HashRouter>
    <ErrorHandler>
      <Switch>
        <Route path="/" component={WelcomePage} />
        <Route path="/about" component={AboutPage} />
        {/* <Route exact path="/" component={WelcomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/tech-world" component={TechWorldPage} />
        <Route exact path="/book-reviews" component={BookReviewsPage} />
        <Route exact path="/chinese-culture" component={ChineseCulturePage} />
        <Route exact path="/globe_trotting" component={GlobeTrottingPage} />
        <Route exact path="/quotes" component={QuotesPage} />
        <Route exact path="/reflections" component={ReflectionsPage} />
        <Route exact path="/full_article" component={FullArticlePage} /> */}
        <Route path="*" component={Error404} />
      </Switch>
    </ErrorHandler>
  </HashRouter>,
  // <h1>TESTING ONE TWO</h1>,
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