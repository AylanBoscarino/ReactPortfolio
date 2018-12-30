import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <section className="hero is-dark is-fullheight is-fullheight-with-navbar">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title is-1">Aylan Boscarino</h1>
                        <h2 className="subtitle is-3">
                            Full Stack Web Developer
                        </h2>
                    </div>
                </div>
            </section>
        );
    }
}
