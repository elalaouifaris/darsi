import React from 'react'

import style from './MemoryTable.module.css';

import MemoryCard from './MemoryCard/MemoryCard';

export default function MemoryTable({card_list}) {
  const cards = card_list.map(
    (card_data, index) => <MemoryCard card_data={ card_data } key={ index }/>
  );
  return (
   <div className={ style.Table }>
     { cards }
   </div>
  )
}
