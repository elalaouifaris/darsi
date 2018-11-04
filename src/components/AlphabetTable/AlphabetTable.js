import React from 'react';

import style from './AlphabetTable.module.css';

import LetterThumbnail from '../LetterThumbnail/LetterThumbnail';

const table = (props) => {
  const cards = props.letters.map(
    (letter) => (
      <LetterThumbnail
        key={ letter.index }
        letter={ letter.isolated_form }
        reading={ letter.reading }
        clicked={ () => props.selectLetter(letter.index) }/>
    )
  );

  return (
    <div className={ style.Table }>
      { cards }
    </div>
  );
}

export default table;
