import React from 'react';

import style from './LetterThumbnail.module.css';

const thumbnail = ({ letter, reading, clicked }) => (
  <div
    className={ style.Card }
    onClick={ clicked }>

    <div className={style.CardInner}>
      <div className={ style.CardFront }>{ letter }</div>
      <div className={ style.CardBack }>{ reading }</div>
    </div>

  </div>
);

export default thumbnail;
