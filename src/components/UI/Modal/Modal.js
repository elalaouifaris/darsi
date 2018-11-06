import React from 'react';

import style from './Modal.module.css';

import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
  return (
    <>
      <Backdrop clicked={props.cancel}/>
      <div className={style.Modal}>{props.children}</div>
    </>
  );
}

export default modal;
