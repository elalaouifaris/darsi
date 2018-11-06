import React from 'react';

import style from './Modal.module.css';

import { MdClose } from 'react-icons/md';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
  return (
    <>
      <Backdrop clicked={props.cancel}/>
      <div className={style.Modal}>
        <div className={ style.CloseButton }
          onClick={ props.cancel }>
          <MdClose />
        </div>
        {props.children}
      </div>
    </>
  );
}

export default modal;
