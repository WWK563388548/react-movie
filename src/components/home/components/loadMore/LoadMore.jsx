import React, { Component } from 'react';
import {LoadMoreBtn} from './style';


class LoadMore extends Component {
  render() {
    return (
      <LoadMoreBtn onClick={this.props.onClick}>
        <p>Load More</p>
      </LoadMoreBtn>
    );
  }
}

export default LoadMore;