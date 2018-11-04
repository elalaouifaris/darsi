import React from 'react';

import styles from './LetterThumbnail.module.css';

const thumbnail = ({ letter, clicked }) => (
  <div
    className={ styles.Thumbnail }
    onClick={ clicked }>
      { letter }
  </div>
);

export default thumbnail;
