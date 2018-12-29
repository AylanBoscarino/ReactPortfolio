import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles.css';

export class TelaCadastro extends Component {
    static propTypes = {
        prop: PropTypes
    };

    render() {
        return (
            <section className="hero is-fullheight is-fullheight-with-navbar">
                <div className="hero-body">
                    <div className="container">
                        <div className="section">
                            <div className="heading">
                                <h1 className="title is-3">Bulma Material Design Form Elements</h1>
                            </div>
                            <span className="subtitle">Based on <a href="/jonnitto/pen/OVmvPB">the work by</a> Jon Uhlmann</span>
                            <hr />
                            <div className="columns">
                                <div className="column is-three-quarters">
                                    <div className="control has-icon has-icon-right">
                                        <input className="input" type="text" required />
                                        <i className="fa material-icons">face</i>
                                        <label className="label">Name</label>
                                        <i className="bar"></i>
                                    </div>
                                    <div className="control">
                                        <input className="input is-success" type="text" value="bulma" required />
                                        <label className="label">Username</label>
                                        <i className="bar"></i>
                                    </div>
                                    <p className="con trol has-icon has-icon-right has-error">
                                        <input className="input" type="text" value="hello@" required />
                                        <i className="fa material-icons">warning</i>
                                        <label className="label">Email</label>
                                        <i className="bar"></i>
                                        <span className="help is-danger">This email is invalid</span>
                                    </p>

                                    <p className="control">
                                        <select>
                                            <option>Select dropdown</option>
                                            <option>With options</option>
                                        </select>
                                        <label className="label">Subject</label>
                                        <i className="bar"></i>
                                    </p>
                                    <p className="control">
                                        <textarea className="textarea" required></textarea>
                                        <label className="label">Message</label>
                                        <i className="bar"></i>
                                    </p>
                                    <p className="checkbox-control">
                                        <label>
                                            <input type="checkbox" />
                                            <i className="helper"></i>
                                            Remember me
                                        </label>
                                    </p>
                                    <p className="radio-control">
                                        <label>
                                            <input type="radio" name="question" />
                                            <i className="helper"></i>
                                            Yes
                                        </label>
                                        <label>
                                            <input type="radio" name="question" />
                                            <i className="helper"></i>
                                            No
                                        </label>
                                    </p>
                                    <p className="control">
                                        <button className="button is-primary">Submit</button>
                                        <button className="button is-link">Cancel</button>
                                    </p>
                                </div>
                                <div className="column">
                                    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                                    {/* <!-- ad --> */}
                                    <ins className="adsbygoogle"
                                        style={{ display: "block" }}
                                        data-ad-client="ca-pub-7616772085785107"
                                        data-ad-slot="4486838427"
                                        data-ad-format="auto"></ins>
                                    <script>
                                        (adsbygoogle = window.adsbygoogle || []).push({});
                                    </script>
                                </div>
                            </div>
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
