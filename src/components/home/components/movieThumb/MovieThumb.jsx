import React, { Component } from 'react';
import {
    Thumb,
} from './style';
import {Link} from 'react-router-dom';

class MovieThumb extends Component {

    render() {
      return (
        <div>
          { this.props.clickable ? 
            <Link to={{pathname: `/${this.props.movieId}`, movieName: `${this.props.movieName}`}}>
              <Thumb src={this.props.image} alt="Movie thumb"/>
            </Link>
            :
            <Thumb src={this.props.image} alt="Movie thumb"/>
          }
        </div>
      );
    }
  }
  
  export default MovieThumb;