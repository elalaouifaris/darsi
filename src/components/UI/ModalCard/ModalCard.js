import React from 'react';

import style from './ModalCard.module.css';

const modalCard = ({ children }) => {
  return (
    <div className={ style.ModalCard }>
      <div className={ style.ModalCard__Content }>
        {children}
      </div>

    </div>
  );
}
export default modalCard;