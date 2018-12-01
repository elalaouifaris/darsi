import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import style from'./App.module.css';

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
          <div className={ style.Content }>
            <Route path="/" exact component={LandingPage} />
            <Route path="/game" component={AlphabetGame} />
            <Route path="/alphabet" component={AlphabetApp} />
          </div>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
