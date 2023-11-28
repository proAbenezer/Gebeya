import React from 'react'
//Routing Links
import { Link, NavLink } from 'react-router-dom';

//icons
import 'boxicons';

//CSS Styles
import './Header.css'

function Header({ isnavBarScrolled }) {
    return (
        <header className={isnavBarScrolled ? 'header scrolled' : 'header'}>
            <div className="header__left">
                <box-icon
                    name='store'
                    type='solid'
                    size='30px'
                    className='header__left--icon'
                ></box-icon>
                <h1 className='header__left--title'>GEBEYA</h1>
            </div>
            <div className="header__right">
                <nav className="header__nav--container">
                    <ul className="nav__links--list">
                        <li className="nav__li">
                            <NavLink to='/' className='nav__link nav__link--home'>Home</NavLink>
                        </li>
                        <li className="nav__li">
                            <NavLink to='/cart' className='nav__link nav__link--cart'>
                                <box-icon className='nav__cart--icon' name='cart-alt' size='25px' ></box-icon>
                            </NavLink>
                        </li>
                        <li className="nav__li">
                            <button className="nav__signUp--button">Sign Up</button>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default Header