import React from 'react';
import { Link } from 'react-router-dom';

const NavBarSession = ({ currentUser, logout }) => {
    const loginButton = () => (
        <nav className="session-nav">
            <Link to="/login">Log In</Link>
        </nav>
    );

    const greetingOrLogout = () => {
        <nav className="session-nav">
            <h2>Hello {currentUser.uesrname}</h2>
            <Link to="/" onClick={logout}>Log out</Link>
        </nav>
    };

    return currentUser ? greetingOrLogout() : loginButton();
}

export default NavBarSession;