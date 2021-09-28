import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            email: "",
            password: "",
            username: ""
        };
        this.handleSubmite = this.handleSubmite.bind(this);
    }

    handleSubmite(e) {
        e.preventDefault();
        this.props.createUser(this.state)
            .then(() => this.props.history.push("/notes"))
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmite}>
                    <input placeholder="Email" onChange={this.update('email')} type="text" value={this.state.email} />
                    <input placeholder="Username" onChange={this.update('username')} type="text" value={this.state.username} />
                    <input placeholder="Password" onChange={this.update('password')} type="password" value={this.state.password} />
                    <button>Sign Up</button>
                    <button onClick={() => this.props.history.push("demo")}>Demo</button>
                    <Link to="/login">Log In</Link>
                </form>
            </div>
        )
    }
}

export default withRouter(SignUpForm);