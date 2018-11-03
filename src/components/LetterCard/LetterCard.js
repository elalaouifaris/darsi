import React from 'react';

const letterCard = ({ letter }) => {
  return (
    <div>
        <p>Lettre n° {letter.index + 1}</p>
        <p>Forme de la lettre: <span>{ letter.isolated_form }</span></p>
        <p>Lecture de la lettre: <span>{ letter.reading }</span></p>
    </div>
  );
}

export default letterCard;
