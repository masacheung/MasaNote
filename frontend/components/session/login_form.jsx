import React from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

class LogInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.userForm;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(this.props.history.push("/notes"))
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {
        return (
            <div>
                <h1>Log In</h1>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Username" onChange={this.update("username")} type="text" value={this.state.username}/>
                    <input placeholder="Password" onChange={this.update("password")} type="password" value={this.state.password}/>
                    <button>Log In</button>
                    <button onClick={() => this.props.history.push("/demo")}>Demo</button>
                    <Link to="/signup">Sign Up</Link>
                </form>
            </div>
        )
    }
}

export default withRouter(LogInForm);