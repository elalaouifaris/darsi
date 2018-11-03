import React from 'react';

import LetterCard from '../LetterCard/LetterCard';

const table = (props) => {
  const cards = props.letters.map(
    (letter) => <LetterCard letter={ letter } />
  );

  return (
    <div>
      { cards }
    </div>
  );
}

export default table;
