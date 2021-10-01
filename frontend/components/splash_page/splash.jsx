import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
    return (
        <div className="splash">
            <div className="splash-slogan">
                <div className="slogan">
                    Power of MasaNote, Make your life easier
                </div>
                <h1 className="sec-slogan">
                    Remember Masa is the creator.
                </h1>
                    <Link to="/signup" className="slogan-sign-up-for-free">
                        <button>Sign up for free</button>
                    </Link>
                    <br/>
                    <div className="slogan-log-in-link">
                    <Link to="/login">
                        <button >Already have an account? Log in</button>
                    </Link>
                    </div>
            </div>
            <hr/>
            <div className="splash-footer">
                <div className="splash-info">
                    <h3>
                        About
                    </h3>
                    <ul>
                        <li>
                            Man Tat Masa Cheung
                        </li>
                    </ul>
                </div>
                <div className="splash-info">
                    <h3>
                        Contact
                    </h3>
                    <ul>
                        <li>
                            <a href="https://github.com/masacheung">Github</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/man-tat-masa-cheung-725b39b8/">LinkedIn</a>
                        </li>
                    </ul>
                </div>
                <div className="splash-info">
                    <h3>More Projects</h3>
                        <ul>
                            <li>
                                <a href="https://masacheung.github.io/dropping_down/">Dropping Down</a>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Splash;