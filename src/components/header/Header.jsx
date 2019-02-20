import React, { Component } from 'react';
import {
  HeaderWrapper,
  HeaderContent,
} from './header_style';
import logo from './logo.png';
import reactMovie from './reactMovie_logo.png';

class Header extends Component {
  render() {
    return (
      <div>
        <HeaderWrapper>
          <HeaderContent>
            <img 
              style={{
                width: '300px',
                marginTop: '20px',
                float: 'left',
              }}
              src={reactMovie}
              alt="the main logo"
            />
            <img 
              style={{
                width: '122px',
                marginTop: '25px',
                float: 'right',
              }}
              src={logo}
              alt="movie DB logo"
            />
          </HeaderContent>
        </HeaderWrapper>
      </div>
    );
  }
}

export default Header;