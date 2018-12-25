
import React, { Component } from 'react'
import _ from 'lodash';

import style from './AlphabetMemoryGame.module.css';

import ALPHABET from '../../data/alphabet';
import MemoryTable from '../../components/Alphabet/MemoryTable/MemoryTable';

const GAMESIZE = 8;

export class AlphabetMemoryGame extends Component {
  state = {
    cards_list: null,
    flip_index_1: null,
    flip_index_2: null,
    show_candidates: false,
    check_matching: false
  }

  componentDidMount() {
    this.prepare_game_letters(ALPHABET, GAMESIZE);
  }

  componentDidUpdate() {
    if (this.state.show_candidates) {
      setTimeout(() => {
        this.setState({
          show_candidates: false,
          check_matching: true
        });
      }, 1000);
    } else if (this.state.check_matching) {
      const index_1 = this.state.flip_index_1;
      const index_2 = this.state.flip_index_2;
      const is_matching = this.isMatching(index_1, index_2);
      if (is_matching) {
        this.setState(this.matchingFlipUpdate());
      } else {
        this.setState(this.notMatchingFlipUpdate());
      }
    }
  }

  render() {
    return (
      <>
        <div className={ style.Title }>Jeu De Mémoire</div>
        <MemoryTable 
          card_list={ this.state.cards_list }
          clickHandler={ this.flipHandler }
        />
      </>
    )
 }

  prepare_game_letters = (array, count) => {
    const sample_letters = _.sampleSize(array, count);
    const doubled_letters = _.flatMap(sample_letters, elem => [elem, elem]);
    let game_letters = _.shuffle(doubled_letters);
    game_letters = game_letters.map(this.format_letter_data);

    this.setState({cards_list: game_letters}) 
  }

  format_letter_data = letter_data => ({
    matching_id: letter_data.index,
    front_content: "D",
    back_content: letter_data.isolated_form,
    flipped: false,
    pinned: false
  });
  
  flipHandler = index => {
    const noCardFlipped = ( this.state.flip_index_1 === null );
    if (noCardFlipped) {
      this.setState(this.flipUpdate(index, 1));
    } else if (this.state.flip_index_2 === null) {
      this.setState(this.flipUpdate(index, 2));
    }
  }

  flipUpdate(index, flipIndex) {
    return prevState => {
      let cards = [...prevState.cards_list];
      cards[index].flipped = true;
      let newState = {
        cards_list: cards
      };
      newState['flip_index_' + flipIndex] = index;
      if (flipIndex === 2) {
        newState.show_candidates = true;
      }
      return newState;
    };
  }

  isMatching(first_index, second_index) {
    const first_card = this.state.cards_list[first_index];
    const second_card = this.state.cards_list[second_index];
    return (first_card.matching_id === second_card.matching_id);
  } 

  matchingFlipUpdate() {
    return prevState => {
      const cards_list = [...prevState.cards_list];
      cards_list[prevState.flip_index_1].pinned = true;
      cards_list[prevState.flip_index_2].pinned = true;
      return {
        cards_list: cards_list,
        flip_index_1: null,
        flip_index_2: null,
        check_matching: false
      };
    };
  }

  notMatchingFlipUpdate() {
    return prevState => {
      const cards_list = [...prevState.cards_list];
      cards_list[prevState.flip_index_1].flipped = false;
      cards_list[prevState.flip_index_2].flipped = false;
      return {
        cards_list: cards_list,
        flip_index_1: null,
        flip_index_2: null,
        check_matching: false
      };
    };
  }

}

export default AlphabetMemoryGame
