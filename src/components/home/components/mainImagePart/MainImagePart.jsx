import React, { Component } from 'react';
import {
    MainImageWrapper,
    MainImageContent,
    MainImageText,
} from './style';

class MainImagePart extends Component {
  render() {
      console.log(this.props);
      // http://image.tmdb.org/t/p/
    return (

      <MainImageWrapper image={`http://image.tmdb.org/t/p/w1280${this.props.heroImage.backdrop_path}`}>
        <MainImageContent>
            <MainImageText>
                <h1>{this.props.heroImage.original_title}</h1>
                <p>{this.props.heroImage.overview}</p>
            </MainImageText>
        </MainImageContent>
      </MainImageWrapper>
    );
  }
}

export default MainImagePart;