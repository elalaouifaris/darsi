import React, { Component } from 'react';

import ALPHABET from '../../data/alphabet';

import AlphabetTable from '../../components/AlphabetTable/AlphabetTable';

class AlphabetApp extends Component {
  state = {
    selected_letter: null,
  }

  render () {
    return (
      <div>
        <h1>"حروف الهجاء"</h1>
        <AlphabetTable letters={ ALPHABET }/>
      </div>
    );
  }
}

export default AlphabetApp;
