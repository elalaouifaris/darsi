
import React, { Component } from 'react'
import _ from 'lodash';

import style from './AlphabetMemoryGame.module.css';

import ALPHABET from '../../data/alphabet';
import MemoryTable from '../../components/Alphabet/MemoryTable/MemoryTable';
import Modal from '../../components/UI/Modal/Modal';
import ModalCard from '../../components/UI/ModalCard/ModalCard';

const GAMESIZE = 8;
const CARD_FLIP_BACK_DELAY = 1000;
const INITIAL_STATE = {
  cards_list: [],
  flip_index_1: null,
  flip_index_2: null,
  show_candidates: false,
  check_matching: false,
  pinned_pairs_count: 0,
  is_game_over: false
};
export class AlphabetMemoryGame extends Component {
  state = INITIAL_STATE

  componentDidMount() {
    this._resetGame();
  }

  componentDidUpdate() {
    if (this.state.show_candidates) {
      setTimeout(() => {
        this.setState({
          show_candidates: false,
          check_matching: true
        });
      }, CARD_FLIP_BACK_DELAY);
    } else if (this.state.check_matching) {
      const index_1 = this.state.flip_index_1;
      const index_2 = this.state.flip_index_2;
      const is_matching = this._isMatching(index_1, index_2);
      if (is_matching) {
        this.setState(this._matchingFlipUpdate());
      } else {
        this.setState(this._notMatchingFlipUpdate());
      }
    }
  }
  
  render() {
    let endGameModal = null;
    if (this.state.is_game_over) {
      endGameModal = <Modal cancel={ this._resetGame }>
                       <ModalCard> Bien Joué</ModalCard>
                     </Modal>
    }
    return (
      <>
        <div className={ style.Title }>Jeu De Mémoire</div>
        <MemoryTable 
          card_list={ this.state.cards_list }
          clickHandler={ this.flipHandler }
        />
        { endGameModal }
      </>
    )
  }
  
  flipHandler = index => {
    const oneCard = 1;
    const twoCards = 2;
    const noCardFlipped = ( this.state.flip_index_1 === null );
 
    if (noCardFlipped) {
      this.setState(this._flipUpdate(index, oneCard));
    } else if (this.state.flip_index_2 === null) {
      this.setState(this._flipUpdate(index, twoCards));
    }
  }

  _resetGame = () => {
    this.setState(INITIAL_STATE);
    this._prepare_game_letters(ALPHABET, GAMESIZE);
  };
  
  _prepare_game_letters = (array, count) => {
    const sample_letters = _.sampleSize(array, count);
    const doubled_letters = _.flatMap(sample_letters, elem => [elem, elem]);
    let game_letters = _.shuffle(doubled_letters);
    game_letters = game_letters.map(this._format_letter_data);

    this.setState({cards_list: game_letters}) 
  }

  _format_letter_data = letter_data => ({
    matching_id: letter_data.index,
    front_content: "D",
    back_content: letter_data.isolated_form,
    flipped: false,
    pinned: false
  });
  

  _flipUpdate = (index, nbSelectedCards) => {
    return prevState => {
      let cards = [...prevState.cards_list];
      cards[index].flipped = true;
      let newState = { cards_list: cards };
      newState['flip_index_' + nbSelectedCards] = index;

      if (nbSelectedCards === 2) {
        newState.show_candidates = true;
      }
      return newState;
    };
  }

  _isMatching = (first_index, second_index) => {
    const first_card = this.state.cards_list[first_index];
    const second_card = this.state.cards_list[second_index];
    return (first_card.matching_id === second_card.matching_id);
  } 

  _matchingFlipUpdate = () => {
    return prevState => {
      const cards_list = [...prevState.cards_list];
      const pinned_pairs_count = prevState.pinned_pairs_count + 2;
      const is_game_over = (pinned_pairs_count === cards_list.length);

      cards_list[prevState.flip_index_1].pinned = true;
      cards_list[prevState.flip_index_2].pinned = true;

      return {
        cards_list: cards_list,
        flip_index_1: null,
        flip_index_2: null,
        check_matching: false,
        pinned_pairs_count: pinned_pairs_count,
        is_game_over: is_game_over
      };
    };
  }

  _notMatchingFlipUpdate = () => {
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
