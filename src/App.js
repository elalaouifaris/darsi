import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Menu from './components/Navigation/Menu/Menu';
import LandingPage from './components/Navigation/LandingPage/LandingPage';
import AlphabetGame from './containers/AlphabetGame/AlphabetGame';
import AlphabetApp from './containers/AlphabetApp/AlphabetApp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Menu />
          <Route path="/" exact component={LandingPage} />
          <Route path="/game" component={AlphabetGame} />
          <Route path="/alphabet" component={AlphabetApp} />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
