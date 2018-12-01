import React from 'react'
import { Link } from 'react-router-dom';

import style from './LandingPage.module.css';

import MENU_TEXTS from '../../../data/menu';
const navigation_text = MENU_TEXTS.Navigation;

export default function LandingPage() {
  return (
    <ul className={ style.SectionList }>
        <li className={ style.SectionButton }>
            <Link to="/game">{ navigation_text.game }</Link>
        </li>
        <li className={ style.SectionButton }>
            <Link to="/alphabet">{ navigation_text.alphabet }</Link>
        </li>
    </ul>
  )
}
