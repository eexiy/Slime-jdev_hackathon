import React from 'react'
import './Nav.scss'
import logo from '../../../assets/logo.png'
import { NavLink } from 'react-router-dom';
import SearchBar from '../../SearchBar/SearchBar';
import { RiAccountCircleLine } from 'react-icons/ri'


export const Nav = ({ isAuth = true  }) => {

    return (
        <nav className='nav'>
            <NavLink to='/home'><img className="nav__logo" src={logo} alt="" /></NavLink>

            <ul className="nav__list">
                {
                    isAuth ? <SearchBar /> : ''
                }
                <NavLink to='/home' className='nav__list-link'>Главная</NavLink>
                <NavLink to='/genres' className='nav__list-link'>Жанры</NavLink>
                <NavLink to='/artists' className='nav__list-link'>Артисты</NavLink>
                <NavLink to='/albums' className='nav__list-link'>Альбомы</NavLink>
            </ul>
            {
                isAuth ? <RiAccountCircleLine className='nav__list-icon' /> : ''
            }
        </nav>
    )
}