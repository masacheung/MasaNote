import React from 'react';
import { Link } from 'react-router-dom';
import NavBarSessionContainer from './navbar_session_container'

const Navbar = () => {
    return (
        <header>
            <div className="navbar">
                <Link to="/" className="logo-navbar">
                    <img src={window.logo} className="logo-nav"/>
                    <p>MasaNote</p>
                </Link>
                <ul className="ul-nav">
                    <li>
                        <a href="https://github.com/masacheung">Github</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/man-tat-masa-cheung-725b39b8/">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://angel.co/u/man-tat-masa-cheung">AngelList</a>
                    </li>
                </ul>
                <NavBarSessionContainer />
            </div>
        </header>
    )
}

export default Navbar;