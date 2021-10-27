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
                        <a href="https://github.com/masacheung" target="_blank" rel="noreferrer noopener">Github</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/man-tat-masa-cheung-725b39b8/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://angel.co/u/man-tat-masa-cheung" target="_blank" rel="noreferrer noopener">AngelList</a>
                    </li>
                    <li>
                        <a href="https://masacheung.github.io/portfolio/" target="_blank" rel="noreferrer noopener">Portfolio</a>
                    </li>
                </ul>
                <NavBarSessionContainer />
            </div>
        </header>
    )
}

export default Navbar;