
import React, { Component } from 'react'
import _ from 'lodash';

import ALPHABET from '../../../data/alphabet';
import MemoryGame from '../MemoryGame';

const GAMESIZE = 8;
export class AlphabetMemoryGame extends Component {

  render() {
    return (
      <MemoryGame content_list={ this._prepare_game_letters(ALPHABET, GAMESIZE) }>
      </MemoryGame>
    )
  }
  _prepare_game_letters = (array, count) => {
    const sample_letters = _.sampleSize(array, count);
    const doubled_letters = _.flatMap(sample_letters, elem => [elem, elem]);
    let game_letters = _.shuffle(doubled_letters);
    game_letters = game_letters.map(this._format_letter_data);

    return game_letters;
  }

  _format_letter_data = letter_data => ({
    matching_id: letter_data.index,
    front_content: "D",
    back_content: letter_data.isolated_form,
    flipped: false,
    pinned: false
  });
}

export default AlphabetMemoryGame
