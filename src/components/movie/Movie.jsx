import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import MovieInfo from './components/movieInfo/MovieInfo';
import MovieInfoBar from './components/movieInfoBar/MovieInfoBar';
import Grid from '../home/components/grid/Grid';
import Actor from './components/actor/Actor';
import Spinner from '../home/components/spinner/Spinner';
import {MovieContainer, MovieGrid} from './style';

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
                {this.state.movies ? 
                    <div>
                        <Navigation movie={this.state.movies.original_title} />
                        <MovieInfo movie={this.state.movies} directors={this.state.directors} />
                        <MovieInfoBar time={this.state.movies.runtime} budget={this.state.movies.budget} revenue={this.state.movies.revenue} />
                    </div>
                : null }
                {this.state.actors ? 
                    <MovieGrid>
                        <Grid header={'Actors'}>
                            {this.state.actors.map((element, index) => {
                                return <Actor key={index} actor={element} />
                            })}
                        </Grid>
                    </MovieGrid>
                    : null}
                {!this.state.actors && !this.state.loading ? <h1>No Movie Found!</h1> : null}
                {this.state.loading ? <Spinner /> : null}
            </MovieContainer>
        );
    }
}

export default Movie;