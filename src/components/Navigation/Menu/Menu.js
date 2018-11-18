import React from 'react'
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <header>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/game">Game</Link></li>
                <li><Link to="/alphabet">Alphabet</Link></li>
            </ul>
        </nav>
    </header>
  )
}
