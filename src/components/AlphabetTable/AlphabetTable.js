import React from 'react';

import styles from './AlphabetTable.module.css';

import LetterThumbnail from '../LetterThumbnail/LetterThumbnail';

const table = (props) => {
  const cards = props.letters.map(
    (letter) => (
      <LetterThumbnail
        key={ letter.index }
        letter={ letter.isolated_form }
        clicked={ () => props.selectLetter(letter.index) }/>
    )
  );

  return (
    <div className={ styles.Table }>
      { cards }
    </div>
  );
}

export default table;
