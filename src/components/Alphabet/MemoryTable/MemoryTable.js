import React from 'react'

import style from './MemoryTable.module.css';

import MemoryCard from './MemoryCard/MemoryCard';

export default function MemoryTable({card_list, clickHandler}) {

  let cards = null;
  if (card_list !== null){
    cards = card_list.map(
      (card_data, index) => <MemoryCard
        card_data={ card_data }
        clicked={ () => (clickHandler(index)) }
        key={ index }/>
    );
  }
  return (
   <div className={ style.Table }>
     { cards }
   </div>
  )
}
