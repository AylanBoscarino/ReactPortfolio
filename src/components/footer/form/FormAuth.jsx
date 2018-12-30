import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bulma';
import './styles.css';

import TelaLogin from '../tela-login/TelaLogin';
import TelaCadastro from '../tela-cadastro/TelaCadastro';
import { login, signup } from '../../../actions/auth';

export class FormAuth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            possuiCadastro: false
        };

        this.onSwitch = this.onSwitch.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.onSignup = this.onSignup.bind(this)
    }

    onSwitch() {
        this.setState(currentState => ({
            possuiCadastro: !currentState.possuiCadastro
        }));
    }

    onLogin(data) {
        this.props.login(data.email, data.password);
    }

    onSignup(data) {
        this.props.signup(data.name, data.email, data.password);
    }

    render() {
        console.log(this.props);
        return (
            <section className="is-primary is-fullheight columns">
                <div className="container column is-two-thirds">
                    <div className="columns is-5-tablet is-4-desktop is-3-widescreen">
                        <div className="column">
                            <p className="title">Token :{this.props.user.token}</p>

                            <label className="label">Alredy a friend?</label>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    checked={this.state.possuiCadastro}
                                    onChange={this.onSwitch}
                                />
                                <span className="slider round" />
                            </label>
                            <br />
                            {this.state.possuiCadastro ? (
                                <TelaLogin onLogin={this.onLogin} />
                            ) : (
                                <TelaCadastro onSignup={this.onSignup} />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    ...state.auth
});

const mapDispatchToProps = {
    login,
    signup
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormAuth);
