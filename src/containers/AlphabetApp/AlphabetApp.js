import React, { Component } from 'react';

import ALPHABET from '../../data/alphabet';
import AlphabetTable from '../../components/AlphabetTable/AlphabetTable';
import LetterCard from '../../components/LetterCard/LetterCard';

class AlphabetApp extends Component {
  state = {
    selected_letter_index: null,
  }

  selectLetterHandler = (index) => {
    this.setState({
      selected_letter_index: index
    });
  }

  removeSelectionHandler = () => {
    this.setState({
      selected_letter_index: null
    });
  }

  render () {

    let selectedLetterCard = null;
    if (this.state.selected_letter_index) {
      selectedLetterCard = <LetterCard
        letter={ ALPHABET[this.state.selected_letter_index] }
      />
    }

    return (
      <div>
        <h1>حروف الهجاء</h1>
        <AlphabetTable
          letters={ ALPHABET }
          selectLetter={ this.selectLetterHandler }/>

          { selectedLetterCard }
      </div>
    );
  }
}

export default AlphabetApp;
