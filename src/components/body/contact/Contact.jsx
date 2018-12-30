import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <section class="section" id="contact">
                    <div class="container">
                        <div class="section-heading">
                            <h3 class="title is-2">Contact</h3>
                            <h4 class="subtitle is-5">Get in touch</h4>
                        </div>
                        <br />

                        <div class="columns">
                            <div class="column is-6 is-offset-3">
                                <div class="box">
                                    <div class="field">
                                        <label class="label">Name</label>
                                        <div class="control">
                                            <input
                                                class="input"
                                                type="text"
                                                placeholder="Text input"
                                            />
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Email</label>
                                        <div class="control has-icons-left">
                                            <input
                                                class="input"
                                                type="email"
                                                placeholder="Email input"
                                                value=""
                                            />
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-envelope" />
                                            </span>
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Message</label>
                                        <div class="control">
                                            <textarea
                                                class="textarea"
                                                placeholder="Textarea"
                                            />
                                        </div>
                                    </div>

                                    <div class="field is-grouped has-text-centered">
                                        <div class="control">
                                            <button class="button is-link is-large">
                                                <span class="icon">
                                                    <i class="fas fa-envelope" />
                                                </span>
                                                <span>Submit</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
