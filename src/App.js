
import './App.css';
import NavBar from './ui/NavBar';

import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
