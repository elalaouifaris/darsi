import React from 'react';

import style from './LetterCard.module.css';

import WordContainer from './WordContainer/WordContainer';
import MENU_TEXTS from '../../../data/menu';


const letterCard = ({ letter }) => {
  const {first_letter, middle_letter, last_letter} = letter.letter_highlight;
  return (
    <div className={style.Card}>
      {/* Letter Info Section */  }
      <div className={style.CardRow}>
        <div className={style.Index}>
          {MENU_TEXTS.WordContainer.letter_index} { letter.index }
        </div>

        <div className={style.Isolated}>
        <span>{ letter.isolated_form }</span>
        </div>

        <div className={style.Reading}>
        {MENU_TEXTS.WordContainer.reading} <span>{ letter.reading }</span>
        </div>
      </div>

      {/* Letter Shapes Section */  }
      <div className={style.CardRow}>
        <WordContainer letter={ first_letter } title={MENU_TEXTS.WordContainer.first} />
        <WordContainer letter={ middle_letter } title={MENU_TEXTS.WordContainer.middle} />
        <WordContainer letter={ last_letter } title={MENU_TEXTS.WordContainer.end} />
      </div>
    </div>
  );
}

export default letterCard;
