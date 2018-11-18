import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import AlphabetApp from './containers/AlphabetApp/AlphabetApp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Route path="/" exact render={() => <h1>Router Testing</h1> } />
          <Route path="/" component={AlphabetApp} />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
