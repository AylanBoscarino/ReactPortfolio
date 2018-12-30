import React, { Component } from 'react';
import { Link } from 'react-scroll';

import 'bulma';

import './Navbar.css';

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuOpen: false
        };

        this.menuToggle = this.menuToggle.bind(this);
    }
    menuToggle() {
        this.setState(currentState => ({
            menuOpen: !currentState.menuOpen
        }));
    }
    render() {
        const isActive = this.state.menuOpen && 'is-active';
        return (
            <nav className="navbar is-dark is-fixed-top">
                <div className="navbar-brand">
                    <div
                        className={`navbar-burger burger ${isActive}`}
                        data-target="navbarExampleTransparentExample"
                        onClick={this.menuToggle}>
                        <span />
                        <span />
                        <span />
                    </div>
                </div>

                <div
                    id="navbarExampleTransparentExample"
                    className={`navbar-menu ${isActive}`}
                    onClick={this.menuToggle}>
                    <div className="navbar-start">
                        <Link className="navbar-item" to="home" smooth={true}>
                            <span className="icon">
                                <i className="fas fa-home" />
                            </span>
                            <span>Home</span>
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <Link className="navbar-item" to="about" smooth={true}>
                            <span className="icon">
                                <i className="fas fa-info" />
                            </span>
                            <span>About</span>
                        </Link>
                        <Link
                            className="navbar-item"
                            to="services"
                            smooth={true}>
                            <span className="icon">
                                <i className="fas fa-bars" />
                            </span>
                            <span>Services</span>
                        </Link>

                        <Link
                            className="navbar-item"
                            to="portfolio"
                            smooth={true}>
                            <span className="icon">
                                <i className="fas fa-th-list" />
                            </span>
                            <span>Portfolio</span>
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}
