
import React, { Component } from 'react'
import _ from 'lodash';

import style from './AlphabetMemoryGame.module.css';

import ALPHABET from '../../data/alphabet';
import MemoryTable from '../../components/Alphabet/MemoryTable/MemoryTable';

const GAMESIZE = 8;

export class AlphabetMemoryGame extends Component {
  state = {
    cards_list: null,
    flip_index: null,
    matched: []
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
    if (this.state.flip_index === null){
      this.setState(prevState => {
        let cards = [...prevState.cards_list]
        cards[index].flipped = true;
        return {
          cards_list: cards,
          flip_index: index
        };
      });
    } else {
      const is_matching = this.isMatching(this.state.flip_index, index);
      if (is_matching) {
        this.setState(prevState => {
          const cards_list = [...prevState.cards_list];
          cards_list[prevState.flip_index].pinned = true;
          cards_list[index].flipped = true;
          cards_list[index].pinned = true;
          let matched = [...prevState.matched]
          matched.push(prevState.flip_index);
          matched.push(index);

          return {
            cards_list: cards_list,
            flip_index: null,
            matched: matched
          }
        })
      } else {
        this.setState(prevState => {
          const cards_list = [...prevState.cards_list];
          cards_list[prevState.flip_index].flipped = false;
          return { 
            cards_list: cards_list,
            flip_index: null
          }
        })
      }
    }
  }

  isMatching(first_index, second_index) {
    const first_card = this.state.cards_list[first_index];
    const second_card = this.state.cards_list[second_index];
    return (first_card.matching_id === second_card.matching_id);
  } 

  componentDidMount() {
    this.prepare_game_letters(ALPHABET, GAMESIZE);
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
}

export default AlphabetMemoryGame
