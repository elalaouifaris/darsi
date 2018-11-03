import React from 'react';

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
    <div>
      { cards }
    </div>
  );
}

export default table;
