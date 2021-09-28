import React from "react";
import { Redirect } from "react-router";

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.history.push('/notes'));
    }

    handleDemo(e) {
        this.props.processForm({
            username: "demo",
            password: "password"
        })
    }

    componentDidMount() {
        this.props.clearSessionErrors();
    }

    render() {
        return (
            <div>
                Helo 
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <ul>
                        <li>
                            <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-field"
                                    />
                        </li>
                        <li>
                            <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-field"
                                    />
                        </li>
                        <li>
                            <input type="submit"
                                    value="Continue"
                                    className="login-button"
                                    />
                        </li>
                    </ul>
                    <div>
                        <div>{this.props.navText}</div>
                        <div>{this.props.nvaLink}</div>
                        <dib><a onClick={this.handleDemo}>Login with Demo User</a></dib>
                    </div>
                </form>
            </div>
        )
    }

}

export default SessionForm;