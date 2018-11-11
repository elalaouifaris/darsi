import React from 'react';

import style from './WordContainer.module.css';

import LetterPositionSVG from '../../LetterPositionSVG/LetterPositionSVG';

const WordContainer = ({ letter, title }) => (
  <div className={style.Word}>
    <LetterPositionSVG
      text={ letter.text }
      start={ letter.start }
      end={ letter.end }/>
    <p className={style.Title}>{ title }</p>
  </div>
);

export default WordContainer;
