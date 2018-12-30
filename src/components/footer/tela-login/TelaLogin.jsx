import React, { Component } from 'react';
import 'bulma';

export default class TelaLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    onPasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onLogin(this.state);
    }

    render() {
        return (
            <form className="box" onSubmit={this.onSubmit}>
                <div className="field has-text-centered">
                    <h3 className="title">Login</h3>
                    <h3 className="subtitle">It's nice to see you again</h3>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left">
                        <input
                            type="email"
                            className="input"
                            placeholder="e.g. hkakehas@cisco.com"
                            required
                            value={this.state.email}
                            onChange={this.onEmailChange}
                        />
                        <span className="icon is-small is-left">
                            <i className="fa fa-envelope" />
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left">
                        <input
                            type="password"
                            className="input"
                            placeholder="*********"
                            required
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                        />
                        <span className="icon is-small is-left">
                            <i className="fa fa-lock" />
                        </span>
                    </div>
                </div>
                <div className="field">
                    <button className="button is-success">Login</button>
                </div>
            </form>
        );
    }
}
