import React, { Component } from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
