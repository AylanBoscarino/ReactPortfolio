import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'bulma';
import './styles.css'
export class TelaCadastro extends Component {
    static propTypes = {
        prop: PropTypes
    };

    render() {
        return (
            <section className="is-primary is-fullheight columns">
              <div className="container column is-one-third">
                <div className="columns is-5-tablet is-4-desktop is-3-widescreen">
                    <div className="column">
                        <form className="box">
                            <div className="field has-text-centered">
                                <h3 className="title">Login</h3>
                            </div>
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control has-icons-left">
                                    <input type="email" className="input" placeholder="e.g. hkakehas@cisco.com" />
                                    <span className="icon is-small is-left">
                                        <i className="fa fa-envelope"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control has-icons-left">
                                    <input type="password" className="input" placeholder="*********" required />
                                    <span className="icon is-small is-left">
                                        <i className="fa fa-lock"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <button className="button is-success">
                                    Login
                                </button>
                            </div>
                        </form>
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
)(TelaCadastro);
