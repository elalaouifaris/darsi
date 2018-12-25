import React from 'react'

import style from './MemoryCard.module.css';

export default function MemoryCard({ card_data, clicked }) {
  const classes = [
    style.CardInner, 
    card_data.flipped ? style.Flipped : null,
    card_data.pinned ? style.Pinned : null
  ]
  return (
      <div className={ style.Card }  >
        <div className={ classes.join(' ') }>
          <div className={ style.CardFront } onClick={ clicked }>
            { card_data.front_content }
          </div>

          <div className={ style.CardBack }>
            <div className={ style.CardDetails } >
              { card_data.back_content }
            </div>
          </div>
        </div>

      </div>
  )
}
