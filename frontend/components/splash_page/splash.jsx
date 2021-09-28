import React from 'react';

const Splash = () => {
    return (
        <div className="splash">
            <div>
                Spash Page
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