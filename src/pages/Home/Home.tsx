import React from 'react'
import { Link } from 'react-router-dom'
import cleaningPng from '../../assets/img/cleaning.png'
import './Home.scss'

export const Home = () => {
    return (
        <div className="home">
            <div className="home__img">
                <img src={cleaningPng} alt="" />
            </div>
            <div className="home__title"><h6>Choose cleaning contract</h6></div>
            {<Link to='/onetime'><button className="home__btn btn">One time</button></Link>}
            {<Link to='/contract'><button className="home__btn btn">Contractual cleaning</button></Link>}
        </div>
    )
}
