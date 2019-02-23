import React, { Component } from 'react';
import {
    Thumb,
} from './style';

class MovieThumb extends Component {

    render() {
      return (
        <div>
            <Thumb src={this.props.image} alt="Movie thumb"/>
        </div>
      );
    }
  }
  
  export default MovieThumb;