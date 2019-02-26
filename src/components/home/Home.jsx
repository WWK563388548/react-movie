import React, { Component } from 'react';
import MainImagePart from './components/mainImagePart/MainImagePart';
import SearchBar from './components/searchBar/SearchBar';
import Grid from './components/grid/Grid';
import MovieThumb from './components/movieThumb/MovieThumb';
import Spinner from './components/spinner/Spinner';
import LoadMore from './components/loadMore/LoadMore';
import {
    HomeGrid,
} from './home_style';
import NoImage from './no_image.jpg'


class Home extends Component {

    api_key = 'API_KEY';

    state = {
        movies: [],
        heroImage: null,
        loading: false,
        currentPage: 0,
        totalPages: 0,
        searchTerm: '',
    }

    componentDidMount(){
        this.setState({loading: true});
        const end_point = `https://api.themoviedb.org/3/movie/popular?api_key=${this.api_key}&language=en-US&page=1`;
        this.fetchDatas(end_point);
    }

    searchItems = (searchTerm) => {
        let end_point = '';
        this.setState({
            movies: [],
            loading: true,
            searchTerm
        });

        if(searchTerm === ''){
            end_point = `https://api.themoviedb.org/3/movie/popular?api_key=${this.api_key}&language=en-US&page=1`;
        } else {
            end_point = `https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=${this.state.searchTerm}&page=1`;
        }
        this.fetchDatas(end_point);
    }

    fetchDatas = (para) => {
        fetch(para)
        .then(res => res.json())
        .then(res => {
            const newState = this.state.movies;
            console.log(res);
            this.setState({
                movies: newState.concat(res.results),
                heroImage: this.state.heroImage || res.results[0],
                loading: false,
                currentPage: res.page,
                totalPages: res.total_pages,
            });
        });
    }

    loadMoreItems = () => {
        let end_point = '';
        this.setState({loading: true});

        if(this.state.searchTerm === ''){
            end_point = `https://api.themoviedb.org/3/movie/popular?api_key=${this.api_key}&language=en-US&page=${this.state.currentPage + 1}`;
        } else {
            end_point = `https://api.themoviedb.org/3/movie/popular?api_key=${this.api_key}&language=en-US&query=${this.state.searchTerm}&page=${this.state.currentPage + 1}`;
        }
        this.fetchDatas(end_point);
    }

    render() {
        return (
            <div style={{marginBottom: '100px'}}>
                {this.state.heroImage ? 
                    <div>
                        <MainImagePart heroImage={this.state.heroImage}/>
                        <SearchBar callback={this.searchItems} />
                    </div> : null
                }
                <HomeGrid>
                    {this.state.movies && 
                        <Grid 
                            header={this.state.searchTerm ? 'Search Result' : 'Popular Movies'}
                            loading={this.state.loading}
                        >
                            {this.state.movies.map((element, id) => {
                                return (
                                    <MovieThumb
                                        key={id}
                                        clickable={true}
                                        image={element.poster_path ? `http://image.tmdb.org/t/p/w500${element.poster_path}` : NoImage}
                                        movieId={element.id}
                                        movieName={element.original_title}
                                    />
                                )
                            })}
                        </Grid>}
                        {this.state.loading ? <Spinner /> : null}
                        {(this.state.currentPage < this.state.totalPages && !this.state.loading) ? 
                            <LoadMore text='Load More' onClick={this.loadMoreItems} /> : null }
                </HomeGrid>
    
            </div>
        );
    }
}

export default Home;