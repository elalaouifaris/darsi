import React from 'react';

import style from './Backdrop.module.css';

const backdrop = (props) => {
  return (
    <div
      className={style.Backdrop}
      onClick={props.clicked}></div>
  );
}

export default backdrop;
