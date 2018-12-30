import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'bulma';
import './styles.css';

import TelaLogin from '../tela-login/TelaLogin';
import TelaCadastro from '../tela-cadastro/TelaCadastro';

export class FormAuth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            possuiCadastro: false
        };
        
        this.onSwitch = this.onSwitch.bind(this);
    }

    onSwitch() {
        this.setState(currentState => ({
            possuiCadastro: !currentState.possuiCadastro
        }));
    }

    render() {
        const form = this.state.possuiCadastro ? <TelaLogin /> : <TelaCadastro />
        return (
            <section className="is-primary is-fullheight columns">
                <div className="container column is-two-thirds">
                    <div className="columns is-5-tablet is-4-desktop is-3-widescreen">
                        <div className="column">
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
                            {form}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormAuth);
