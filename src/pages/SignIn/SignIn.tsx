import React from 'react'
import { Link } from 'react-router-dom'
import './SignIn.scss'

export const SignIn = () => (
    <div className="auth">
        <form className='form'>
            <div className="form__inner">
                <h6>Login:</h6>
                <label htmlFor='email'></label>
                <input id='email' type='text' placeholder="Email" />
                <label htmlFor='password'></label>
                <input id='password' type='password' placeholder="Password" />
            </div>
            <span>New to Siivous? <Link to='/'>Sign up</Link></span>
            <button type="submit" disabled={true} className='btn'>Next</button>
        </form>
    </div>
);
