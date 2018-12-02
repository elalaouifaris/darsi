
import React, { Component } from 'react'
import _ from 'lodash';

import style from './AlphabetMemoryGame.module.css';

import ALPHABET from '../../data/alphabet';
import MemoryTable from '../../components/Alphabet/MemoryTable/MemoryTable';

export class AlphabetMemoryGame extends Component {
  state = {
    letters: null
  }

  prepare_game_letters = (array, count) => {
    const sample_letters = _.sampleSize(array, count);
    const doubled_letters = _.flatMap(sample_letters, elem => [elem, elem]);
    let game_letters = _.shuffle(doubled_letters);
    game_letters = game_letters.map(this.format_letter_data);

    this.setState({letters: game_letters}) 
  }

  format_letter_data = letter_data => ({
    front_content: "D",
    back_content: letter_data.isolated_form,
    flipped: false,
    pinned: false
  });

  componentWillMount() {
    this.prepare_game_letters(ALPHABET, 8);
  }

  render() {
    return (
      <>
        <div className={ style.Title }>Jeu De Mémoire</div>
        <MemoryTable 
          card_list={ this.state.letters }
        />
      </>
    )
 }
}

export default AlphabetMemoryGame
