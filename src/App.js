import React, { Component, Fragment } from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFound from './components/notfound/NotFound.jsx';
import Movie from './components/movie/Movie.jsx';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/:movieId" component={Movie} exact />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
