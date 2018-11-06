import React, { Component } from 'react';

import ALPHABET from '../../data/alphabet';
import AlphabetTable from '../../components/Alphabet/AlphabetTable/AlphabetTable';
import LetterCard from '../../components/Alphabet/LetterCard/LetterCard';
import Modal from '../../components/UI/Modal/Modal';

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
      const selected_letter = ALPHABET[this.state.selected_letter_index - 1];

      selectedLetterCard = (
        <Modal cancel={ this.removeSelectionHandler }>
          <LetterCard letter={ selected_letter } />
        </Modal>
      );
    }

    return (
      <div>
        <h1>حروف الهجاء</h1>
        { selectedLetterCard }
        <AlphabetTable
          letters={ ALPHABET }
          selectLetter={ this.selectLetterHandler }/>

      </div>
    );
  }
}

export default AlphabetApp;
