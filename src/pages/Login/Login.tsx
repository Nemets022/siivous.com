import React from 'react'
import { Link } from 'react-router-dom'
import loginPng from '../../assets/img/login.png'
import './Login.scss'

export const Login = () => {
    return (
        <div className="login">
        <div className="login__img">
            <img src={loginPng} alt="" />
        </div>
        <div className="login__title"><h6>To continue:</h6></div>
        {<Link to='/login'><button className="login__btn btn">Login</button></Link>}
        {<Link to='/'><button className="login__btn btn">Fill basic info</button></Link>}
    </div>
    )
}
