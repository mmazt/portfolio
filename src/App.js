import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react'
import logo from './logo.svg';
import './style/App.css';
import Intro from './components/intro'

class App extends Component {
  render() {
    return (
          <Intro />
        );
  }
}

export default App;
