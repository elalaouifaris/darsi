import React from 'react'

import style from './MemoryCard.module.css';

export default function MemoryCard({ card_data }) {
  const classes = [style.CardInner, style.Flipped]
  return (
      <div className={ style.Card }  >
        <div className={ classes.join(' ') }>
          <div className={ style.CardFront }>
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
