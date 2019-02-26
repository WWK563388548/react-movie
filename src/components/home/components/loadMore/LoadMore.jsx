import React, { Component } from 'react';
import LoadMoreBtn from './LoadMore';


class LoadMore extends Component {
  render() {
    return (
      <LoadMoreBtn onClick={this.props.handleLoadMore}>
        <p>{this.props.text}</p>
      </LoadMoreBtn>
    );
  }
}

export default LoadMore;