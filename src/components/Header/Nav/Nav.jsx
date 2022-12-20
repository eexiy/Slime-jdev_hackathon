import React from 'react'
import './Nav.scss'
import logo from '../../../assets/logo.png'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
    return (
        <nav className='nav'>
            <img className="nav__logo" src={logo} alt="" />
            <ul className="nav__list">
                <NavLink to='/*' className='nav__list-link'>Главная</NavLink>
                <NavLink to='/genres' className='nav__list-link'>Жанры</NavLink>
                <NavLink to='/artists' className='nav__list-link'>Артисты</NavLink>
                <NavLink to='/albums' className='nav__list-link'>Альбомы</NavLink>
            </ul>
        </nav>
    )
}