import React from 'react'
import cartSvg from '../../assets/svg/cart.svg'
import loginSvg from '../../assets/svg/login.svg'
import {Link} from 'react-router-dom'

import './Header.scss'

export const Header = () => {
    return (
        <header className='header'>
            <div className="header__left">
            <div className="header__burger"></div>
            <div className="header__logo">
                <Link to="/">Siivous</Link>
            </div>
            </div>
            <div className="header__right">
            <div className="header__cart">
                <img src={cartSvg} alt=""/>
            </div>
            <div className="header__login">
                <img src={loginSvg} alt=""/>
            </div>
            </div>
        </header>
    )
}

