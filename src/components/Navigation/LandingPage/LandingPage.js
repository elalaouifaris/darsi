import React from 'react'
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div>
        <div>
            <li><Link to="/game">Game</Link></li>
        </div>
        <div>
            <li><Link to="/alphabet">Alphabet</Link></li>
        </div>
    </div>
  )
}
