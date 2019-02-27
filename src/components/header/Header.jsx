import React, { Component } from 'react';
import {
  HeaderWrapper,
  HeaderContent,
} from './header_style';
import logo from './logo.png';
import reactMovie from './reactMovie_logo.png';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <HeaderWrapper>
          <HeaderContent>
            <Link to="/">
              <img 
                style={{
                  width: '300px',
                  marginTop: '20px',
                  float: 'left',
                }}
                src={reactMovie}
                alt="the main logo"
              />
            </Link>
            <a href="https://www.themoviedb.org/">
              <img 
                style={{
                  width: '122px',
                  marginTop: '25px',
                  float: 'right',
                }}
                src={logo}
                alt="movie DB logo"
              />
            </a>
          </HeaderContent>
        </HeaderWrapper>
      </div>
    );
  }
}

export default Header;