import React, { Component } from 'react';

import { validarInputs } from '../../../service/formValidation';

export default class TelaCadastro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            name: '',
            password: '',
            passwordConfirmation: ''
        };

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onConfirmationChange = this.onConfirmationChange.bind(this);
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
    }
    onEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    onNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    onPasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    onConfirmationChange(e) {
        this.setState({
            passwordConfirmation: e.target.value
        });
    }
    onSubmitHandle(e) {
        e.preventDefault();
        const resultado = validarInputs(
            this.state.name,
            this.state.email,
            this.state.password,
            this.state.passwordConfirmation
        );
        if (!resultado.valido) {
            return alert(resultado.mensagem);
        } else {
            return alert('vai disparar uma action');
        }
    }

    render() {
        return (
            <form className="box" onSubmit={this.onSubmitHandle}>
                <div className="field has-text-centered">
                    <h3 className="title">Sign Up</h3>
                    <h3 className="subtitle">Join us and leave a comment</h3>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left">
                        <input
                            type="email"
                            className="input"
                            placeholder="an email address"
                            value={this.state.email}
                            onChange={this.onEmailChange}
                        />
                        <span className="icon is-small is-left">
                            <i className="fa fa-envelope" />
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control has-icons-left">
                        <input
                            type="name"
                            className="input"
                            placeholder="your name"
                            value={this.state.name}
                            onChange={this.onNameChange}
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
                    <label className="label">Repeat Password</label>
                    <div className="control has-icons-left">
                        <input
                            type="password"
                            className="input"
                            placeholder="*********"
                            required
                            value={this.state.passwordConfirmation}
                            onChange={this.onConfirmationChange}
                        />
                        <span className="icon is-small is-left">
                            <i className="fa fa-lock" />
                        </span>
                    </div>
                </div>
                <div className="field">
                    <button className="button is-success">sign up</button>
                </div>
            </form>
        );
    }
}
