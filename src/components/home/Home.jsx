import React, { Component } from 'react';
import MainImagePart from './components/mainImagePart/MainImagePart';
import SearchBar from './components/searchBar/SearchBar';
import Grid from './components/grid/Grid';
import MovieThumb from './components/movieThumb/MovieThumb';
import Spinner from './components/spinner/Spinner';
import LoadMore from './components/loadMore/LoadMore';


class Home extends Component {
  render() {
    return (
      <div style={{marginBottom: '100px'}}>
        <MainImagePart />
        <SearchBar />
        <Grid />
        <Spinner />
        <LoadMore />
        
      </div>
    );
  }
}

export default Home;