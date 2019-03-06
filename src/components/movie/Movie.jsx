import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import MovieInfo from './components/movieInfo/MovieInfo';
import MovieInfoBar from './components/movieInfoBar/MovieInfoBar';
import Grid from '../home/components/grid/Grid';
import Actor from './components/actor/Actor';
import Spinner from '../home/components/spinner/Spinner';
import {MovieContainer} from './style';

// const API_URL = 'https://api.themoviedb.org/3/';
const api_key = 'API_KEY';
class Movie extends Component {

    state = {
        movie: null,
        actors: null,
        directors: [],
        loading: false,
    }

    componentDidMount(){
        this.setState({loading: true});
        const end_point = `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=${api_key}&language=en-US`;
        this.fetchDatas(end_point);
    }

    fetchDatas = (para) => {
        fetch(para)
        .then(res => res.json())
        .then(res => {
            if(res.status_code){
                this.setState({loading: false});
            } else {
                this.setState({
                    movies: res,
                }, () => {
                    const end_point = `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/credits?api_key=${api_key}`;
                    fetch(end_point)
                    .then(res => res.json())
                    .then(res => {
                        const directors = res.crew.filter((member) => member.job === 'Director');
                        this.setState({
                            actors: res.cast,
                            directors,
                            loading: false,
                        });
                    });
                });
            }
        })
        .catch(err => console.log("Error: ", err));
    }

    render() {
        return (
            <MovieContainer>
                <Navigation />
                <MovieInfo />
                <MovieInfoBar />
                
                <Spinner />
            </MovieContainer>
        );
    }
}

export default Movie;