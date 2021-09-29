import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="main-nav">
                <div className="main-nav-user">
                    <div className="main-nav-username">
                        {this.props.currentUser.username}
                    </div>
                </div>
                <button className="new-note">
                    <div className="new-note-icon">New Note</div>
                </button>
                <ul className="main-nav-list">
                    <li>
                        <Link to="/" onClick={this.props.logout}>Log out {this.props.currentUser.username}</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav;