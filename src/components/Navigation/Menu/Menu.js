import React from 'react'
import { Link } from 'react-router-dom';

import style from './Menu.module.css';

export default function Navigation() {
  return (
    <header>
        <nav className={ style.Navigation }>
            <ul className={ style.LinkList }>
                <li className={ style.LinkItem }><Link to="/">Home</Link></li>
                <li className={ style.LinkItem }><Link to="/game">Game</Link></li>
                <li className={ style.LinkItem }><Link to="/alphabet">Alphabet</Link></li>
            </ul>
        </nav>
    </header>
  )
}
