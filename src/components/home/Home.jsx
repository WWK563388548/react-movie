import React, { Component } from 'react';
import MainImagePart from './components/mainImagePart/MainImagePart';
import SearchBar from './components/searchBar/SearchBar';
import Grid from './components/grid/Grid';
import MovieThumb from './components/movieThumb/MovieThumb';
import Spinner from './components/spinner/Spinner';
import LoadMore from './components/loadMore/LoadMore';


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

    fetchDatas = (para) => {
        fetch(para)
        .then(res => res.json())
        .then(res => {
            // console.log(res);
            this.setState({
                movies: [...this.state.movies, res.results],
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