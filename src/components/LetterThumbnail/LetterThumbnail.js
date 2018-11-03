import React from 'react';

const thumbnail = ({ letter, clicked }) => (
  <div onClick={ clicked }>
    { letter }
  </div>
);

export default thumbnail;
