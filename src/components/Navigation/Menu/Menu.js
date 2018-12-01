import React from 'react'
import { Link } from 'react-router-dom';

import style from './Menu.module.css';

import MENU_TEXTS from '../../../data/menu';
const navigation_texts = MENU_TEXTS.Navigation;

export default function Navigation() {
  return (
    <header>
        <nav className={ style.Navigation }>
            <ul className={ style.LinkList }>
                <li className={ style.LinkItem }>
                    <Link to="/">{ navigation_texts.home }</Link>
                </li>
                <li className={ style.LinkItem }>
                    <Link to="/game">{ navigation_texts.game }</Link>
                </li>
                <li className={ style.LinkItem }>
                    <Link to="/alphabet">{ navigation_texts.alphabet }</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
