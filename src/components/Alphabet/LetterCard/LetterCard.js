import React from 'react';

import style from './LetterCard.module.css';

import WordContainer from './WordContainer/WordContainer';

const letterCard = ({ letter }) => {
  const {first_letter, middle_letter, last_letter} = letter.letter_highlight;
  return (
    <div className={style.Card}>
      {/* Letter Info Section */  }
      <div className={style.CardRow}>
        <div className={style.Index}>
        Lettre n° { letter.index }
        </div>

        <div className={style.Isolated}>
        <span>{ letter.isolated_form }</span>
        </div>

        <div className={style.Reading}>
        Lecture: <span>{ letter.reading }</span>
        </div>
      </div>

      {/* Letter Shapes Section */  }
      <div className={style.CardRow}>
        <WordContainer letter={ first_letter } title="Au début" />
        <WordContainer letter={ middle_letter } title="Au milieu" />
        <WordContainer letter={ last_letter } title="A la fin" />
      </div>
    </div>
  );
}

export default letterCard;
