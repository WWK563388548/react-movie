import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import MovieThumb from '../../../home/components/movieThumb/MovieThumb';
import {MovieInfoContainer, MovieInfoContent, MovieInfoThumb, MovieInfoText, MovieInfoRating, MovieInfoScore} from './style';
import NoImage from '../../../home/no_image.jpg';
import './meter.css';

library.add(faFilm)
const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
const POSTER_SIZE = "w500";
const BACKDROP_SIZE = "w1280";

class MovieInfo extends Component {
    render() {
        return (
            <MovieInfoContainer
                style={{
                    background: this.props.movie.backdrop_path ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.props.movie.backdrop_path}')` : "#000",
                }}
            >
                <MovieInfoContent>
                    <MovieInfoThumb>
                        <MovieThumb 
                            image={this.props.movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${this.props.movie.poster_path}` : NoImage}
                            clickable={false}
                        />
                    </MovieInfoThumb>
                    <MovieInfoText>
                        <h1>{this.props.movie.title}</h1>
                        <h3>PLOT</h3>
                        <p>{this.props.movie.overview}</p>
                        <h3>IMDB RATING</h3>
                        <MovieInfoRating>
                            <meter min="0" max="100" optimum="100" low="40" high="70" value={this.props.movie.vote_average * 10}>
                            </meter>
                            <MovieInfoScore>
                                {this.props.movie.vote_average}
                            </MovieInfoScore>
                        </MovieInfoRating>
                        {this.props.directors.length > 1 ? <h3>Directors</h3> : <h3>Director</h3>}
                        {this.props.directors.map((element, idx) => {
                            return <p key={idx} style={{margin: 0}}>{element.name}</p>
                        })}
                    </MovieInfoText>
                    <FontAwesomeIcon 
                        style={{
                            position: "absolute",
                            bottom: "40px",
                            right: "40px",
                            color: "#fff",
                        }} 
                        icon="film"
                        size="5x"
                    />
                </MovieInfoContent>
            </MovieInfoContainer>
        );
    }
}

export default MovieInfo;