/* eslint-disable no-script-url */
import React from 'react';
import 'bulma';
export default function About() {
    return (
        <section className="section" id="about">
            <div className="section-heading">
                <h3 className="title is-2">About Me</h3>
                <h4 className="subtitle is-5">
                    Much more than your average web developer.
                </h4>
                <div className="container">
                    <p>
                        Web developer with more than <strong>4 years </strong>
                        of well-rounded experience working mainly with PHP and
                        JavaScript, extensive knowledge of modern Web
                        techniques, architectures and design patterns. My{' '}
                        <strong>dream</strong> is to build something big enough
                        to leave a mark in history, and so I wish to work in an
                        organization that pursue something as well. If you're
                        building the product you dream about or have an
                        enterprise with a clear mission, give me a call.
                    </p>
                    <br />
                </div>
            </div>

            <div className="columns has-same-height is-gapless">
                <div className="column">
                    <div className="card">
                        <div className="card-content">
                            <h3 className="title is-4">Profile</h3>

                            <div className="content">
                                <table className="table-profile">
                                    <tbody>
                                    <tr>
                                        <th colSpan="1" />
                                        <th colSpan="2" />
                                    </tr>
                                    <tr>
                                        <td>Address:</td>
                                        <td>Rio de Janeiro</td>
                                    </tr>
                                    <tr>
                                        <td>Phone:</td>
                                        <td>+55 21 99899-9599</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>aylandesousa@gmail.com</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br />
                            <div className="buttons has-addons is-centered">
                                <a
                                    href="https://github.com/aylanboscarino"
                                    target="blank"
                                    className="button is-link">
                                    Github
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/aylan-boscarino-a160b16b/"
                                    target="blank"
                                    className="button is-link">
                                    LinkedIn
                                </a>
                                <a
                                    href="https://twitter.com/aylan_boscarino"
                                    target="blank"
                                    className="button is-link">
                                    Twitter
                                </a>
                                {/* <a href="#" className="button is-link">CodeTrace</a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-3by3">
                                <img
                                    src="https://i.ibb.co/dBxz4fM/myself.jpg"
                                    alt="Placeholder"
                                />
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="card-content skills-content">
                            <h3 className="title is-4">Skills</h3>
                            <div className="content">
                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>Javascript:</strong>
                                                <br />
                                                <progress
                                                    className="progress is-primary"
                                                    value="90"
                                                    max="100"
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>PHP:</strong>
                                                <br />
                                                <progress
                                                    className="progress is-primary"
                                                    value="90"
                                                    max="100"
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>Node.js</strong>
                                                <br />
                                                <progress
                                                    className="progress is-primary"
                                                    value="95"
                                                    max="100"
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>Laravel</strong>
                                                <br />
                                                <progress
                                                    className="progress is-primary"
                                                    value="95"
                                                    max="100"
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>
                                                    React (web and mobile):
                                                </strong>
                                                <br />
                                                <progress
                                                    className="progress is-primary"
                                                    value="75"
                                                    max="100"
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>SQL</strong>
                                                <br />
                                                <progress
                                                    className="progress is-primary"
                                                    value="86"
                                                    max="100"
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article className="media">
                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                                <strong>MongoDB</strong>
                                                <br />
                                                <progress
                                                    className="progress is-primary"
                                                    value="70"
                                                    max="100"
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
