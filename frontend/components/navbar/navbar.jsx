import React from 'react';
import { Link } from 'react-router-dom';
import NavBarSessionContainer from './navbar_session_container'

const Navbar = ({ currentUser, logout }) => {
    return (
        <header>
            <div className="navbar">
                <Link to="/" className="logo-navbar">
                    <img src={window.logo} className="logo"/>
                    <p>MasaNote</p>
                </Link>

                <NavBarSessionContainer />
            </div>
        </header>
    )
}

export default Navbar;