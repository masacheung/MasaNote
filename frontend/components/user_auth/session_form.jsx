import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            redirectToHome: false 
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
    }

    handleDemo(e) {
        this.props.processForm({
            username: "demo",
            password: "password"
        })
    }
    
    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                        {console.log(error)}
                    </li>
                ))}
            </ul>
        )
    }

    componentDidMount() {
        this.props.clearSessionErrors();
    }

    render(){
        return(
            <div className="session-form-background">
                <div className="session-form-container">
                    <div className="session-form-body">

                        <div className="session-heading">
                            <Link to="/">
                                <img src={window.logo} className="user-auth-logo"/>
                            </Link>
                            <h1 className="logo-link">MasaNote</h1>
                            <p>Remember Masa is the creator!</p>
                            <div className="errors">{this.renderErrors()}</div>
                        </div>
                        <form className="session-form" onSubmit={this.handleSubmit}>
                            <ul>
                                <li>
                                    <input type="text"
                                        value={this.state.username}
                                        onChange={this.update('username')}
                                        placeholder="Username"
                                        className="username-field"
                                    />
                                </li>
                                <li>
                                    <input type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        placeholder="Password"
                                        className="password-field"
                                    />
                                </li>
                                <li>
                                    <input className="session-form-continue" type="submit" value="Continue"/>
                                </li>

                            </ul>
                        </form>
                            <div className="context-switch">
                                <div>{this.props.navText}</div>
                                <div className="switch">{this.props.navLink}</div>
                                <div className="switch"><a onClick={() => this.handleDemo()}>Log in with Demo user</a></div>
                            </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}