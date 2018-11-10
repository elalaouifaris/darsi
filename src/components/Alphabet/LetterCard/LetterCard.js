import React from 'react';

import style from './LetterCard.module.css';

import LetterPositionSVG from '../LetterPositionSVG/LetterPositionSVG';

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
        <div className={style.Word}>
          <LetterPositionSVG
            text={ first_letter.text }
            start={ first_letter.start }
            end={ first_letter.end }/>
          <p>Au début</p>
        </div>

        <div className={style.Word}>
          <LetterPositionSVG
            text={ middle_letter.text }
            start={ middle_letter.start }
            end={ middle_letter.end }/>
          <p>Au milieu</p>
        </div>

        <div className={style.Word}>
          <LetterPositionSVG
            text={ last_letter.text }
            start={ last_letter.start }
            end={ last_letter.end }/>
          <p>A la fin</p>
        </div>
      </div>
    </div>
  );
}

export default letterCard;
